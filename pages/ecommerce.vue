<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Certified E-commerce Specialist"
                  lead-text="Marketing"
                  sales-pitch-text="Bele akarsz vágni az online kereskedésbe? Tanuld meg, hogyan készítheted el pár óra
                  alatt saját webshopodat Shopify segítségével, végezz piackutatást, hogy maximalizálhasd a profitodat!
                  Elkalauzolunk a marketing világába is, hogy képes legyél saját hirdetéseket létrehozni Facebookon és
                  Google AdWordsben, és ki tudd aknázni a Facebook Marketplace adta megannyi lehetőséget!"
    >
      <img slot="lead-icon" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon" class="img-fluid"
           width="60">
      <nuxt-link slot="call-to-action" to="#reszletek" class="btn-cus btn-cus-darkred btn-lg ml-3 px-5">Részletek
      </nuxt-link>
    </CertiTopHero>

    <CertiFeatures price="Most csak 39.900 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Validáljuk ötletünket!"
                    length="6 óra"
                    price="19.000 Ft + áfa"
                    description="Dzsungel papucsokat árulnánk? Kutassuk fel a piacot! Validáljuk ötletünket, végezzünk
                    piackutatást! Ezen a tanfolyamon megtanuljuk, hogyan határozhatjuk meg a célcsoportunkhat, hozhatunk
                    létre egy mini Facebook kampányt, illetve hogyan tervezhetünk hatékonyan."
                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="bounceInLeft"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.design"
                  href="https://app.netacademia.hu/Tanfolyam/2018EcomPlan"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Webshopunk létrehozása"
                    length="12 óra"
                    price="29.900 Ft+áfa"
                    description="Készítsünk ütős weboldalt, és ökoszisztémát webshopunknak, a népszerű, Shopfiy
                    platform, vagy Wordpress segítségével! Elhelyezzük majd első termékeinket is, illetve megnézzük,
                    hogyan állíthatunk be úgynevezett dropshippinget, melynek lényege, hogy olyat árulunk, amivel
                    tulajdonképpen nem is rendelkezünk, így pedig nem kell hatalmas raktárkészletet felhalmoznunk!"
                    logo-bg="#284d5d"
                    card-header-bg="#284d5d"
                    direction="bounceInRight"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.create"
                  href="https://app.netacademia.hu/Tanfolyam/2018Ecomshop"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="A Facebook bolti területe (Marketplace)"
                    length="4 óra"
                    price="19.900 Ft+áfa"
                    description="A bolti terület a vállalkozásunk oldalához hozzáadható lapfül, amely az általunk árult
                    termékek megjelenítését teszi lehetővé. Megtanuljuk, hogyan aknázhatjuk ki ezt az új lehetőséget,
                    ami után semmiféle jutalékot nem kell fizetnünk, így kitűnő, mondhatni kötelező eleme egy induló
                    vállalkozás kereskedési rendszerének."
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="bounceInLeft"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.facebook"
                  href="https://app.netacademia.hu/Tanfolyam/2018Ecomfaceshop"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Hirdessük a termékeinket a Facebookon is!"
                    length="8 óra"
                    price="29.900 Ft+áfa"
                    description="Ezen a kurzuson megtanuljuk, mi a különbség egy egyszerű kiemelés, illetve egy jól
                    megkomponált Facebook hirdetésben, illetve, hogy melyek a legalkalmasabb hirdetési formák és
                    beállítások a termékünk minél magassabb számban történő értékesítéséhez."
                    description2="Beállítunk majd úgynevezett Facebook pixelt, hogy hirdetéseinket nyomon is tudjuk
                    követni, így mérve az eredményességüket."
                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="bounceInRight"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.cone"
                  href="https://app.netacademia.hu/Tanfolyam/2018Ecomfun"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="A Google és Adwords hirdetések elindítása"
                    length="8 óra"
                    price="29.900 Ft+áfa"
                    description="Termékeinket nem csak a népszerű közösségi oldalon, de a Google rendszerében is
                    hirdetni szeretnénk, hiszen így nem csak a Facebookon, de az világháló összes területén felbukkanhat
                    vállalkozásunk. Ráadaásul csak a tényleges látogatók után kell fizetünk"
                    description2="A kurzuson megismerkedünk az alapokkal, de az igazán profi technikákat is
                    elsajátíthatjuk."
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="bounceInLeft"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.adwords"
                  href="https://app.netacademia.hu/Tanfolyam/2018EcomGoog"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="E-mail marketing!"
                    length="4 óra"
                    price="19.900 Ft+áfa"
                    description="Nincs modern vállalkozás eDM (elektronikus direkt marketing) nélkül. De mit is jelent
                    ez a gyakorlatban?"
                    description2="A kurzus során megismerjük a Mailchimp nevű hírlevélkküldő, levelezőlista kezelő
                    platformot, továbbá megtanuljuk összekötni a Shopfify és Wordpress alapú webshopunkkal."
                    logo-bg="#284d5d"
                    card-header-bg="#284d5d"
                    direction="bounceInRight"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.email"
                  href="https://app.netacademia.hu/Tanfolyam/2018EcomEmail"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="CRM - Ügyfélkapcsolat kezelés"
                    length="6 óra"
                    price="29.900 Ft+áfa"
                    description="Ahogy hirdetéseink egyre több vásárlót vonzanak be vállalkozásunk számára,
                    elkerülhetetlen, hogy manageljük őket. Elképzelhető, hogy a későbbiekben is szeretnénk értesíteni
                    őket az akciókról, esetleg személyre szabott kedvezményekről."
                    description2="Megtanuljuk Mailchimp nevű, méltán népszerű hírlevélküldő rendszer használatát, a
                    hatékony számlázás folyamatát, illetve a panaszok kezelését, a Trello nevű platformmal."
                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="bounceInLeft"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.crm"
                  href="https://app.netacademia.hu/Tanfolyam/2018EcomCus"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Google Analytics - értékeljük az eredményeket!"
                    length="4 óra"
                    price="19.900 Ft+áfa"
                    description="Jól megy a webáruházunk? Itt az ideje értékelni a megtérülés mértékét (ROI), ennek
                    fényében pedig döntéseket hozhatunk, hogy érdemes-e tovább foglalkoznunk vállalkozásunkkal, esetleg
                    további tőkét is célszerű befektetnünk."
                    description2="A kurzus során megtanuljuk a Google Analytics, a Facebook, a Shopify és a Wordpress értékelő eszközeinek használatát."
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="bounceInRight"
      >
        <img slot="picture" src="~/assets/ecommerce/ecommerce-icon.png" alt="ecommerce-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.analytics"
                  href="https://app.netacademia.hu/Tanfolyam/2018EcomMes"
        >Részletek...
        </gtm-link>
      </TimelineCard>

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center">

      <div class="col-12 col-lg-4 p-4 bg-card m-2 align-self-center py-5 px-3 single-special">
        <p class="mb-4">A Certfied E-commerce Specialist tanfolyamcsomag ára
          <del>49.900 Ft</del>
          helyett, most <br>csak <span class="ar">39.900 Ft</span>
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCarteCommerce"
                  href="https://app.netacademia.hu/Subscription/Create/certified-e-commerce-specialist"
                  class="btn-cus btn-cus-darkred btn-lg ml-3 px-5"
        >Megveszem!
        </gtm-link>
      </div>
      <div class="col-12 col-lg-4 p-4 bg-card m-2 align-self-center py-5 px-3 single-special">
        <p class="mb-4">E-commerce útvonalunk az Office előfizetésünk részét képezi, mely sok ehhez hasonló képzést
          foglal magában. Nézz körbe, további tanfolyamainkért!</p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCartOffice"
                  href="https://app.netacademia.hu/officecsomag"
                  class="btn-cus btn-cus-darkred btn-lg ml-3 px-5"
        >Érdekel!
        </gtm-link>
      </div>
    </div>

    <!-- certificate, mas kurzusok -->
    <section class="bg-light">
      <div class="container">

        <div class="row py-5">
          <div class="col-12 col-lg-7 mx-auto">
            <div class="row">
              <div class="col-11 mx-auto col-lg-11 my-4">
                <h4 class="pb-3">Ajánlott tanfolyamok</h4>
                <p class="mb-3"><strong>Az adatvezérelt marketing alapjai</strong></p>
                <p>A tanfolyam abban segít, hogy az adatvezérelt marketing által a webáruház (vagy vállalat) marketingje
                  eredményesebb legyen, az arra szánt pénzt úgy és arra
                  költsük el, hogy az számunkra a legnagyobb hasznot hozza.</p>
                <a href="https://app.netacademia.hu/Tanfolyam/2017adatmarketing-az-adatvezerelt-marketing-alapjai"
                   class="">Bővebben a tanfolyamról...</a>
              </div>
              <div class="col-11 mx-auto my-4">
                <h4 class="pb-3">Szerezz NetAcademia Certificate-et!</h4>
                <p class="mb-3">A NetAcademia Certificate-tel egy olyan tanúsítványt hoztunk létre, mely egyaránt
                  leképezi oktatási hozzáállásunkat és módszertanunkat: gyakorlatias és projekt-alapú. A sikeres vizsga
                  bizonyíték arra, hogy képes vagy egy modern, sikeres webáruházat felépíteni Shopify vagy Wordpress
                  alapokon, ráadádasul hirdetési tudásodat kamatoztatva értékes vásárlóerőt szólíthatsz meg.</p>
                <nuxt-link to="/certificate/">Bővebben a certificate-ről...</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto col-lg-5 border p-5 ulticol text-center my-auto">
            <h2>Business kedvezmény</h2>
            <p class="mt-4">Tudtad, hogy ha Business-előfizetést veszel, ennek a tanfolyamcsomagnak az ára két hónapig beszámít az előfizetés árába?</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TimelineCard from "@/components/TimelineCard";
import GtmLink from "@/components/base/GtmLink";
import TimelineContainer from "@/components/TimelineContainer";
import CertiFeatures from "@/components/CertiFeatures";
import CertiTopHero from "@/components/CertiTopHero";
import { GtmPageLoad } from "@/components/mixins/GtmPageLoad";

export default {
  name: "ecoomerce-path",
  mixins: [GtmPageLoad("Listaoldal")],
  layout: "logo-footer",
  components: {
    CertiTopHero,
    CertiFeatures,
    TimelineContainer,
    TimelineCard,
    GtmLink
  },
  data: function() {
    return {
      GTMProductCollection: {
        design: {
          name: "Pénztermelő webáruház megtervezése",
          id: "2018EcomPlan-tervezzuk-meg-penztermelo-webaruhazunk-elinditasat",
          price: "18999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 1,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        create: {
          name: "Webshop létrehozása",
          id: "2018EcomShop-webshop-letrehozasa",
          price: "28999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 2,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        facebook: {
          name: "Facebook bolti terület használata",
          id: "2018EcomFaceShop-facebook-bolti-terulet-hasznalata",
          price: "18999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 3,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        cone: {
          name: "Értékesítési tölcsér készítése",
          id: "2018EcomFun-ertekesitesi-tolcser-keszitese",
          price: "28999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 4,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        adwords: {
          name: "Google Adwords-hirdetések",
          id: "2018EcomGoog-google-adwords-alapok",
          price: "28999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 5,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        email: {
          name: "Email marketing",
          id: "2018EcomGAd-halado-google-adwords",
          price: "18999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 6,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        crm: {
          name: "Webáruház-ügyfélkezelés, CRM",
          id: "2018EcomCus-webaruhaz-ugyfelkezeles",
          price: "28999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 7,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        analytics: {
          name: "Webáruház telejsítményének mérése, értékelése",
          id: "2018EcomMes-webaruhaz-merese-ertekelese",
          price: "18999",
          brand: "NetAcademia",
          category: "Tanfolyam",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 8,
          PCategories: ["certified-e-commerce-specialist", "office"]
        },
        addToCarteCommerce: {
          name: "Certified E-commerce Specialist oktatási csomag",
          id: "certified-e-commerce-specialist",
          price: "39900",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 9
        },
        addToCartOffice: {
          name: "Office és irodai alkalmazások 12 hónapos tanfolyamcsomag",
          id: "office",
          price: "62230",
          brand: "NetAcademia",
          category: "Elofizetes",
          variant: "",
          list: "Certified E-commerce Specialist",
          position: 10
        }
      }
    };
  }
};
</script>

<style>
main {
  font-size: 100%;
  background-color: #e9f0f5;
}

.hero-bg {
  background-color: #fafafa;
  background-image: linear-gradient(
      rgba(43, 45, 66, 0.65),
      rgba(43, 45, 66, 0.65)
    ),
    url("~/assets/ecommerce/background.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
}

.bg-card {
  background-color: #35495e;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 2px;
}

.ulticol {
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

h1,
h2 {
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 0.9;
}

h3 {
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

p {
  line-height: 1.6;
  letter-spacing: 1px;
}
</style>
