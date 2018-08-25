<template>
  <main class="pb-5" v-cloak>
    <!-- cover -->
    <div class="bg-indulo">
      <div class="container h-100">
        <div class="h-100 d-flex align-items-center">
          <h1 class="m-0 p-0">{{ courseName }}</h1>
        </div>
      </div>
    </div>

    <!-- error message -->
    <div class="container minus-margin">
      <div v-if="errorMessage"
           class="row video-box mb-4">
        <div class="p-5">
          <h4 class="mb-3">Hiba történt az oldal betöltésekor</h4>
          <div>A hiba oka: {{ errorMessage }}</div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div v-if="playlist.length"
         class="container minus-margin">

      <!-- player and playlist -->
      <div class="row video-box mb-4">

        <div class="col-lg-7 col-xl-8 my-auto px-0">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="vimeoUrl" allowfullscreen></iframe>
          </div>
        </div>

        <div class="col-lg-5 col-xl-4 playlist px-0 border-bottom">
          <div class="almost-standart">

            <div class="big-block border-bottom">

              <div v-for="(playlistItem, index) in playlist" :key="index"
                   class="row py-3"
                   :class="{ 'border-bottom': index !== playlist.length - 1 }">

                <div class="col-2 my-auto">
                  <a @click.prevent="PlaylistIndex = index" href="#">
                    <img src="~/assets/video/play-button.svg" width="20" alt="" class="ml-5 ml-lg-3 w-20px">
                  </a>
                </div>

                <div class="col-7 my-auto">
                  <a @click.prevent="PlaylistIndex = index" href="#">
                    {{ playlistItem.Title }}
                  </a>
                </div>

                <div v-if="playlistItem.Length"
                     class="col-3 mx-auto my-auto">
                  {{ playlistItem.Length }}
                </div>

                <div v-if="playlistItem.Mp3DownloadLink"
                     class="offset-2 col-8 mt-2">
                  <a :href="playlistItem.Mp3DownloadLink" target="_blank">
                    <img src="~/assets/video/musical-note.svg" height="15" alt="" class="mr-2 w-15px">
                    <small>mp3 letöltése</small>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-12 p-4 mt-3">
          <h5>{{ CurrentPlaylistItem.Title }}</h5>
        </div>
      </div>

      <!-- description -->
      <div v-if="description"
           class="row video-box mb-4">

        <div v-if="HasInfo"
             class="col-lg-4 my-5 px-5 border-right-color">

          <h4 class="mb-4">Tanfolyam információk</h4>

          <p v-if="prerequisits">
            <i class="decode-icon-graduation video-icon"></i>
            <b>Előkövetelmények:</b>
          </p>
          <p v-if="prerequisits">
            {{ prerequisits }}
          </p>

          <p v-if="length">
            <i class="decode-icon-cursor video-icon"></i>
            <b>Tanfolyam hossza:</b>
            {{ length }} óra
          </p>

          <p v-if="startDate">
            <i class="decode-icon-time video-icon"></i>
            <b>Kezdés:</b>
            {{ startDate }}
          </p>
        </div>

        <div class="mb-5 my-lg-5 px-5" :class="{'col-lg-8': HasInfo}">
          <h4 class="mb-3">Leírás</h4>
          <div v-html="description"></div>
        </div>
      </div>

      <!-- download link -->
      <div v-if="downloadLink"
           class="row video-box mb-4">
        <div class="col-12 my-5 px-5">
          <h5 class="mb-3"><i class="decode-icon-link video-icon"></i>Letölthető anyagok, linkek</h5>
          <a href="#" target="_blank">{{ downloadLink }}</a>
        </div>
      </div>

      <!-- trainers -->
      <div v-if="trainers.length"
           class="row video-box py-5">
        <div class="col-12 px-5">
          <h5 class="mb-5">Oktatók</h5>
        </div>

        <div v-for="(trainer, index) in trainers" :key="index"
             class="col-md-3 text-center">
          <div class="trainer-picture"
               :style="{ 'background-image' : `url(${getTrainerPicture(trainer)}`}"></div>
          <p class="pt-3">{{ trainer.Name }}</p>
        </div>
      </div>

    </div>
  </main>
</template>

<script>

  export default {
    name: "videoPage",
    layout: "decode",
    data() {
      return {
        // temp
        pageData: null,
        playlist: [],
        playlistIndex: null,
        vimeoId: null,
        vimeoUrl: null,
        courseName: null,
        description: null,
        downloadLink: null,
        trainers: [],
        prerequisits: null,
        startDate: null,
        errorMessage: null,
        length: null
      };
    },
    computed: {
      /**
       * @return {string}
       */
      ApiVideoUrl() {
        return `${this.$store.state.url.backend}${this.$store.state.url.videos}/${this.CourseId}`;
      },
      /**
       * @return {string}
       */
      ApiVideoPlayerBaseUrl() {
        return `${this.$store.state.url.backend}${this.$store.state.url.videosPopup}`;
      },
      CourseId() {
        return this.$route.params.courseId;
      },
      /**
       * @return {null|object}
       */
      CurrentPlaylistItem() {
        if (this.playlistIndex === null) {
          return {};
        }

        return this.playlist[this.playlistIndex];
      },
      PlaylistIndex: {
        get: function() {
          return this.playlistIndex;
        },
        set: function(newIndex) {
          this.playlistIndex = newIndex;

          this.openVideo(this.CurrentPlaylistItem.URLCode);
        }
      },
      VimeoId: {
        get: function() {
          return this.vimeoId;
        },
        set: function(newVimeoId) {
          this.vimeoId = newVimeoId;
          this.updateVimeoUrl(this.newValue);
        }
      },
      /**
       * @return {boolean}
       */
      HasInfo() {
        return !!this.prerequisits || !!this.startDate;
      }
    },
    created() {
      if (typeof this.$route.params.courseId === "undefined") {
        this.$router.push({ name: "404" });
        return;
      }

      this.fetchPageData()
        .then(
          response => response.data,
          rejection => Promise.reject(rejection.response)
        )
        .then(
          pageData => {
            this.pageData = pageData;
            this.loadPlaylist(pageData.Modules);
            this.courseName = pageData.Title;
            this.description = pageData.Description.replace(/<([^ >]+)[^>]*>/ig, "<$1>");
            this.downloadLink = pageData.DownloadLink;
            this.trainers = pageData.Trainers;
            this.prerequisits = pageData.Prerequisits;
            this.startDate = new Date(pageData.StartDate).toLocaleDateString();
            this.length = pageData.LengthHours;
          },
          error => {
            switch (error.status) {

              case 404:
                this.$router.push({ name: "404" });
                break;

              default:
                this.errorMessage = error.statusText;
            }
          }
        );
    },
    methods: {
      fetchPageData() {
        return this.$axios.get(`${this.ApiVideoUrl}`, { withCredentials: true });
      },
      loadPlaylist(modules) {

        this.playlist = modules
          .map(module => module.Recordings
            .map((recording, index) => Object.assign({}, recording, {
                Title: module.Recordings.length > 1 ? `${module.Title} ${index + 1}.` : module.Title
              })
            ))
          .reduce((acc, recordings) => acc.concat(recordings), []);

        if (this.playlist.length) {
          this.PlaylistIndex = 0;
        }
      },
      openVideo(videoID) {
        this.$axios.get(`${this.ApiVideoPlayerBaseUrl}/${videoID}`, { withCredentials: true })
          .then(response => response.data)
          .then(videoData => {
            this.VimeoId = videoData.Id;
          });
      },
      updateVimeoUrl() {
        this.vimeoUrl = `${this.$store.state.url.vimeoPlayer}/${this.vimeoId}`;
      },
      getTrainerPicture(trainer) {
        return `${this.$store.state.url.backend}/Picture/TrainerNew/${trainer.PictureID}`;
      }
    }
  };
</script>

<style lang="scss" scoped>

  main {
    background: #f1f6f9;
  }

  .bg-indulo {
    overflow: auto;
    height: 300px;
    background: #fff url("~/assets/video/indulo-bg.svg") no-repeat;
    background-size: cover;
  }

  h1 {
    padding-top: 100px;
    color: #fff !important;
    font-size: 2.5rem !important;
  }

  .video-box {
    background: rgba(250, 250, 250, 1);

    a {
      color: #434343;

      &:hover {
        text-decoration: none;
        color: #2d9ad2;
      }
    }
  }

  .video-icon {
    font-size: 30px;
    margin-right: 15px;
    color: #2d9ad2;
  }

  .trainer-picture {
    border-radius: 50%;
    -moz-box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, .3);
    -webkit-box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, .3);
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, .3);
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: top;
    display: inline-block;
  }

  .border-right-color {
    border-right: 1px solid #2d9ad2;
  }

  /* playlist */

  .playlist {
    max-height: 428px;
    overflow-y: auto;
    overflow-x: hidden;

    @media screen and (max-width: 1200px) and (min-width: 992px) {
      height: 315px;
    }
  }

  /* margin */

  .minus-margin {
    margin-top: 20px;
    @media (min-width: 992px) {
      margin-top: -80px;
    }
  }

  /* width */

  .w-15px {
    width: 15px;
  }

  .w-20px {
    width: 20px;
  }
</style>
