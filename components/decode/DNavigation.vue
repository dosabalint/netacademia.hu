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
                   @click="toggleMenu">
                  <i class="decode-icon-menu"></i>
                </a>

                <!-- desktop menu -->
                <ul id="menu" class="clearfix"
                    :class="{
                      'navbar-nav collapse navbar-collapse': isMobileMenu,
                      'menu': !isMobileMenu
                    }">
                  <li v-for="m in menu" :key="m.link">
                    <nuxt-link :to="m.link" :class="{'waves': isMobileMenu}">{{ m.text }}</nuxt-link>
                  </li>

                  <!-- user login/logout -->
                  <li v-if="!user.isLoggedIn">
                    <a class="nav-link text-center" :href="loginUrl">Bejelentkezés</a>
                  </li>
                  <li class="nav-item dropdown text-center" v-else>
                    <nuxt-link class="nav-link dropdown-toggle" to="" id="navbarDropdownMenuLink"
                               data-toggle="dropdown">
                      {{user.name}}
                    </nuxt-link>
                    <div class="dropdown-menu" :class="themeClass.dropdownMenu"
                         aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" :class="themeClass.dropdownItem"
                         href="/Adataim">Adataim</a>
                      <button class="dropdown-item" :class="themeClass.dropdownItem" @click.prevent="logOut">
                        Kijelentkezés
                      </button>
                    </div>
                  </li>

                </ul>

                <!-- mobile menu -->
                <ul class="text-left pl-0" id="mobile-menu" style="touch-action: pan-y;"
                    :class="{
                      open: menuOpen
                    }">

                  <li v-for="m in menu" :key="m.link" class="w-100">
                    <nuxt-link :to="m.link" :class="{'waves': isMobileMenu}">{{ m.text }}</nuxt-link>
                  </li>

                  <!-- user login/logout -->
                  <li v-if="!user.isLoggedIn">
                    <a class="nav-link" :href="loginUrl">Bejelentkezés</a>
                  </li>
                  <li class="w-100 dropdown" v-else>
                    <a class="waves" data-toggle="collapse" data-target="#adataim">
                      {{ user.name }}
                      <fa :icon="['fas', 'angle-down']" class="ml-2"/>
                    </a>

                    <ul class="collapse" id="adataim">
                      <li><a class="waves" href="/Adataim">Adataim</a></li>
                      <li><a class="waves" @click.prevent="logOut">Kijelentkezés</a></li>
                    </ul>
                  </li>

                </ul>
              </nav>
            </no-ssr>
          </Column>
        </Row>
      </Container>
    </header>
    <div class="overlay" v-show="menuOpen" @click="toggleMenu"></div>
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
      },
      themeClass: function() {
        switch (this.theme) {
          case "transparent":
            return {
              nav: ["navbar-dark", "bg-under-md"],
              dropdownMenu: ["bg-under-md"],
              dropdownItem: ["text-light-under-md"]
            };
          case "dark":
            return {
              nav: ["navbar-dark", "bg-dark"],
              dropdownMenu: ["bg-dark"],
              dropdownItem: ["text-light dark-hover"]
            };
          default:
            return {
              nav: ["navbar-light", "bg-light"],
              dropdownMenu: [],
              dropdownItem: []
            };
        }
      }
    },
    data() {
      return {
        headerVersion: "header",
        menuOpen: false,
        menu: [
          { text: "Tanfolyamkereső", link: "/tanfolyamkereso" },
          { text: "Induló tanfolyamok", link: "/indulotanfolyamok" },
          { text: "Certificate", link: "/certificate" },
          { text: "Előfizetések", link: "/elofizetes" },
          { text: "Business előfizetés", link: "/business" },
          { text: "Rólunk", link: "/rolunk" }
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
      },
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
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

  div.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.75);
  }

  div.dropdown-menu {
    button.dropdown-item {
      padding: 7px 13px;
    }
  }

  #mobile-menu {
    left: -300px;
    width: 300px;
  }
</style>
