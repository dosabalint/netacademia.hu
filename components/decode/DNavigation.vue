<template>
  <div :class="{'header-transparent': !isMobileMenu}">
    <header :id="headerVersion" :class="[headerVersion]">
      <Container is-fluid>
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
              <nav class="transparent" :class="{'mt-2': isMobileMenu}">
                <a class="mobile-menu-button" href="#"
                   v-if="isMobileMenu"
                   @click="menuOpen = !menuOpen"
                >
                  <i class="decode-icon-menu"></i>
                </a>

                <ul id="menu" class="clearfix"
                    :class="{
                      'navbar-nav collapse navbar-collapse': isMobileMenu,
                      'menu': !isMobileMenu,
                      'show': menuOpen
                    }"
                >
                  <li v-for="m in menu" :key="m.link">
                    <nuxt-link :to="m.link" :class="{'waves': isMobileMenu}">{{m.text}}</nuxt-link>
                  </li>
                </ul>
              </nav>
            </no-ssr>
          </Column>
        </Row>
      </Container>
    </header>
  </div>
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
  },
  data() {
    return {
      headerVersion: "header",
      menuOpen: false,
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
        this.headerVersion = window.scrollY < 100 ? "header" : "header-sticky";
      }
    },
    logOut() {
      this.$store.dispatch(`user/${AUTH_LOGOUT_ACTION}`);
    }
  },
  mounted: function() {
    this.$store.dispatch(`user/${AUTH_REQ_ACTION}`);
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
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
