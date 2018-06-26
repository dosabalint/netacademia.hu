<template>
  <nuxt-link class="card card-animation"
     :to="`/tanfolyam/${userFriendlyUrl}`"
     @click="handleClick"
     v-observe-visibility="visibilityChanged">
    <div class="card-header">
      <img height="180"
           v-lazy="pictureUrl"
           alt="Course picture" class="">
    </div>
    <div class="card-title mb-0">
      <h3>{{ title | truncate(42) }}</h3>
    </div>
    <div class="card-summary">
      <p v-if="trainers">Oktató: {{ trainers | truncate(23) }}</p>
      <p v-if="price">Tanfolyam ára: {{ price | huf }}</p>
      <p v-else>Tanfolyam ára: {{ preliminary ? 'Előkészületben' : 'Ingyenes'}}</p>
      <p v-if="length">Tanfolyam hossza: {{ length }} tanóra</p>
    </div>
    <div class="card-footer">
      <p class="text-primary">Részletek...</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "TCard",
  props: [
    "userFriendlyUrl",
    "pictureUrl",
    "title",
    "subtitle",
    "trainers",
    "price",
    "length",
    "preliminary"
  ],
  template: "#na-card-template",
  data: function() {
    return {
      isVisible: false
    };
  },
  methods: {
    handleClick: function() {
      this.$emit("click");
    },
    visibilityChanged: function(isVisible) {
      if (!this.isVisible && isVisible) {
        this.isVisible = isVisible;
        this.$emit("visible", { userFriendlyUrl: this.userFriendlyUrl });
      }
    }
  },
  filters: {
    huf: function(val) {
      return val.toLocaleString("de-DE") + " Ft"; // mert pontal szeretnek tagolni, akkor is, ha magyarul nem igy csinaljuk
    },
    truncate: function(val = "", length) {
      return val !== null && typeof val === "string" && val.length > length
        ? ""
            .concat(val)
            .substring(0, length)
            .concat("...")
        : val;
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  margin-bottom: 35px;
  padding-bottom: 10px;
  background: #fefff9;
  color: #363636;
  text-decoration: none;
  -moz-box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  -webkit-box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  box-shadow: rgba(0, 0, 0, 0.19) 0 0 8px 0;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  height: 425px;
  width: auto;
  min-width: 300px;
}

.card-animation {
  -moz-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -moz-transform;
  -o-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -o-transform;
  -webkit-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -webkit-transform;
  transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, transform;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}

.card .card-summary {
  padding: 5% 5% 3% 5%;
}

.card .card-header {
  position: relative;
  min-height: 180px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.15);
  background-blend-mode: overlay;
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px;
  border-radius: 4px 4px 0 0;
  padding: 0;
}

.card .card-header:hover,
.card .card-header:focus {
  background-color: rgba(255, 255, 255, 0);
}

.card .card-title {
  background: #35495e;
  padding: 3.5% 2% 2% 3.5%;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  min-height: 80px;
  display: flex;
  align-items: center;
}

.card .card-title h3 {
  font-size: 1.2em;
  line-height: 1.2;
  padding: 0 3.5%;
  width: 100%;
}

.card:hover,
.card:focus {
  background: white;
  -moz-box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 0px;
}

.card:hover .card-title,
.card:focus .card-title {
  background: #3a626e;
  color: white;
}

a.card {
  text-decoration: none;
}

a.card:hover {
  color: #000000;
}

.card p {
  line-height: 1.2;
  letter-spacing: 1px;
  font-family: "Open Sans", sans-serif;
}

.card img {
  min-width: 100%;
  min-height: 100%;
}

.card-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  background-color: rgba(85, 85, 131, 0.1);
}
</style>
