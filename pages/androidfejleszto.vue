<template>
  <main>
    <CertiTopHero class="hero-bg"
                  page-title="Modern Android Fejlesztés"
                  lead-text="MobilApp fejlesztés"
                  sales-pitch-text="Már régóta motoszkál benned valami, hogy te is képes lennél rá? 
                  Vannak jó ötleteid, de eddig nem tudtad hogyan kezdj hozzá? Android képzéssorozatunkkal
                   most te is elkészítheted álmaid APP-ját. Nem kell, hogy Java fejlesztő vagy designer legyél,
                    csak az ötlet kell és a többit itt megtanulod!">

      <img slot="lead-icon" src="~/assets/android/android-icon.png" alt="android-icon.png" class="img-fluid"
           width="60">
      <nuxt-link slot="call-to-action" to="#reszletek" class="btn-cus btn-cus-darkred btn-lg ml-3 px-5">Részletek
      </nuxt-link>
    </CertiTopHero>

    <CertiFeatures price="Most csak 59.000 Ft"></CertiFeatures>

    <TimelineContainer id="reszletek">
      <TimelineCard title="Android bevezetés"
                    length="24 óra"
                    price="69.900 Ft + áfa"
                    description="Bevezetés, mely során bemutatjuk az Android alkalmazás fejlesztés fő lépéseit az alapoktól kezdve
                     egészen a komplex alkalmazások fejlesztéséig. 
                     A tanfolyam során kiemelt figyelmet fordítunk a platform és alkalmazás struktúra bemutatására,
                      mely elengedhetetlen tudás stabil alkalmazások fejlesztéséhez."
                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="left"
      >
        <img slot="picture" src="~/assets/android/android-icon.png" alt="android-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.design"
                  href="https://app.netacademia.hu/Tanfolyam/androidintro"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Bevezetés a Kotlin fejlesztésbe"
                    length="3 óra"
                    price="Ingyenes!"
                    description="A Kotlin egy új generációs, managelt nyelv,
                     mely célja hogy a modern programozási nyelvekben megszokott 
                     eszközöket és paradigmákat elérhető tegye a JVM platformon. 
                     A nyelv teljesen interoperábilis a Java-val, a Kotlin fájlok szabadon keverhetőek a
                      Java osztályokkal, így a fejlesztők továbbra is használhatják jól megszokott eszköztárukat."
                    logo-bg="#284d5d"
                    card-header-bg="#284d5d"
                    direction="right"
      >
        <img slot="picture" src="~/assets/android/android-icon.png" alt="android-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.create"
                  href="https://app.netacademia.hu/Tanfolyam/kotlinbevezeto"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Android alapok: API-val töltött lista!"
                    length="2 óra"
                    price="Ingyenes!"
                    description="Nap mint nap használunk olyan Android-alkalmazásokat, 
                    ahol listákat görgetünk, és ezek internetes adatokkal vannak feltöltve. 
                    Elgondolkoztál már rajta, hogy mi van mögötte? Hogy kerül oda az adat? 
                    Hogyan épül fel a nézet? Esetleg betekintenél a színfalak mögé? 
                    Ha a válaszod igen, csatlakozz hozzánk, és építsük fel közösen!"
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="left"
      >
        <img slot="picture" src="~/assets/android/android-icon.png" alt="android-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.facebook"
                  href="https://app.netacademia.hu/Tanfolyam/andlist"
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Haladó Android Kotlin nyelven"
                    length="10 óra"
                    price="69.900 Ft+áfa"
                    description="Ha már ismered az Android-fejlesztés alapjait, 
                      és szeretnéd a tudásodat a következő szintre emelni, akkor ezt a
                      képzést semmiképp se hagyd ki. Az előadások során az alkalmazásfejlesztésnek 
                       olyan területeit fogjuk bejárni, mint a háttérfolyamatok, kommunikáció vagy a 
                       különböző multimédiák kezelése."
                    description2="A képzés sikeres elvégzése után szinte mindent meg fogsz
                      tudni valósítani Androidon, ami szükséges ahhoz, hogy ötleteidet formába öntsd."

                    logo-bg="#6B273C"
                    card-header-bg="#6B273C"
                    direction="right"
      >
        <img slot="picture" src="~/assets/android/android-icon.png" alt="android-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.cone"
                  href="https://app.netacademia.hu/Tanfolyam/kotlin "
        >Részletek...
        </gtm-link>
      </TimelineCard>

      <TimelineCard title="Android fejlesztés Kotlin nyelven"
                    length="10 óra"
                    price="69.900 Ft+áfa"
                    description="A Kotlin nyelv részletes bemutatása egy modern Android alkalmazás fejlesztésén keresztül."
                    description2="Android Jetpack bemutatása: 
                                  Nincs is szebb, mint amikor egy általános funkcionalitást 
                                  nem kell negyvenkétszer leprogramoznunk minden projektben,
                                   mert konyhakészen megkapjuk azt egyenesen az Android operációsrendszer fejlesztőitől."
                    logo-bg="#222c37"
                    card-header-bg="#222c37"
                    direction="left"
      >
        <img slot="picture" src="~/assets/android/android-icon.png" alt="android-icon">
        <gtm-link slot="link" :gtm-data="GTMProductCollection.adwords"
                  href="https://app.netacademia.hu/Tanfolyam/modernkotlin"
        >Részletek...
        </gtm-link>
      </TimelineCard>

     

      

      

    </TimelineContainer>
    <div class="row justify-content-center text-center py-5 mx-0 align-self-center">

      <div class="col-12 col-lg-4 p-4 bg-card m-2 align-self-center py-5 px-3 single-special">
        <p class="mb-4">A Modern Android Fejlesztés tanfolyamcsomag ára
          <del>89.900 Ft</del>
          helyett, most <br>csak <span class="ar">59.000 Ft</span>
        </p>
        <gtm-link isAddToCart :gtm-data="GTMProductCollection.addToCarteCommerce"
                  href="https://app.netacademia.hu/Subscription/Create/Android"
                  class="btn-cus btn-cus-darkred btn-lg ml-3 px-5"
        >Megveszem!
        </gtm-link>
      </div>
      
    </div>

    <!-- certificate, mas kurzusok -->
    <section class="bg-light">
      <div class="container">

        <div class="row py-5">
          <div class="col-12 col-lg-7 mx-auto">
            <div class="row">
            
            </div>
          </div>
          <div align="center">
            <h2>Ultimate kedvezmény</h2>
            <p class="mt-4">Van már Modern Android Fejlesztés előfizetésed? Tanulj tovább, mélyítsd el velünk Androidos
              ismereteidet! Írj nekünk az <span class="text-success">iroda@netacademia.net</span> e-mail címre, és
             előfizetésed árát most beszámítjuk Ultimate előfizetésünkbe!</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TimelineCard from "~/components/TimelineCard";
import GtmLink from "~/components/GtmLink";
import TimelineContainer from "~/components/TimelineContainer";
import CertiFeatures from "~/components/CertiFeatures";
import CertiTopHero from "~/components/CertiTopHero";
import { GtmPageLoad } from "~/components/mixins/GtmPageLoad";

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
    url("~/assets/android/background.jpg");
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
