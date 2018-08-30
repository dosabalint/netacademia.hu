<template>
  <div>
    <!-- player iframe -->
    <div v-if="!otherCourse.name">
      <iframe class="embed-responsive-item" allowfullscreen :src="src"></iframe>
    </div>

    <!-- error -->
    <div v-if="otherCourse.name"
         class="text-center error-message">
      <div>
        Egy másik fülön vagy ablakban megnyitottad a <br>
        <strong>{{ otherCourse.name }}</strong><br>
        kurzus videóit, így ebben az ablakban leállítottuk a lejátszót. <br>
        Ezt azért tettük, mert az előfizetésed csupán egy személyre szól.
        (<a href="/aszf" target="_blank">ÁSZF</a>)
        <br>
        <br>
        Ha több felhasználóra van szükséged (vagy netán szükségetek), <br>
        akkor elérhetőségeinket és értékesítő munkatársainkat megtalálhatod
        <a href="/kapcsolat" target="_blank">ezen a linken</a>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from "~/plugins/firebase";

  export default {
    name: "CourseVideoPlayer",

    props: [
      "src",
      "course"
    ],

    data() {
      return {
        database: null,
        playerData: null,
        otherCourse: {
          name: null,
          ID: null
        }
      };
    },

    created() {
      this.database = firebase.database();

      this.playerData = {
        courseID: this.course.id,
        courseName: this.course.name,
        time: new Date().getTime()
      };

      this.currentPlayerRef.on("value", snapshot => {
        const otherPlayer = snapshot.val();

        if (otherPlayer.time !== this.playerData.time) {
          this.otherCourse = {
            name: otherPlayer.courseName,
            ID: otherPlayer.courseID
          };
          this.LogSimultanPlayer();
        }
      });
      this.LogCurrentPlayer();
    },

    computed: {

      userHash() {
        return this.StrToHash(this.$store.state.user.email);
      },

      // refs
      currentPlayerRef() {
        return this.database.ref(`currentPlayers/${this.userHash}`);
      },
      simultanPlayersRef() {
        return this.database.ref(`simultanPlayers/${this.userHash}`);
      }
    },

    methods: {
      LogCurrentPlayer() {
        this.currentPlayerRef.set(this.playerData);
      },

      LogSimultanPlayer() {
        this.simultanPlayersRef.push({
          courseID1: this.playerData.courseID,
          courseID2: this.otherCourse.ID,
          time: new Date().getTime()
        });
      },

      /**
       * @return {number}
       */
      StrToHash(str) {
        let hash = 0;

        if (str.length === 0) {
          return hash;
        }

        for (let i = 0; i < str.length; i++) {
          let chr = str.charCodeAt(i);
          hash = (hash << 5) - hash + chr;
          hash |= 0;
        }

        return hash;
      }
    },

    watch: {
      src() {
        this.otherCourse.name = null;
        this.otherCourse.ID = null;
        this.LogCurrentPlayer();
      }
    }
  };
</script>

<style scoped>
  .error-message {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
