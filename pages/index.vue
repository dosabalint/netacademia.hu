<template>
  <main>
    <Container is-fluid>
      <Row class="justify-content-end text-left">
        <div class="rev_slider_wrapper">
          <div class="rev_slider" data-version="5.0">
            <ul>
              <li data-transition="fade">

                <img src="~/assets/landing/bg-2-v3.svg" alt="">

                <div class="tp-caption large-title" data-x="680" data-y="center" data-hoffset="-150"
                     data-voffset="-103" data-start="1200" data-speed="300"
                     data-transform_in="o:0;x:100;s:400;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:-100;s:400;e:Power2.easeInOut;">
                  Megszűnik a NetAcademia <br> Ultimate előfizetés!
                </div>

                <div class="tp-caption large-text" data-x="680" data-y="center" data-hoffset="-150" data-voffset="0"
                     data-start="1300" data-speed="300" data-transform_in="o:0;y:100;s:400;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:100;s:400;e:Power2.easeInOut;">
                  Már csak július 2-ig vásárolható korlátlan,<br> egyéves előfizetésünk, a NetAcademia Ultimate! <br>
                </div>

                <div class="tp-caption small-text" data-x="680" data-y="center" data-hoffset="-150" data-voffset="70"
                     data-start="1300" data-speed="300" data-transform_in="o:0;y:100;s:400;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:100;s:400;e:Power2.easeInOut;">
                  Jelen hirdetmény nem vonatkozik a külön megállapodásban elérhető <br> előfizetésekre, pl.
                  informatikatanárok vagy Telekom
                </div>

                <div class="tp-caption" data-x="680" data-y="center" data-hoffset="-150" data-voffset="150"
                     data-start="1400" data-speed="300" data-transform_in="o:0;y:100;s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:100;s:500;e:Power2.easeInOut;">
                  <DButton theme="white-outline" :href="`${$store.state.url.base}/#reszletek`" class="text-light">
                    Részletek<i class="ml-2 decode-icon-cursor"></i>
                  </DButton>
                </div>

                <div class="tp-caption text-special" data-x="680" data-y="center" data-hoffset="-150"
                     data-voffset="-180" data-start="1500" data-speed="300"
                     data-transform_in="o:0;y:-50;s:400;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:100;s:400;e:Power2.easeInOut;">
                  NetAcademia - online oktatás bárhol, bármikor
                </div>

                <div class="tp-caption navigation" data-x="right" data-y="bottom" data-hoffset="30" data-voffset="30"
                     data-start="0" data-speed="300" data-transform_in="o:0;s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;s:500;e:Power2.easeInOut;">
                  01/<span>02</span>
                </div>

              </li>

              <li data-transition="fade">

                <img src="~/assets/landing/bg-1.svg" alt="">

                <div class="tp-caption" data-x="-170" data-y="center" data-voffset="-40" data-start="1200"
                     data-speed="300" data-transform_in="o:0;y:[100%];s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:[100%];s:500;e:Power2.easeInOut;" data-mask_in="x:0;y:0;"
                     data-mask_out="x:0;y:0;">
                  <img src="~/assets/landing/pic-1.png" alt="">
                </div>

                <div class="tp-caption" data-x="265" data-y="center" data-voffset="40" data-start="1300"
                     data-speed="300" data-transform_in="o:0;y:[100%];s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:[100%];s:500;e:Power2.easeInOut;" data-mask_in="x:0;y:0;"
                     data-mask_out="x:0;y:0;">
                  <img src="~/assets/landing/pic-2.png" alt="">
                </div>

                <div class="tp-caption large-title-2" data-x="680" data-y="center" data-voffset="-120"
                     data-start="1400" data-speed="300" data-transform_in="o:0;x:100;s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;x:100;s:500;e:Power2.easeInOut;">
                  Gyakorlatias online oktatás
                </div>

                <div class="tp-caption text" data-x="680" data-y="center" data-start="1450" data-speed="300"
                     data-transform_in="o:0;y:100;s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:100;s:500;e:Power2.easeInOut;">
                  Tanuld azt amit szeretnél, akkor és ott, ahol csak szeretnéd!
                  <br>Oktatóanyagaink segítségével óriási sikereket érhetsz el az élet számos területén! <br> Tegyél
                  szert online, a saját tempódban azokra az ismeretekre és készségekre,<br> mellyekkel
                  előremozdíthatod karrieredet.<br>

                </div>

                <div class="tp-caption" data-x="680" data-y="center" data-hoffset="-120" data-voffset="120"
                     data-start="1500" data-speed="300" data-transform_in="o:0;y:100;s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;y:100;s:500;e:Power2.easeInOut;">
                  <DButton theme="white" class="text-dark"
                           href="https://app.netacademia.hu/Account/Register?returnUrl=/Registration">
                    Ingyenes regisztráció<i class="ml-2 decode-icon-cursor"></i>
                  </DButton>
                </div>

                <div class="tp-caption navigation" data-x="right" data-y="bottom" data-hoffset="30" data-voffset="30"
                     data-start="0" data-speed="300" data-transform_in="o:0;s:500;e:Power2.easeInOut;"
                     data-transform_out="o:0;s:500;e:Power2.easeInOut;">
                  <span>01</span>/02
                </div>

              </li>

            </ul>

            <div class="tp-static-layers">
              <div class="tp-caption tp-resizeme tp-static-layer" data-x="30" data-y="bottom" data-voffset="30"
                   data-start="0" data-startslide="0" data-transform_in="o:0;s:500;e:Power2.easeInOut;"
                   data-transform_out="o:0;s:500;e:Power2.easeInOut;">
                <a id="next-section" href="#next-section"><i class="fa fa-angle-down"></i> Görgess le!</a>
              </div>
            </div>

          </div>
        </div>
      </Row>
    </Container>

    <DFullSection theme="dark">
      <Container>
        <Row>
          <Column class="col-md-3 col-sm-6">
            <DCounter>
              <i class="decode-icon-video"></i>
              <div class="counter-value">320+</div>
              <div class="counter-details">tanfolyam</div>
            </DCounter>
          </Column>
          <Column class="col-md-3 col-sm-6">
            <DCounter>
              <i class="decode-icon-presentation"></i>
              <div class="counter-value">4000+</div>
              <div class="counter-details">óra oktatás</div>
            </DCounter>
          </Column>
          <Column class="col-md-3 col-sm-6">
            <DCounter>
              <i class="decode-icon-viral-marketing"></i>
              <div class="counter-value">50k+</div>
              <div class="counter-details">felhasználó</div>
            </DCounter>
          </Column>
          <Column class="col-md-3 col-sm-6">
            <DCounter>
              <i class="decode-icon-translator"></i>
              <div class="counter-value">100+</div>
              <div class="counter-details">profi oktató</div>
            </DCounter>
          </Column>
        </Row>
      </Container>
    </DFullSection>
    <DFullSection>
      <Container class="pb-lg-5 text-justify ">
        <Row id="reszletek">
          <Column class="col-12 mb-3">
            <DHeadline class="text-left">
              <h3 class="mb-4">Mi fog történni július 2-a után?</h3>
            </DHeadline>
          </Column>
          <Column class="col-lg-6 mr-xl-auto pr-5 my-auto">
            <p><b>Röviden: Az egyszemélyes Netacademia Ultimate előfizetésünket megszüntetjük, július 2 után már nem
              lehet megvásárolni.</b></p>
            <p><b>Vállalati</b> ügyfeleink számára érhetővé válik a <b>NetAcademia Bussiness előfizetés</b>, melyet a
              legfontosabb vállalati szempontok alapján alakítottuk ki:</p>

            <ul class="check-list">
              <li>Legyen elérhető Magyarország legszélesebb oktatási palettája</li>
              <li>Ne kelljen 4-5 oktatási intézménnyel kapcsolatot tartani</li>
              <li>Pehelykönnyű adminisztráció</li>
              <li>Lekérdezhető legyen a kollégák haladása, az előfizetés kihasználtsága</li>
            </ul>

          </Column>
          <Column class="col-lg-6 mr-xl-auto pl-5">
            <ul class="check-list">
              <li>Senior kollégák számára emeltszintű Mesterkurzusok tartása</li>
              <li>Lehetőleg minden kolléga részt vehessen az oktatásokon</li>
              <li>Nyelvi képzések is legyenek a csomagban</li>
              <li>A dolgozók olyan képzésekhez is hozzájussanak, melyeket a munkahelyen kívül és hasznosítani tudnak
              </li>
            </ul>
            <p>Ezeket az igényeket (különösen az összes dolgozó hozzáférését) csoportos előfizetéseink szolgálják ki.
              Legkisebb csomagunk az <b>5 fős</b> NetAcademia Business előfizetés, mely akciósan, <b>499 000
                Ft+áfa</b> lesz.</p>
          </Column>
        </Row>
        <Row>
          <Column class="col-lg-6 mr-xl-auto pr-5 my-auto">
            <img src="~/assets/landing/index-image.svg" alt="">
          </Column>
          <Column class="col-lg-6 mr-xl-auto pl-5 my-auto">
            <DHeadline class="text-left">
              <h5 class="mb-3 font-weight-bold">Nekem jelenleg NetAcademia Ultimate előfizetésem van. Most mi lesz
                velem?</h5>
            </DHeadline>
            <p><b>Semmi. Nem változik semmi.</b> Aki jelenleg aktív NetAcademia Ultimate előfizető, annak a lejárati
              dátumig nincs változás. </p>

            <DHeadline class="text-left">
              <h5 class="mb-3 font-weight-bold">Nincs Ultimate előfizetésem, én mit tehetek?</h5>
            </DHeadline>
            <p>Mivel az egyszemélyes változat július 2-án megszűnik, <b>eddig a határidőig kell megvásárolnod az
              Ultimate előfizetésünket</b> a következő évre. Július 2 után a legkisebb csomag 5 fős lesz.</p>
            <DButton theme="default-outline" href="https://app.netacademia.hu/subscription/create">
              Megveszem <i class="decode-icon-cursor"></i>
            </DButton>
          </Column>
        </Row>
      </Container>
    </DFullSection>
    <DFullSection theme="dark" is-blending style="background: #00f0d1;">
      <Container>
        <Row>
          <div class="col-md-12">
            <h3 class="text-center"><strong>Egyéni hallgatók számára ajánljuk</strong></h3>
          </div>
        </Row>
      </Container>
    </DFullSection>
    <Container class="pt-lg-5">
      <Row class="mt-5">
        <Column class="col-lg-7">
          <p>A tanulásodat úgy tudjuk a legjobban segíteni, hogy útmutatást adunk egy-egy témakör elsajátításához. Az
            első billentyű leütésétől kezdve akár a bizonyítványod átvételéig fogjuk a kezed. Tanulási útvonalaink <b>6-8
              egymásra épülő tanfolyamot</b> tartalmaznak
            egy adott témából.</p>
          <p>Ha minden témakör iránt érdeklődsz, vagy nem tudod eldönteni, az informatika melyik ágán indulj el, a <b>július
            2-ával megszűnő Ultimate-csomagból még te is bespájzolhatsz.</b></p>
          <DButton theme="default-outline" href="https://app.netacademia.hu/subscription/create">
            Megveszem <i class="decode-icon-cursor"></i>
          </DButton>
        </Column>
        <Column class="col-lg-4 my-auto pl-5">
          <Bounce direction="right">
            <p><img src="~/assets/landing/foldal-1.svg" alt=""></p>
          </Bounce>
        </Column>
      </Row>
    </Container>
  </main>
</template>

<script>
  import {GtmPageLoad} from "~/components/mixins/GtmPageLoad";
  import DPageHeader from "../components/decode/DPageHeader";
  import DFullSection from "../components/decode/DFullSection";
  import Container from "../components/Container";
  import Row from "../components/Row";
  import Column from "../components/Column";
  import DCounter from "../components/decode/DCounter";
  import DHeadline from "../components/decode/DHeadline";
  import Bounce from "../components/Bounce";
  import DButton from "../components/decode/DButton";
  import BouncingDownArrow from "../components/BouncingDownArrow";
  import Navigation from "../components/Navigation";

  export default {
    // name: "landing",
    components: {
      Navigation,
      BouncingDownArrow,
      DButton,
      Bounce,
      DHeadline,
      DCounter,
      Column,
      Row,
      Container,
      DFullSection,
      DPageHeader
    },
    layout: "landing_decode",
    mixins: [GtmPageLoad("Főoldal")],
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "/hack/plugins/revolutionslider/css/settings.css"
        },
        {rel: "stylesheet", href: "/hack/plugins/revolutionslider/css/layers.css"},
        {rel: "stylesheet", href: "/hack/plugins/revolutionslider/css/navigation.css"}
      ],
      script: [
        {src: "/hack/plugins/revolutionslider/js/jquery.themepunch.tools.min.js"},
        {src: "/hack/plugins/revolutionslider/js/jquery.themepunch.revolution.min.js"},
        // {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.actions.min.js"},
        // {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.carousel.min.js"},
        // {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.kenburn.min.js"},
        {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.layeranimation.min.js"},
        // {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.migration.min.js"},
        {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.navigation.min.js"},
        // {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.parallax.min.js"},
        {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.slideanims.min.js"},
        // {src: "/hack/plugins/revolutionslider/js/extensions/revolution.extension.video.min.js"}
      ]
    },
    activated() {
      console.warn(this.firstShow);
      console.warn('asdfasdfsdadfsadsa');
      if (process.client) {
        window.location.reload();
      }
    },

    mounted() {
      $(".rev_slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9000,
        spinner: "none",
        navigation: {
          arrows: {
            style: "custom waves",
            enable: true,
            hide_onmobile: true,
            hide_onleave: false,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: "",
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 20,
              v_offset: 0
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 20,
              v_offset: 0
            }
          },
          bullets: {
            style: "custom",
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: "",
            direction: "horizontal",
            space: 5,
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 40
          },
          touch: {
            touchenabled: "on",
            swipe_treshold: 75,
            swipe_min_touches: 1,
            drag_block_vertical: false,
            swipe_direction: "horizontal"
          }
        },
        gridwidth: 1170,
        gridheight: 1000
      });
    },
    computed: {
      currentYear: function () {
        return new Date().getFullYear();
      },
    },
    data() {
      return {
        firstShow: true
      };
    }
  };
</script>

<style lang="scss">
  /* REVOLUTION SLIDER */
  .rev_slider_wrapper {
    margin-bottom: 0px;
    height: 100vh;
  }

  /* ARROWS */
  .tp-leftarrow.custom,
  .tp-rightarrow.custom {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #252525 no-repeat center center;
    opacity: 0.35;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .tparrows.custom:before {
    line-height: 36px;
  }

  .tp-leftarrow.custom:hover,
  .tp-rightarrow.custom:hover {
    background-color: #00f0d1;
    opacity: 1;
  }

  .tp-leftarrow.custom {
  }

  .tp-rightarrow.custom {
  }

  /* BULLETS */
  .tp-bullets.custom .tp-bullet {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 2px solid #e1e1e1;
    background-color: transparent;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .tp-bullets.custom .tp-bullet:hover,
  .tp-bullets.custom .tp-bullet.selected {
    border-color: #00f0d1;
    background-color: transparent;
  }

  /* TYPOGRAPHY */
  .tp-caption.title {
    color: #fff;
    font-size: 54px;
    line-height: 72px;
    font-weight: 300;
  }

  .tp-caption.large-title {
    color: orange;
    font-size: 50px;
    line-height: 60px;
    font-weight: 600;
  }

  .tp-caption.large-title-2 {
    color: #fff;
    font-size: 54px;
    line-height: 72px;
    font-weight: 600;
  }

  .tp-caption.title-bold {
    color: #fff;
    font-size: 80px;
    line-height: 100px;
    font-weight: 800;
  }

  .tp-caption.text {
    color: #fff;
    font-size: 18px;
  }

  .tp-caption.small-text {
    color: #fff;
    font-size: 14px;
    line-height: 18px;
  }

  .tp-caption.large-text {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
  }

  .tp-caption.text-special {
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .tp-caption .btn-white,
  .tp-caption .btn-white:focus {
    background-color: #fff;
    color: #00f0d1;
  }

  .tp-caption .btn-white.btn-outline,
  .tp-caption .btn-white.btn-outline:focus {
    background-color: transparent;
    color: #fff;
  }

  .tp-caption .btn-white.btn-outline:after {
    border-color: #fff;
  }

  .tp-caption.navigation {
    color: #838383;
    font-size: 14px;
    letter-spacing: 0.8px;
  }

  .tp-caption.navigation span {
    color: #00f0d1;
  }

  .tp-static-layer {
    overflow: visible;
    color: #838383;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    visibility: visible !important;
    opacity: 1 !important;
  }

  .tp-static-layer a {
    color: #838383;
    text-decoration: none;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .tp-static-layer a:hover {
    color: #00f0d1;
  }

  .tp-static-layer i {
    padding-left: 2px;
    width: 14px;
    height: 14px;
    border: 2px solid #838383;
    border-radius: 50%;
    margin-right: 5px;
    line-height: 10px;
    text-align: center;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .tp-static-layer a:hover i {
    border-color: #00f0d1;
  }

  @media (min-width: 1200px) {
    .tp-static-layer i {
      padding-left: 1px;
    }
  }

  @media (max-width: 991px) {
    .custom.tparrows.tp-leftarrow,
    .custom.tparrows.tp-rightarrow {
      display: none;
    }

    .tp-caption .btn {
      padding: 12px 17px;
      font-size: 9px;
    }

    .tp-static-layer i {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .tp-bullets.custom {
      top: auto !important;
      bottom: -30px !important;
    }

    .tp-caption .btn {
      padding: 6px 7px;
      font-size: 4px;
      letter-spacing: 0.3px;
    }

    .tp-static-layer {
      display: none !important;
    }
  }

  @media (min-width: 480px) and (max-width: 767px) {
    .tp-caption .btn {
      padding: 8px 10px;
      font-size: 6px;
      letter-spacing: 0.5px;
    }
  }

  /*header {*/
  /*.text-special {*/
  /*color: #ffffff;*/
  /*font-size: 0.8rem;*/
  /*letter-spacing: 1px;*/
  /*margin-top: 6rem;*/
  /*}*/

  /*.large-title {*/
  /*color: orange;*/
  /*font-size: 1.6rem;*/
  /*line-height: 35px;*/
  /*font-weight: 600;*/
  /*}*/

  /*.large-text {*/
  /*color: #fff;*/
  /*font-size: 0.9rem;*/
  /*line-height: 20px;*/
  /*font-weight: 400;*/
  /*}*/

  /*.small-text {*/
  /*color: #fff;*/
  /*font-size: 0.8rem;*/
  /*line-height: 18px;*/
  /*}*/

  /*!*&.hero-bg {*!*/
  /*!*height: 100vh;*!*/
  /*!*background-color: #fafafa;*!*/
  /*!*background-image: url("~/assets/landing/bg-2-v3.svg");*!*/
  /*!*background-size: cover;*!*/
  /*!*background-position: right;*!*/
  /*!*background-attachment: fixed;*!*/
  /*!*}*!*/

  /*@media (min-width: 400px) {*/
  /*.large-title {*/
  /*font-size: 2rem;*/
  /*line-height: 40px;*/
  /*}*/

  /*.large-text {*/
  /*font-size: 1.1rem;*/
  /*line-height: 25px;*/
  /*font-weight: 400;*/
  /*}*/

  /*.small-text {*/
  /*font-size: 0.9rem;*/
  /*line-height: 23px;*/
  /*}*/
  /*}*/

  /*@media (min-width: 765px) {*/
  /*.text-special {*/
  /*font-size: 1.2rem;*/
  /*letter-spacing: 1px;*/
  /*margin-bottom: 15px;*/
  /*margin-top: 200px;*/
  /*}*/

  /*.large-title {*/
  /*font-size: 2.5rem;*/
  /*line-height: 50px;*/
  /*}*/

  /*.large-text {*/
  /*font-size: 1.5rem;*/
  /*line-height: 25px;*/
  /*font-weight: 400;*/
  /*margin-top: 30px;*/
  /*}*/

  /*.small-text {*/
  /*font-size: 1.1rem;*/
  /*line-height: 23px;*/
  /*}*/
  /*}*/

  /*@media (min-width: 1200px) {*/
  /*.text-special {*/
  /*color: #ffffff;*/
  /*font-size: 1rem;*/
  /*letter-spacing: 1px;*/
  /*margin-top: 16rem;*/
  /*}*/

  /*.small-text {*/
  /*color: #fff;*/
  /*font-size: 0.8rem;*/
  /*line-height: 18px;*/
  /*}*/

  /*.large-text {*/
  /*color: #fff;*/
  /*line-height: 32px;*/
  /*font-size: 1.5rem;*/
  /*font-weight: 400;*/
  /*}*/

  /*.large-title {*/
  /*color: orange;*/
  /*font-size: 3rem;*/
  /*line-height: 60px;*/
  /*font-weight: 600;*/
  /*}*/
  /*}*/
  /*}*/

  /* CHECK LIST */
  .check-list {
    list-style: none;
    margin-bottom: 20px;
    padding-left: 0;
  }

  .check-list li {
    margin-bottom: 5px;
    color: grey;
  }

  .check-list li:last-child {
    margin-bottom: 0;
  }

  .check-list li:before {
    display: inline-block;
    width: 8px;
    height: 14px;
    border: solid #00f0d1;
    border-width: 0 2px 2px 0;
    margin-right: 15px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    content: "";
  }
</style>
