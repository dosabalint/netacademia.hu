<template>
  <main>
    <header class="hero-bg">
      <Container is-fluid>
        <Row class="justify-content-end text-left">
          <Column class="col-11 col-md-10 col-lg-6">
            <div class="text-special pt-5">
              NetAcademia - online oktatás bárhol, bármikor
            </div>
            <div class="large-title mb-3">
              Megszűnik a NetAcademia <br> Ultimate előfizetés!
            </div>
            <div class="large-text mb-3">
              Már csak július 2-ig vásárolható korlátlan,<br> egy éves előfizetésünk, a NetAcademia Ultimate! <br>
            </div>
            <div class="small-text mb-4">
              Jelen hirdetmény nem vonatkozik a külön megállapodásban elérhető <br> előfizetésekre, pl.
              informatikatanárok vagy Telekom
            </div>
            <div>
              <DButton theme="white-outline" :href="`${$store.state.url.base}/#reszletek`" class="text-light">
                Részletek<i class="ml-2 decode-icon-cursor"></i>
              </DButton>
            </div>
          </Column>
        </Row>
      </Container>
      <BouncingDownArrow href="#reszletek"></BouncingDownArrow>
    </header>
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
          <Bounce direction="bounceInRight">
            <p><img src="~/assets/landing/foldal-1.svg" alt=""></p>
          </Bounce>
        </Column>
      </Row>
    </Container>
  </main>
</template>

<script>
import { GtmPageLoad } from "@/components/mixins/GtmPageLoad";
import DPageHeader from "@/components/decode/DPageHeader";
import DFullSection from "@/components/decode/DFullSection";
import Container from "@/components/base/Container";
import Row from "@/components/base/Row";
import Column from "@/components/base/Column";
import DCounter from "@/components/decode/DCounter";
import DHeadline from "@/components/decode/DHeadline";
import Bounce from "@/components/base/Bounce";
import DButton from "@/components/decode/DButton";
import BouncingDownArrow from "@/components/BouncingDownArrow";
import Navigation from "@/components/Navigation";

export default {
  name: "landing",
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
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
header {
  .text-special {
    color: #ffffff;
    font-size: 0.8rem;
    letter-spacing: 1px;
    margin-top: 6rem;
  }

  .large-title {
    color: orange;
    font-size: 1.6rem;
    line-height: 35px;
    font-weight: 600;
  }

  .large-text {
    color: #fff;
    font-size: 0.9rem;
    line-height: 20px;
    font-weight: 400;
  }

  .small-text {
    color: #fff;
    font-size: 0.8rem;
    line-height: 18px;
  }

  &.hero-bg {
    height: 100vh;
    background-color: #fafafa;
    background-image: url("~/assets/landing/bg-2-v3.svg");
    background-size: cover;
    background-position: right;
    background-attachment: fixed;
  }

  @media (min-width: 400px) {
    .large-title {
      font-size: 2rem;
      line-height: 40px;
    }

    .large-text {
      font-size: 1.1rem;
      line-height: 25px;
      font-weight: 400;
    }

    .small-text {
      font-size: 0.9rem;
      line-height: 23px;
    }
  }

  @media (min-width: 765px) {
    .text-special {
      font-size: 1.2rem;
      letter-spacing: 1px;
      margin-bottom: 15px;
      margin-top: 200px;
    }

    .large-title {
      font-size: 2.5rem;
      line-height: 50px;
    }

    .large-text {
      font-size: 1.5rem;
      line-height: 25px;
      font-weight: 400;
      margin-top: 30px;
    }

    .small-text {
      font-size: 1.1rem;
      line-height: 23px;
    }
  }

  @media (min-width: 1200px) {
    .text-special {
      color: #ffffff;
      font-size: 1rem;
      letter-spacing: 1px;
      margin-top: 16rem;
    }

    .small-text {
      color: #fff;
      font-size: 0.8rem;
      line-height: 18px;
    }

    .large-text {
      color: #fff;
      line-height: 32px;
      font-size: 1.5rem;
      font-weight: 400;
    }

    .large-title {
      color: orange;
      font-size: 3rem;
      line-height: 60px;
      font-weight: 600;
    }
  }
}

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
