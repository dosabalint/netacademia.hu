<template>
  <footer class="pt-5">
    <div id="footer">

      <div class="container">
        <div class="row">
          <div class="col-md-3">

            <div class="widget widget-text">

              <div>

                <p><img src="../assets/logo.svg" alt=""></p>
                <br>
                <p>Gyakorlatorientált, élő-online oktatás. Tanulj úgy, ahogyan Neked a legjobb: kényelmesen, otthonról,
                  online.</p>

              </div>

            </div>
            <!-- widget-text -->

          </div>
          <!-- col -->
          <div class="col-md-3">

            <div class="widget widget-pages">

              <h6 class="widget-title">Menü</h6>

              <ul>
                <li><nuxt-link to="/">Főoldal</nuxt-link></li>
                <li><nuxt-link to="/tanfolyamkereso">Tanfolyamkereső</nuxt-link></li>
                <li><nuxt-link to="/indulotanfolyamok">Induló tanfolyamok</nuxt-link></li>
                <li><a href="https://www.netacademia.hu/Home/AllCourses2Excel.xlsx">Tanfolyamlista letöltése (XLS)</a></li>
                <li><a href="/oktato">Jelentkezz oktatónak!</a></li>
              </ul>

            </div>
            <!-- widget-pages -->

          </div>
          <!-- col -->
          <div class="col-md-3">

            <div class="widget widget-pages">

              <h6 class="widget-title">Menü</h6>

              <ul>
                <li><nuxt-link to="/elofizetes">Előfizetés</nuxt-link></li>
                <li><nuxt-link to="/certificate">NetAcademia Certificate</nuxt-link></li>
                <li><nuxt-link to="/adatvedelem">Adatvédelem</nuxt-link></li>
                <li><nuxt-link to="/aszf">ÁSZF</nuxt-link></li>
                <li><a href="https://app.netacademia.hu/www.netacademia.hu_NewsLetter">Hírlevél-feliratkozás</a></li>
              </ul>

            </div>
            <!-- widget-pages -->

          </div>
          <!-- col -->
          <div class="col-md-3">

            <div class="widget widget-contact">

              <h6 class="widget-title">Kapcsolat</h6>

              <ul>
                <li><nuxt-link to="/kapcsolat">További részletek</nuxt-link></li>
                <li>+36 20 385 3332</li>
                <li><a href="mailto:iroda@netacademia.net">iroda@netacademia.net</a></li>
                <li>adószám: 13702355-2-42</li>
              </ul>

            </div>
            <!-- widget-contact -->

          </div>
          <!--col -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->

    </div>
    <!-- footer -->

    <div id="footer-bottom">

      <div class="container">
        <div class="row">
          <div class="col-md-6 order-md-6 mb-3 mb-md-0">

            <div class="widget widget-social">

              <div class="social-media rounded text-center text-md-right">

                <a class="facebook" href="https://www.facebook.com/Netacademia/">
                  <fa :icon="['fab', 'facebook']"/>
                </a>

                <a class="twitter" href="https://twitter.com/netacademia">
                  <fa :icon="['fab', 'twitter']"/>
                </a>

                <a class="instagram" href="https://www.instagram.com/netacademia.hu/">
                  <fa :icon="['fab', 'instagram']"/>
                </a>

                <a class="youtube" href="https://www.youtube.com/user/Trombita45">
                  <fa :icon="['fab', 'youtube']"/>
                </a>

                <a class="linkedin mr-0" href="https://www.linkedin.com/company/netacademia/">
                  <fa :icon="['fab', 'linkedin']"/>
                </a>

              </div>
              <!-- social-media -->

            </div>
            <!-- widget-social -->

          </div>
          <!-- col -->
          <div class="col-md-6">

            <div class="widget widget-text">

              <div class="text-center text-md-left">

                <span class="copyright">
                  <img src="../assets/logo-ikon.svg" alt="" width="30"> NetAcademia 1998-2018
                </span>

              </div>

            </div>
            <!-- widget-text -->

          </div>
          <!-- col -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->

    </div>
    <!-- footer-bottom -->

  </footer>
</template>

<script>
  // import fa from fontawe
  export default {
    computed: {
      currentYear: function() {
        return new Date().getFullYear();
      }
    }
  };
</script>

<style lang="scss" scoped>

  $text-color-1: #838383;
  $text-color-2: #afafaf;
  $link-color-hover: #00f0d1;

  footer {
    line-height: 1.75rem;
    overflow: hidden;
  }

  a {
    color: #fff;

    &:hover {
      color: grey;
    }
  }

  #footer {
    background-color: #29273a;
    padding: 100px 0 95px;
  }

  p {
    color: $text-color-1;
    text-decoration: none;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    margin-bottom: 10px;
  }

  .widget-pages,
  .widget-contact {
    h6 {
      color: $text-color-2;
      margin-top: 10px;
      margin-bottom: 30px;
      line-height: 28px;
      font-size: 18px;
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        margin-bottom: 7px;
        color: $text-color-1;

        a {
          color: $text-color-1;
          font-size: 15px;
          -webkit-transition: all 0.25s;
          transition: all 0.25s;

          &:hover {
            color: $link-color-hover;
            text-decoration: none;
          }
        }
      }
    }
  }

  #footer-bottom {
    background-color: #222032;
    padding: 15px 0;

    .copyright {
      color: $text-color-1;
      font-size: 13px;

      img {
        margin-right: 10px;
      }
    }

    .social-media.rounded {
      margin-bottom: 0;

      a {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 5px 10px 5px 0;
        background-color: #636b75;
        color: #fff;
        font-size: 14px;
        line-height: 30px;
        text-align: center;

        &:nth-child(1) {
          background-color: #00f0d1;
        }

        &:nth-child(2) {
          background-color: #1caccc;
        }

        &:nth-child(3) {
          background-color: #3b73c9;
        }

        &:nth-child(4) {
          background-color: #6458c8;
        }

        &:nth-child(5) {
          background-color: #9351c9;
        }

        &:nth-child(6) {
          background-color: #bf4fcb;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .line {
    margin: 0 0 1em;
    line-height: 2em;
    padding: 0;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    font-size: 2em;
    position: relative;
    overflow: hidden;
    text-align: center;

    &:before,
    &:after {
      content: " ";
      position: absolute;
      top: 50%;
      margin-left: -999em;
      height: 2px;
      width: 998em;
      border-top: 1px solid #fff;
      background: rgba(0, 0, 0, 0.2);
    }

    &:after {
      left: auto;
      width: 999em;
      margin: 0 0 0 1em;
    }
  }

  @media (min-width: 1600px) {
    .footer-container {
      margin-right: 250px;
      margin-left: 250px;
    }
  }

  @media (min-width: 1400px) {
    .footer-container {
      margin-right: 80px;
      margin-left: 80px;
    }
  }

  @media (min-width: 1200px) {
    .footer-container {
      margin-right: 50px;
      margin-left: 50px;
    }
  }
</style>
