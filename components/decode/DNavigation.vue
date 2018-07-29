<template>

  <header :id="headerVersion" :class="[headerVersion]">
    <Container is-fluid @scroll="scrollListener">
      <Row>
        <Column class="col-md-1">

          <div id="logo">
            <nuxt-link class="navbar-brand" to="/">
              <img width="40px" src="~/assets/logo-ikon.svg" alt="NetAcademia Oktatóközpont Kft."/>
            </nuxt-link>
          </div>

        </Column>
        <Column class="col-md-11">
          <no-ssr>
            <nav class="transparent" v-if="!isMobileMenu">
              <ul class="menu clearfix">
                <li v-for="m in menu" :key="m.link">
                  <nuxt-link :to="m.link">{{m.text}}</nuxt-link>
                </li>
              </ul>
            </nav>

            <nav v-else>
              <a class="mobile-menu-button" href="#" data-toggle="collapse" data-target="#menu">
                <i class="decode-icon-menu"></i>
              </a>

              <ul class="navbar-nav clearfix collapse navbar-collapse" id="menu">
                <li v-for="m in menu" :key="m.link">
                  <nuxt-link :to="m.link" class="waves">{{m.text}}</nuxt-link>
                </li>
              </ul>

            </nav>
          </no-ssr>
        </Column>
      </Row>
    </Container>
  </header>
</template>

<script>
import { AUTH_LOGOUT_ACTION, AUTH_REQ_ACTION } from "@/store/user";
import { mapState } from "vuex";
import Row from "@/components/base/Row";
import Container from "@/components/base/Container";
import Column from "@/components/base/Column";

export default {
  name: "DNavigation",
  components: { Column, Container, Row },
  // props: {
  //   theme: {
  //     type: String,
  //     default: "light",
  //     validator: function(val) {
  //       return ["light", "dark", "transparent", "logo"].indexOf(val) !== -1;
  //     }
  //   }
  // },
  head() {
    return {
      bodyAttrs: {
        class: "header-transparent"
      }
    };
  },
  computed: {
    ...mapState({
      user: state => state.user,
      loginUrl(state) {
        return (
          `${state.url.backend}${state.url.login}` +
          `?returnUrl=${state.url.base}${this.$route.path}`
        );
      }
    }),
    isMobileMenu() {
      return this.$mq !== "xl";
    }
    // themeClass: function() {
    //   switch (this.theme) {
    //     case "transparent":
    //       return {
    //         nav: ["navbar-dark", "bg-under-md"],
    //         dropdownMenu: ["bg-under-md"],
    //         dropdownItem: ["text-light-under-md"]
    //       };
    //     case "dark":
    //       return {
    //         nav: ["navbar-dark", "bg-dark"],
    //         dropdownMenu: ["bg-dark"],
    //         dropdownItem: ["text-light dark-hover"]
    //       };
    //     default:
    //       return {
    //         nav: ["navbar-light", "bg-light"],
    //         dropdownMenu: [],
    //         dropdownItem: []
    //       };
    //   }
    // }
  },
  data() {
    return {
      headerVersion: 'header',
      menu: [
        { text: "Tanfolyamkereső", link: "/tanfolyamkereso" },
        { text: "Induló tanfolyamok", link: "/indulotanfolyamok" },
        { text: "NetAcademia Certificate", link: "/certificate" },
        { text: "Lenyűgöző tanfolyamok", link: "/lenyugozo-tanfolyamok" },
        { text: "Előfizetés", link: "/elofizetes" },
        { text: "Business előfizetés", link: "/business" }
      ]
    };
  },
  methods: {
    scrollListener() {
      if (!this.isMobileMenu) {
        this.headerVersion = window.scrollY < 100 ? 'header' : 'header-sticky';
      }
    },
    logOut() {
      this.$store.dispatch(`user/${AUTH_LOGOUT_ACTION}`);
    }
  },
  mounted: function() {
    this.$store.dispatch(`user/${AUTH_REQ_ACTION}`);
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }
};
</script>

<style lang="scss">
@import "../../scss/decode/layout/header";
@import "../../scss/decode/layout/header-top";
@import "../../scss/decode/layout/header-logo";
@import "../../scss/decode/layout/header-menu";
@import "../../scss/decode/layout/header-mobile-menu";
@import "../../scss/decode/layout/header-sticky";
</style>
