<template>
  <div>
    <DPageHeader
      asset-image="~/assets/default-header-bg.svg"
      icon="decode-icon-search"
    >
      <h1>Tanfolyamkereső</h1>
    </DPageHeader>
    <Container is-fluid>
      <Row class="flex-xl-nowrap">
        <Column class="col-12 col-md-5 col-lg-4 col-xl-3 bd-sidebar ">
          <div class="form-group my-3 pt-2">
            <h3 class="d-none d-sm-block my-4 text-uppercase">Előfizetések:</h3>
            <div id="category" role="radiogroup" tabindex="-1" class="w-100 btn-group-toggle btn-group-vertical">
              <label v-for="c in categories.collection" :key="c.text"
                     class="btn btn-outline-primary" :class="{ active: c.value === category }">
                <input :id="c.value" type="radio" name="filter" autocomplete="off"
                       :value="c.value" v-model="category">
                <span><span>{{c.text}}</span></span>
              </label>
            </div>
            <div class="d-none d-sm-block mt-4">
              <a href="/Home/AllCourses2Excel.xlsx" target="_self" class="btn btn-outline-primary w-100">
                Tanfolyamlista letöltése
              </a>
            </div>
          </div>
        </Column>
        <Column class="col">
          <Row>
            <Container>
              <Row class="sticky-top bg-white pt-5 pb-5">
                <Column class="col-12">
                  <div class="input-group my-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                          <svg class="search-svg" aria-hidden="true"
                               data-prefix="fas" data-icon="search"
                               role="img"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 512 512" data-fa-i2svg=""><path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                      </span>
                    </div>
                    <input id="searchInput" type="text" class="form-control"
                           placeholder="Keresés" value="" v-model="searchText">
                  </div>
                </Column>
                <Column class="col-12 col-md-10 col-xl-5 d-none d-sm-block mb-sm-4 mb-lg-0">
                  <div id="filter" role="radiogroup" tabindex="-1" class="btn-group-toggle btn-group">
                    <label v-for="f in filterCollection" :key="f.text"
                           class="btn btn-outline-primary" :class="{ active: f.value === filter }">
                      <input :id="f.value" type="radio" name="filter" autocomplete="off"
                             :value="f.value" v-model="filter">
                      <span><span>{{f.text}}</span></span>
                    </label>
                  </div>
                </Column>
                <Column class="ml-auto pr-3">
                  <h5 class="p-0 m-0">
                    találatok száma: {{ filteredCourses.length }}
                  </h5>
                </Column>
              </Row>
              <Row>
                <Column class="col-12 col-lg-6 col-xl-4"
                        v-for="course in filteredCourses"
                        :key="course.id">
                  <TanfolyamkeresoCard
                    :user-friendly-url="course.userFriendlyUrl"
                    :picture-url="`${$store.state.url.backend}${$store.state.url.courseCardPicture}/${course.pictureId}`"
                    :title="course.title"
                    :subtitle="course.subtitle"
                    :trainers="course.trainerNames"
                    :price="course.price"
                    :length="course.lengthInHours"
                    :preliminary="course.isPreliminary"
                  ></TanfolyamkeresoCard>
                </Column>
              </Row>
            </Container>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
import Container from "../components/Container";
import Row from "../components/Row";
import Column from "../components/Column";
import TanfolyamkeresoCard from "../components/TanfolyamkeresoCard";
import DPageHeader from "../components/decode/DPageHeader";
import {
  COURSE_COMINGSOON_PROP,
  COURSE_PRELIMINARY_PROP,
  COURSE_PROMOTED_PROP,
  COURSE_PROMOTED_STRING,
  COURSE_RUNNING_PROP
} from "../models/CourseModel";
import { mapState } from "vuex";
import { COURSES_LOAD_ALL_REQ_ACTION } from "../store/courses";
import { CATEGORIES_LOAD_ALL_REQ_ACTION } from "../store/categories";

export default {
  name: "tanfolyamkereso",
  components: { DPageHeader, Container, Row, Column, TanfolyamkeresoCard },
  layout: "nav-light",
  data() {
    return {
      filterCollection: [
        {
          text: "Kiemelt",
          value: COURSE_PROMOTED_PROP,
          labelString: COURSE_PROMOTED_STRING
        },
        { text: "Tervezett", value: COURSE_PRELIMINARY_PROP },
        { text: "Induló", value: COURSE_COMINGSOON_PROP },
        { text: "Futó", value: COURSE_RUNNING_PROP },
        { text: "Mind", value: "" }
      ],
      filter: "",
      category: "",
      searchText: ""
    };
  },
  async fetch({ store }) {
    if (!store.state.categories.collection.length)
      await store.dispatch(`categories/${CATEGORIES_LOAD_ALL_REQ_ACTION}`);
    if (!store.state.courses.collection.length)
      await store.dispatch(`courses/${COURSES_LOAD_ALL_REQ_ACTION}`);
  },
  computed: {
    ...mapState(["courses", "categories"]),
    filteredCourses() {
      return this.courses.collection
        .filter(c => this.filter.length === 0 || c[this.filter])
        .filter(
          c =>
            this.category.length === 0 ||
            c.allCategories.includes(this.category)
        )
        .filter(
          c =>
            this.searchText.length === 0 ||
            c.index.includes(this.searchText.toLowerCase())
        );
    }
  }
};
</script>

<style scoped>
.search-svg {
  /* svg-inline--fa fa-search fa-w-16 fa-lg"*/
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;

  /*.svg-inline--fa.fa-w-16*/
  width: 1em;

  /* .svg-inline--fa.fa-lg */
  vertical-align: -0.225em;

  /*fa-lg*/
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.form-control:focus {
  border-color: #35495e;
  box-shadow: 0 0 0 0.2rem rgba(85, 85, 131, 0.25);
}

.btn-outline-primary {
  color: #35495e;
  background-color: transparent;
  background-image: none;
  border-color: #35495e;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #35495e;
  border-color: #35495e;
}

.btn-outline-primary:focus,
.btn-outline-primary.focus {
  box-shadow: none;
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #35495e;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #35495e;
  border-color: #35495e;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(104, 85, 151, 0.5);
}

.btn-group .btn {
  flex-grow: 1;
}

.bd-sidebar {
  order: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .bd-sidebar {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  @supports (position: sticky) {
    .bd-sidebar {
      position: sticky;
      top: 1rem;
      z-index: 1000;
      height: calc(100vh - 1rem);
    }
  }
}

@media (min-width: 1200px) {
  .bd-sidebar {
    flex: 0 1 400px;
  }
}

@media (max-width: 340px) {
  html {
    font-size: 13px;
  }
}

@media (min-width: 340px) and (max-width: 380px) {
  html {
    font-size: 14px;
  }
}

.input-group * {
  height: 3rem;
}
</style>
