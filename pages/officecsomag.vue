<template>
  <div>
    <DPageHeader
      asset-image="~/assets/officecsomag/office-bg.svg"
      icon="decode-icon-briefcase"
    >
      <h1>Irodai hatékonyságnövelés az egész csapatnak!</h1>
    </DPageHeader>
    <DFullSection theme="light">
      <Container class="mb-3">
        <Row class="pb-4">
          <Column class="col-lg-8 col-md-10 ml-auto mr-auto">
            <p class="text-center">
              Ma már mindenki informatikus, de ha mégsem az, akkor is az lesz. Az irodai feladatok nagy része
              informatikai tudást igényel, így nagyon lelassulhat a munkavégzés, ha ez a tudás hiányzik. Az irodai hatékonyságnövelő csomag
              elsődleges feladata az irodai dolgozók informatika
              és más területre is kiterjedő hatékonyságnövelése.
            </p>
          </Column>
        </Row>
      </Container>
      <Container>
        <Row class="mb-5">
          <no-ssr>
            <div class="d-none d-lg-block">
              <DFullSectionMultilayer x-percent="0%" y-percent="20%">
                <Parallax :speed-factor="0.15" direction="up">
                  <div class="flex-center pt-5">
                    <img src="~/assets/officecsomag/phone.svg" alt="" style="width: 300px;">
                  </div>
                </Parallax>
              </DFullSectionMultilayer>
              <DFullSectionMultilayer x-percent="0%" y-percent="85%">
                <parallax :speed-factor="0.1" direction="down">
                  <div class="flex-center">
                    <img src="~/assets/officecsomag/glass.svg" alt="" style="width: 700px;">
                  </div>
                </parallax>
              </DFullSectionMultilayer>
            </div>
          </no-ssr>

          <Column class="col-lg-4 col-md-5">
            <Bounce direction="bounceInLeft">
              <DServiceBox icon="decode-icon-padlock" icon-position="right">
                <h6>Biztonság</h6>
                <p>Tudd magad biztonságban, ismerd a jogaidat: munka- és tűzvédelem!</p>
              </DServiceBox>
            </Bounce>
            <Bounce direction="bounceInLeft">
              <DServiceBox icon="decode-icon-typewriter" icon-position="right">
                <h6>Microsoft Office</h6>
                <p>Légy irodai ninja: profi dokumentumkezelés, Excel és OneNote használat hatékonyan!</p>
              </DServiceBox>
            </Bounce>
            <Bounce direction="bounceInLeft">
              <DServiceBox icon="decode-icon-customer" icon-position="right">
                <h6>Soft Skill</h6>
                <p>Prezentálj asszertívan, gazdálkodj az időddel, fejleszd érzelmi intelligenciádat!</p>
              </DServiceBox>
            </Bounce>
          </Column>

          <Column class="col-lg-4 col-md-5 ml-md-auto">
            <Bounce direction="bounceInRight">
              <DServiceBox icon="decode-icon-video" icon-position="left">
                <h6>Kép- és videószerkesztés</h6>
                <p>Éld ki a kreativitásodat: fotózás, grafika és videóvágás!</p>
              </DServiceBox>
            </Bounce>
            <Bounce direction="bounceInRight">
              <DServiceBox icon="decode-icon-viral-marketing" icon-position="left">
                <h6>Online Marketing</h6>
                <p>Hirdess profin: Facebook bolt terület, Google Analytics elemzés és Email marketing!</p>
              </DServiceBox>
            </Bounce>
            <Bounce direction="bounceInRight">
              <DServiceBox icon="decode-icon-coins" icon-position="left">
                <h6>E-kereskedelem</h6>
                <p>Hozd létre, és nyisd meg saját webshopod: Wordpress, Shopify és Drop shipping!</p>
              </DServiceBox>
            </Bounce>
          </Column>
        </Row>
      </Container>
    </DFullSection>
    <DFullSection theme="dark">
      <Container>
        <Row>
          <Column class="col-md-12">
            <DHeadline class="text-center">
              <h6>Irodai hatékonyságnövelő csomag</h6>
              <h3>5 főre szóló előfizetésünk július 31-ig bevezető áron! <br> Rendeld meg még ma 249.900 Ft-ért!</h3>
            </DHeadline>
          </Column>
        </Row>
      </Container>
      <Container class="mt-4">
        <Row>
          <Column class="col-md-12 text-center">
            <p>
              <DButton theme="default-outline" class="text-light"
                       href="https://app.netacademia.hu/subscription/business/office">
                Megveszem<i class="decode-icon-cursor ml-2"></i>
              </DButton>
            </p>
          </Column>
        </Row>
      </Container>
    </DFullSection>
    <DFullSection>
      <Container>
        <Row>
          <Column class="col-sm-12">
            <!--TODO: reafktorolni es kiszervezni ezt tabs komponensbe. _tabs.scss tartozik hozza-->
            <div class="tabs vertical-tabs">

              <ul class="nav nav-tabs">
                <li>
                  <a class="waves active" href="#tab-1" data-toggle="tab">
                    <h6>MS Office</h6>
                    <span><small>Excel, Acces, Word, VBA, Outlook..</small></span>
                  </a>
                </li>
                <li>
                  <a class="waves" href="#tab-3-2" data-toggle="tab">
                    <h6>Soft Skill</h6>
                    <span><small>Kommunikáció, Asszertivitás, Prezentáció, Időgazdálkodás..</small></span>
                  </a>
                </li>
                <li>
                  <a class="waves" href="#tab-3-3" data-toggle="tab">
                    <h6>Biztonságtechnika</h6>
                    <span><small>Tűz- és munkavédelem..</small></span>
                  </a>
                </li>
                <li>
                  <a class="waves" href="#tab-3-4" data-toggle="tab">
                    <h6>Online Marketing</h6>
                    <span><small>Email marketing, Facebook marketing, Adwords Hirdetések..</small></span>
                  </a>
                </li>
                <li>
                  <a class="waves" href="#tab-4-5" data-toggle="tab">
                    <h6>Kép- és videoszerkesztés</h6>
                    <span><small>Corel Draw, DSLR fotózás, Final Cut Pro X..</small></span>
                  </a>
                </li>
                <li>
                  <a class="waves" href="#tab-5-6" data-toggle="tab">
                    <h6>E-kereskedelem</h6>
                    <span><small>Piackutatás, Wordpress, Ügyfélkezelés, Hirdetéskezelés..</small></span>
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab-1">

                  <div class="headline no-margin-bottom">

                    <h6>NetAcademia</h6>
                    <h3>MS Office</h3>

                  </div>
                  <!-- headline -->

                  <br>
                  <p>Manapság már minden iroda elvárja alkalmazottaitól az Office programok ismeretét!</p>
                  <p>Legyen akár Word, Excel, PowerPoint, Access vagy Outlook, MS Office tanfolyamaink gyakorlati tudást
                    adnak az irodai szoftverek hatékony használataihoz.</p>
                  <p>Sajátítsd el azokat a trükköket, melyeket csak nagyon kevesen használnak és kamatoztasd tudásod a
                    mindennapi életben!</p>

                </div>
                <!-- tab-pane -->
                <div class="tab-pane fade" id="tab-3-2">

                  <div class="headline no-margin-bottom">
                    <h6>NetAcademia</h6>
                    <h3>Soft Skill</h3>
                  </div>
                  <!-- headline -->
                  <br>
                  <p>Kommunikáció, asszertivitás, időgazdálkodás, prezentációs képességek…</p>
                  <p>Az ún. soft skillek elsajátítására manapság egyre nagyobb szükség van, hiszen fontosságuk egyre
                    inkább növekszik a nagyobb vállalatoknál is.</p>
                  <p>Kínálatunkban megtalálhatók olyan képzések is, melyek nagyban megkönnyíthetik mindennapjaid mind a
                    munka, mind pedig a magánélet területén.</p>

                </div>
                <!-- tab-pane -->
                <div class="tab-pane fade" id="tab-3-3">
                  <div class="headline no-margin-bottom">
                    <h6>NetAcademia</h6>
                    <h3>Biztonságtudatosság</h3>
                  </div>
                  <!-- headline -->
                  <br>
                  <p>Léteznek biztonsági előírások, melyek betartását minden munkahelyen megkövetelnek. Vajon mindenki
                    tisztában van ezekkel?</p>
                  <p>Oktatásaink során felhívjuk figyelmed a biztonságtudatosság minden fontos elemére, miközben sok
                    érdekességeket is megtudhatsz az irodai munka- és tűzvédelemmel kapcsolatban.</p>
                </div>
                <!-- tab-pane -->

                <div class="tab-pane fade" id="tab-3-4">
                  <div class="headline no-margin-bottom">
                    <h6>NetAcademia</h6>
                    <h3>Online Marketing</h3>
                  </div>
                  <!-- headline -->
                  <br>
                  <p>Az Amazonon értékesítenél vagy a Facebook boltot használnád?</p>
                  <p>Marketing tanfolyamainkon gyakorlatban alkalmazható, nemzetközi tudás birtokába juthatsz!</p>
                  <p>Legyen szó email marketingről, Facebook vagy Adwords hirdetésről, nálunk mind megtanulhatod!</p>
                </div>
                <!-- tab-pane -->

                <div class="tab-pane fade" id="tab-4-5">
                  <div class="headline no-margin-bottom">
                    <h6>NetAcademia</h6>
                    <h3>Kép- és videószerkesztés</h3>
                  </div>
                  <!-- headline -->
                  <br>
                  <p>Mindig is érdekelt a képszerkesztés, fotózás? Vagy inkább a videovágásban mélyülnél el?</p>
                  <p>Final Cut Pro X kurzusunk segítségével elkészítheted első saját reklám videódat, DSLR óráinkon
                    pedig megismerheted a tükörreflexes fényképezőgépek használatának alapjait.</p>
                  <p>Corel Draw tanfolyamunkon egyszerűbb feliratok készítésétől kezdve, a színes design elemek
                    megvalósításán keresztül juthatsz el a logó-, névjegy-, szórólap tervezésig és egyszerűbb kiadványok
                    létrehozásáig!</p>
                </div>
                <!-- tab-pane -->

                <div class="tab-pane fade" id="tab-5-6">
                  <div class="headline no-margin-bottom">
                    <h6>NetAcademia</h6>
                    <h3>E-kereskedelem</h3>
                  </div>
                  <!-- headline -->
                  <br>
                  <p>Késztísd el, és nyisd meg saját webshopod!</p>
                  <p>8 részes tanfolyamsorozatunkban nem csak a webshop „fizikai” megalkotásával foglalkozunk, hanem
                    minden ehhez kapcsolódó fontos témakört is boncolgatunk!</p>
                  <p>Tudd meg, hogy érdemes-e termékeddel online piacra lépni, alkosd meg webshopod a Wordpress, Shopify
                    és a Drop Shipping segítségével és ismerkedj meg az ügyfélkezelés, crm, hirdetések fortélyaival!</p>
                </div>
                <!-- tab-pane -->
              </div>
              <!-- tab-content -->


            </div>

          </Column>
        </Row>
      </Container>
    </DFullSection>
  </div>
</template>

<script>
import DPageHeader from "@/components/decode/DPageHeader";
import { GtmPageLoad } from "@/components/mixins/GtmPageLoad";
import DFullSection from "@/components/decode/DFullSection";
import DHeadline from "@/components/decode/DHeadline";
import Container from "@/components/base/Container";
import Row from "@/components/base/Row";
import Bounce from "@/components/base/Bounce";
import DServiceBox from "@/components/decode/DServiceBox";
import Column from "@/components/base/Column";
import DButton from "@/components/decode/DButton";
import Parallax from "vue-parallaxy";
import DFullSectionMultilayer from "@/components/decode/DFullSectionMultilayer";

export default {
  name: "officecsomag",
  mixins: [GtmPageLoad("Termékoldal")],
  // layout: "decode",
  components: {
    DFullSectionMultilayer,
    Parallax,
    DButton,
    Column,
    DServiceBox,
    Bounce,
    Row,
    Container,
    DHeadline,
    DFullSection,
    DPageHeader
  }
};
</script>

<style scoped>
</style>
