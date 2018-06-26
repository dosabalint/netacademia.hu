<template>
  <div id="page-content">
    <DPageHeader asset-image="~/assets/default-header-bg.svg"
                 layout="free"
                 class="mb-5 pb-5"
    >
      <div class="col-md-6 text-left my-auto">
        <h1>{{course.title}}</h1>
        <h5 v-if="course.subtitle">{{ course.subtitle }}</h5>
        <DButton :href="`https://app.netacademia.hu/Registration/Create/${course.code}?HR=True`"
                 theme="primary"
                 class="text-dark mt-5"
        >
          Jelentkezem
          <i class="decode-icon-cursor"></i>
        </DButton>
      </div>
      <div class="col ml-5">
        <div class="service-box style-8 bg-light medium" style="width: 350px">
          <div class="pt-5 mb-3 mr-2"
               :style="{ 'background-image': `url(${require('~/assets/tanfolyam/android.png')})`}">

            <div class="service-box-content">
              <a :href="`${$store.state.url.backend}/Videok/${course.code}`" target="_blank">
                <fa :icon="['far', 'play-circle']" class="text-light" size="4x"/>
                <h5 class="text-light pt-2 pb-4">Videók</h5>
              </a>
            </div>
          </div>
          <a href="" class="font-weight-bold">Csatlakozz az élő adáshoz!</a>
        </div>
      </div>
    </DPageHeader>

    <div class="container">
      <div class="row">
        <div class="col-md-4">

          <div class="service-box style-8 large">
            <h5><b>Tanfolyami adatok</b></h5>
            <div class="service-box-content text-left mt-4">

              <p>
                <fa :icon="['far', 'calendar']" class="mr-2"/>
                <b>Kezdés:</b> {{ new Date(course.startDate).toLocaleDateString("hu-HU") }}
              </p>
              <p>
                <fa :icon="['far', 'clock']" class="mr-2"/>
                <b>Hossz:</b> {{course.lengthInHours}} óra
              </p>
              <p>
                <fa :icon="['far', 'money-bill-alt']" class="mr-2"/>
                <b>Ár:</b> {{course.price}} ft
              </p>
              <p>
                <fa :icon="['fas', 'heart']" class="mr-2"/>
                <b>Előfizetéssel jobban megéri:</b>
                <nuxt-link to="/officecsomag" class="text-dark">Office előfizetés</nuxt-link>
                ,
                <nuxt-link to="/ultimateakcio" class="text-dark">Ultimate előfizetés</nuxt-link>
              </p>
              <div class="row my-4" v-for="t in course.trainers" :key="t.name">
                <div class="col-4">
                  <img :src="`${$store.state.url.backend}/Picture/TrainerNew/${t.trainerPictureId}`"
                       class="rounded-circle" alt="">
                </div>
                <div class="col-8 my-auto" style="line-height:10px;">
                  <p class="mb-3"><b>Oktató:</b></p>
                  <p>{{ t.name }}</p>
                </div>
              </div>
              <p>
                <b>Előfeltételek:</b>
                {{ course.prerequisite }}
              </p>
              <fa :icon="['fas', 'book']" class="mr-2"/>
              <a :href="course.downloadLink" target="_blank">Tanfolyami anyagok</a><br>
              <fa :icon="['fas', 'check']" class="mr-2"/>
              <a :href="course.feedBackFormUrl" target="_blank">Teszt kérdések</a><br>
              <fa :icon="['fas', 'star']" class="mr-2"/>
              <a href="#" target="_blank">Értékeld a tanfolyamot!</a>
            </div>
            <!-- service-box-content -->
          </div>

          <div class="service-box style-8 large" v-if="course.whoShouldAttend">
            <h5><b>Kiknek ajánljuk?</b></h5>
            <div class="service-box-content mt-4">
              <p class="text-justify">{{ course.whoShouldAttend }}</p>
            </div>
            <!-- service-box-content -->
          </div>

        </div>
        <!-- col -->
        <div class="col-md-8 pl-4 pt-4">

          <p>{{ course.description }}</p>

          <br>
          <h3 class="mb-5">Témakörök</h3>

          <div class="panel-group" id="accordion1">
            <div class="panel" v-for="(m, index) in course.modules" :key="m.title">
              <div class="panel-heading">
                <h6 class="panel-title">
                  <a class="waves" data-toggle="collapse" data-parent="#accordion1" :href="`#${index}`">
                    {{ m.title }}
                  </a>
                </h6>
              </div>
              <div :id="index" class="panel-collapse collapse">
                <div class="panel-body">
                  <div v-html="m.description"></div>
                </div>
              </div>
            </div>

          </div>
          <!-- accordion -->


        </div>
        <!-- col -->
      </div>
      <!-- row -->
    </div>
  </div>
</template>

<script>
import DPageHeader from "../../../components/decode/DPageHeader";
import DButton from "../../../components/decode/DButton";
import Container from "../../../components/Container";
import Row from "../../../components/Row";

export default {
  name: "tanfolyampage",
  layout: "decode",
  components: { Row, Container, DButton, DPageHeader },
  asyncData({ store, payload, params, app }) {
    if (payload) {
      // ez az ag generate modban ervenyesul
      return { course: payload };
    } else {
      //ide akkor futunk, ha spa oldalrol jovunk
      const urlCode = store.getters["courses/getByUrl"](params.courseid);
      if (urlCode) {
        // ezt direkt nem tettem ki storeba. Ha majd kell akkor ki lehet tenni.
        // főleg mert máshol nem használom még ezeket az adatokat így felesleges tárolni
        return app.$axios
          .get(`${store.state.url.courseFull}/${urlCode.id}`)
          .then(r => {
            return { course: r.data[0] };
          })
          .catch(e => {
            console.warn(e);
            // ez kicsit hack, mert úgy vadásztam ki, de máshogy nem tudtam elérni a routert
            //a nuxt error-t nem hasznalhatom, mert az vegzi a redirectet
            $nuxt.$router.back();
          });
      } else {
        // ez kicsit hack, mert úgy vadásztam ki, de máshogy nem tudtam elérni a routert
        //a nuxt error-t nem hasznalhatom, mert az vegzi a redirectet
        $nuxt.$router.back();
      }
    }
  }
};
</script>

<style scoped>
.service-box {
  margin-bottom: 50px;
}

.service-box.style-8 {
  position: relative;
  padding: 50px 40px;
  margin-bottom: 30px;
  background-color: #ffffff;
  border: 2px solid grey;
  text-align: center;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.service-box.style-8.large {
  padding-top: 60px;
  padding-bottom: 60px;
}

.service-box.style-8.medium {
  padding: 30px;
}

.service-box.style-8 > i {
  display: inline-block;
  margin-bottom: 45px;
  color: #00f0d1;
  font-size: 52px;
  line-height: 52px;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.service-box.style-8 .service-box-content h5 {
  margin-bottom: 15px;
  font-weight: 600;
}

.service-box.style-8.large .service-box-content h5 {
  margin-bottom: 40px;
}

.service-box.style-8 .service-box-content h5 a {
  color: #fff;
}

.service-box.style-8 .service-box-content h5 a:hover {
  color: #252525;
}

.service-box.style-8 .service-box-content a {
  color: #3b73c9;
  font-weight: 600;
}

.service-box.style-8 .service-box-content a:hover {
  color: #00f0d1;
}

.service-box.style-8:hover {
  z-index: 1;
  box-shadow: 0 51px 40px 0 rgba(0, 0, 0, 0.4);
}

@media (min-width: 768px) and (max-width: 991px) {
  .service-box.style-8 {
    position: relative;
    padding: 50px 20px;
  }

  .service-box-content > a {
    display: inline-block;
    color: #3b73c9;
    font-weight: 700;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  /*.service-box-content > a:after {
          display: block;
          width: auto;
          height: 2px;
          margin-top: -5px;
          background: #00f0d1;
          background: -webkit-linear-gradient(90deg, #00f0d1, #a966ee);
          background: -ms-linear-gradient(90deg, #00f0d1, #a966ee);
          background: linear-gradient(90deg, #00f0d1, #a966ee);
          content: "";
      }*/
  .service-box-content > a:hover {
    color: #fff;
  }

  .service-box-content > *:last-child {
    margin-bottom: 0;
  }
}

.panel {
  background-color: transparent;
  box-shadow: none;
}

.panel-heading {
  position: relative;
  padding: 0;
  border: none;
  border-radius: 0;
  background-color: transparent;
}

.panel-title {
  position: relative;
  z-index: 1;
}

.panel-title:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-left: 2px solid #00f0d1;
  border-right: 2px solid #a966ee;
  background-size: 100% 2px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(90deg, #00f0d1, #a966ee),
    linear-gradient(90deg, #00f0d1, #a966ee);
  content: "";
}

.panel-title a {
  color: #00f0d1;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

/*.panel-title a:after {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 20px;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-top: -4px;
        background-color: #252525;
        content: "";
        -webkit-transition: all 0.25s;
        transition: all 0.25s;
    }*/

.panel-title a,
.panel-title a:focus {
  position: relative;
  z-index: 1;
  display: block;
  padding: 10px 45px 10px 48px;
  margin-bottom: 15px;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

.panel-title a:before {
  position: absolute;
  top: 50%;
  right: 20px;
  content: "+";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
}

/*.panel-title a:hover,
    .panel-title a[aria-expanded="true"] {
        background: #00f0d1;
        background: -webkit-linear-gradient(51deg, #00f0d1, #a966ee);
        background: -ms-linear-gradient(51deg, #00f0d1, #a966ee);
        background: linear-gradient(51deg, #00f0d1, #a966ee);
        color: #fff;
    }*/

.panel-title a:hover:after,
.panel-title a[aria-expanded="true"]:after {
  background-color: #fff;
}

.panel-title a[aria-expanded="true"]:before {
  content: "-";
}

.panel-group .panel + .panel {
  margin-top: 0;
}

.panel-group .panel-heading + .panel-collapse > .list-group,
.panel-group .panel-heading + .panel-collapse > .panel-body {
  padding: 20px 25px 30px;
  border: none;
}

.panel-body > *:last-child {
  margin-bottom: 0;
}

/* STYLE 2 */
.style-2 .panel-heading {
  background-color: #f1f6f9;
}

.style-2 .panel-title:before {
  display: none;
}

/* DARK SECTION */
.full-section.dark-section .panel-title a:after {
  background-color: #fff;
}

.full-section.dark-section .panel-title a:hover,
.full-section.dark-section .style-2 .panel-title a:hover,
.full-section.dark-section .style-2 .panel-title a[aria-expanded="true"] {
  color: #fff;
}

.full-section.dark-section .style-2 .panel-title a {
  color: #252525;
}

.full-section.dark-section .style-2 .panel-title a:after {
  background-color: #252525;
}

.dark-section-2 h1 {
  color: #fff;
  font-size: 90px;
  margin-bottom: 20px;
}

.dark-section-2 h6 {
  color: #fff;
  margin-top: 10px;
  margin-bottom: 15px;
}

.dark-section-2 a {
  color: #fff;
}

.dark-section-2 a:hover {
  color: #00f0d1;
}

.full-section.dark-section .style-2 .panel-title a:hover:after,
.full-section.dark-section .style-2 .panel-title a[aria-expanded="true"]:after {
  background-color: #fff;
}
</style>
