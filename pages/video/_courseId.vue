<template>
  <main class="pb-5">
    <!-- cover -->
    <div class="bg-indulo">
      <div class="container h-100">
        <div class="h-100 d-flex align-items-center">
          <h1 class="m-0 p-0">{{ courseName }}</h1>
        </div>
      </div>
    </div>

    <div class="container mt--80px">

      <!-- player and playlist -->
      <div class="row video-box">

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
                   :class="{
                      'border-bottom': index !== playlist.length - 1
                    }">

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
      <div class="row video-box mt-4">
        <div class="col-lg-12 mb-5 my-lg-5 px-5">
          <h4 class="mb-3">Leírás</h4>
          <div v-html="description">1</div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>

  export default {
    name: "videoPage",
    layout: "decode",
    data: function() {
      return {
        // temp
        pageData: null,
        playlist: [],
        playlistIndex: null,
        vimeoId: null,
        vimeoUrl: null,
        courseName: null,
        description: null
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
      }
    },
    created() {
      this.fetchPageData()
        .then(response => response.data)
        .then(pageData => {
          this.pageData = pageData;
          this.loadPlaylist(pageData.Modules);
          this.courseName = pageData.Title;
          this.description = pageData.Description
            .replace(/<([^ >]+)[^>]*>/ig,'<$1>');
        });
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
      }
    }
  };
</script>

<style lang="scss">

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

  .mt--80px {
    margin-top: -80px;
  }

  /* width */

  .w-15px {
    width: 15px;
  }

  .w-20px {
    width: 20px;
  }
</style>
