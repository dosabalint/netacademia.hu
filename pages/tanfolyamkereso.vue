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
              <label v-for="c in categoryCollection" :key="c.text"
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
                  <template v-if="!loading">
                    <div id="filter" role="radiogroup" tabindex="-1" class="btn-group-toggle btn-group">
                      <label v-for="f in filterCollection" :key="f.text"
                             class="btn btn-outline-primary" :class="{ active: f.value === filter }">
                        <input :id="f.value" type="radio" name="filter" autocomplete="off"
                               :value="f.value" v-model="filter">
                        <span><span>{{f.text}}</span></span>
                      </label>
                    </div>
                  </template>
                </Column>
                <Column class="ml-auto pr-3">
                  <h5 class="p-0 m-0">
                    találatok száma: {{ filteredAndSortedCourses.length }}
                  </h5>
                </Column>
              </Row>
              <Row>
                <Column class="col-12 col-lg-6 col-xl-4"
                        v-for="course in filteredAndSortedCourses"
                        :key="course.UserfriedlyURL">
                  <TanfolyamkeresoCard
                    :user-friendly-url="course.UserfriedlyURL"
                    :picture-url="`${$store.state.url.backend}${$store.state.url.courseCardPicture}/${course.PictureID}`"
                    :title="course.Title"
                    :subtitle="course.SubTitle"
                    :trainers="course.TrainerNames"
                    :price="course.Price"
                    :length="course.LengthInHours"
                    :url="`${$store.state.url.backend}/${course.UrlWithTreeStructure}`"
                    :preliminary="course.IsPreliminary"
                    @click="productClick(course)"
                    @visible="productVisible"
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
import Container from "@/components/base/Container";
import Row from "@/components/base/Row";
import Column from "@/components/base/Column";
import TanfolyamkeresoCard from "@/components/TanfolyamkeresoCard";
import DPageHeader from "@/components/decode/DPageHeader";

const FILTERS = [
  { text: "Kiemelt", value: "isPromoted", labelString: "#kiemelt#" },
  { text: "Tervezett", value: "IsPreliminary" },
  { text: "Induló", value: "isComingSoon" },
  { text: "Futó", value: "isRunning" },
  { text: "Mind", value: "" }
];

const SEARCH_FIELDS = [
  "Title",
  "SubTitle",
  "Description",
  "Labels4Search",
  "TrainerNames",
  "UserfriedlyURL"
];

export default {
  name: "tanfolyamkereso",
  components: {DPageHeader, Container, Row, Column, TanfolyamkeresoCard },
  layout: "nav-light",
  data() {
    return {
      filterCollection: FILTERS,
      filter: FILTERS[0].value,
      categoryCollection: [],
      category: "",
      searchFields: SEARCH_FIELDS,
      loading: true,
      isFirstLoad: true,
      srcCourseCollection: [],
      selectedSort: {},
      searchText: "",
      sortByOptions: [
        { name: "A->Z", field: "Title", order: "asc" },
        { name: "Z->A", field: "Title", order: "desc" },
        { name: "Régi->Új", field: "LastUpdate", order: "asc" },
        { name: "Új->Régi", field: "LastUpdate", order: "desc" },
        { name: "Olcsó->Drága", field: "Price", order: "asc" },
        { name: "Drága->Olcsó", field: "Price", order: "desc" },
        { name: "Népszerűek", field: "StudentNumber", order: "desc" }
      ]
    };
  },
  created: function() {
    this.selectedSort = this.sortByOptions[0];
  },
  async mounted() {
    await this.$axios
      .$get(`${this.$store.state.url.backend}${this.$store.state.url.courses}`)
      .then(courses => courses.map(c => this.fixLastUpdate(c)))
      .then(courses => courses.map(c => this.fixCategories(c)))
      .then(courses =>
        courses.map(c =>
          this.generatePromoted(
            c,
            this.filterCollection[0].labelString,
            this.filterCollection[0].value
          )
        )
      )
      .then(courses =>
        courses.map(c =>
          this.generateIsComingSoon(c, this.filterCollection[2].value)
        )
      )
      .then(courses =>
        courses.map(c =>
          this.generateIsRunning(c, this.filterCollection[3].value)
        )
      )
      .then(courses =>
        courses.map(c =>
          this.generateTrainerNamesAndIndex(c, this.searchFields)
        )
      )
      .then(courses => (this.srcCourseCollection = [...courses]))
      .then(_ => (this.loading = false))
      .catch(err => console.warn("course fetch fail: ", err));

    await this.$axios
      .$get(
        `${this.$store.state.url.backend}${this.$store.state.url.categories}`
      )
      .then(r =>
        // map api answer to view usage
        r.map(c => {
          return { text: c.Title, value: c.UserfriendlyUrl };
        })
      )
      .then(r => {
        r.unshift({ text: "Ultimate", value: "NetAcademia Ultimate" });
        this.categoryCollection = r;
        this.category = r[0].value;
        return r;
      })
      .catch(err => console.warn("course fetch fail: ", err));
  },
  computed: {
    courseCollection: function() {
      return [...this.srcCourseCollection];
    },
    filteredAndSortedCourses: function() {
      return this.sortBy(
        this.filterBy(
          this.courseCollection,
          this.filter,
          this.category,
          this.searchText
        ),
        this.selectedSort
      );
    }
  },
  watch: {
    category: function(newCategory, oldCategory) {
      if (this.filter === FILTERS[0].value && this.isFirstLoad) {
        this.isFirstLoad = false;
        this.filter = "";
      }
    },
    searchText: function(newSearch, oldSearch) {
      if (newSearch.length !== oldSearch.length && this.isFirstLoad) {
        this.isFirstLoad = false;
        this.filter = "";
      }
    }
  },
  methods: {
    productClick: function(course) {
      const productInfo = {
        event: "productClick",
        ecommerce: {
          click: {
            actionField: {
              list: this.searchText.length ? "searchResult" : "tanfolyamkereső"
            },
            products: [
              {
                name: course.Title,
                id: course.UserfriedlyURL,
                price: course.Price,
                brand: "NetAcademia",
                category: "Tanfolyam",
                list: this.searchText.length
                  ? "searchResult"
                  : "tanfolyamkereső",
                position:
                  1 +
                  this.filteredAndSortedCourses.findIndex(
                    c => c.UserfriedlyURL === course.UserfriedlyURL
                  ),
                PCategories: course.OtherCategories
              }
            ]
          }
        }
      };

      console.log("productClick: ", productInfo);

      if (typeof dataLayer === "object") {
        dataLayer.push(productInfo);
      }
    },
    productVisible: function(payload) {
      const course = this.filteredAndSortedCourses.find(
        c => c.UserfriedlyURL === payload.userFriendlyUrl
      );

      if (course) {
        const productImpression = {
          event: "productImpression",
          ecommerce: {
            impressions: [
              {
                name: course.Title,
                id: course.UserfriedlyURL,
                price: course.Price,
                brand: "NetAcademia",
                category: "Tanfolyam",
                list: this.searchText.length
                  ? "searchResult"
                  : "tanfolyamkereső",
                position:
                  1 +
                  this.filteredAndSortedCourses.findIndex(
                    c => c.UserfriedlyURL === course.UserfriedlyURL
                  ),
                PCategories: course.OtherCategories
              }
            ]
          }
        };

        console.log("productImpression: ", productImpression);

        if (typeof dataLayer === "object") {
          dataLayer.push(productImpression);
        }
      } else {
        console.warn("hat ez mar nem Kansas....");
      }
    },
    filterBy: function(src, filter, category, searchText) {
      return src
        .filter(c => (filter.length === 0 ? true : c[filter]))
        .filter(
          c =>
            category === "NetAcademia Ultimate"
              ? true
              : c.OtherCategories.includes(category)
        )
        .filter(
          c =>
            searchText.length === 0
              ? true
              : c.index.indexOf(searchText.toLowerCase()) >= 0
        );
    },
    sortBy: function(src, sort) {
      if (src.length > 0) {
        const { field, order } = sort;
        src.sort((a, b) => {
          let sort = 0;

          // rendezzunk ha nem stringek vagyunk, hanem mondjuk datum vagy szam
          if (typeof a[field] !== "string") {
            sort = a[field] - b[field];
          }

          // ha alap rendezes szerint egyforma akkor egyertelmusitunk index alapjan
          // vagy ha szovegesen akarunk rendezni, akkor hasznaljuk a seachIndex-et
          if (sort === 0 || typeof a[field] === "string") {
            sort = a.index.localeCompare(b.index);
          }

          // ha csokkenobe akarunk rendezni akkor csak invertalunk
          return sort * (order === "asc" ? 1 : -1);
        });
      }
      return src;
    },
    fixCategories: function(src) {
      if (
        src.OtherCategories.length === 0 ||
        src.RecomendedCategoryTitle === "NetAcademia Ultimate"
      ) {
        src.OtherCategories.push(src.RecomendedCategoryTitle);
      }

      return src;
    },
    fixLastUpdate: function(src) {
      if (!src.LastUpdate) {
        src.LastUpdate = new Date(src.CourseEndDate);
      } else {
        src.LastUpdate = new Date(src.LastUpdate);
      }

      return src;
    },
    generatePromoted: function(src, searchString, propName) {
      src[propName] =
        src.Labels4Search !== null
          ? src.Labels4Search.indexOf(searchString) >= 0
          : false;
      return src;
    },
    generateIsComingSoon: function(src, propName) {
      src[propName] =
        Date.now() <= new Date(src.CourseStartDate) && !src.IsPreliminary;
      return src;
    },
    generateIsRunning: function(src, propName) {
      const now = Date.now();
      src[propName] =
        new Date(src.CourseStartDate) <= now &&
        now <= new Date(src.CourseEndDate);
      return src;
    },
    generateTrainerNamesAndIndex: function(src, props) {
      src["TrainerNames"] = src.Trainers.map((t = { Name: "" }) => t.Name).join(
        ", "
      );
      src["index"] = props.reduce((a, currProp) => {
        return a.concat(src[currProp]).toLowerCase();
      }, "");
      return src;
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
