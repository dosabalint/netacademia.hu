<template>
  <ul class="superpower-list">
    <a v-for="c in courses" :key="c.code" :href="`${$store.state.url.backend}/${c.userfriedlyURL}`" class="text-dark">
      <Row class="justify-content-center">
        <Column class="col-sm-6"
                data-toggle="tooltip" data-placement="right"
                data-html="true"
                :title="`<h6>${c.title}</h6> <p> ${c.categoryTitle} </p> <p>Oktatók: ${c.trainerNames} </p>` + (displayStartDate ? `<p>Tanfolyam kezdete: ${new Date(c.startDate).toLocaleDateString('hu-HU')}</p>` : '')">
          <li>
            <fa :icon="['fab', 'superpowers']" :style="{ color: iconColor(c)}"/>
            {{ c.title }}
          </li>
        </Column>
        <div v-if="c.dateColumn" class="col text-sm-center">
          <p>{{c.dateColumn}}</p>
        </div>
      </Row>
    </a>
  </ul>
</template>
f2dd
<script>
import Row from "@/components/base/Row";
import Column from "@/components/base/Column";

export default {
  name: "DSuperPowerList",
  components: { Column, Row },
  props: {
    courses: {
      type: Array,
      required: true
    },
    displayStartDate: {
      type: Boolean,
      default: true
    }
  },
  updated() {
    this.$nextTick(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },
  methods: {
    iconColor(course) {
      //TODO: ha api ad értelmes adatot categoryroól akkor lecserélni, mert most picid alapján megyünk
      //TODO: valahogy általánosítani a színek kezelését csomagonként, és azt visszaadni (bed-ről esetleg)
      switch (course.categoryPictureID) {
        case "a46e9a3e-1428-4f2b-a0eb-a5f3880480eb": //free
          return "#ff84fc";
        case "8cec94c7-ff68-45c7-bc1b-f2b1a849bec3": //angular
          return "#ed1c24";
        case "d0688097-80a7-4363-a8ce-5879796a044e": //csharp
          return "#9c5097";
        case "af86f333-bf74-4bac-a8b0-2d89b9a8829c": //winserver
          return "#bee3ed";
        case "e64a3d29-c121-4d7d-a951-5d6f03945b76": //office
          return "#ff931e";
        case "c67d6cb4-a396-469f-97d4-12066906ba71": //vue
          return "#41b883";
        case "eff46903-8e06-4d74-84d8-83e695be7003": //unity
          return "#000000";
        case "c98b0353-7d05-404f-a564-0ccb405d0492": //ecommerce
          return "#3b5998";
        default:
          return "#870010";
      }
    }
  }
};
</script>

<style lang="scss">
.superpower-list {
  list-style: none;
  margin-bottom: 20px;

  li {
    margin-bottom: 5px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a li,
  p {
    color: #434343;
    text-decoration: none;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    margin-bottom: 10px;
  }

  a li:hover {
    color: #00f0d1;
    text-decoration: none;
  }

  a p:hover {
    color: #00f0d1;
    text-decoration: none;
  }
}

/*TOOLTIP*/
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  .arrow {
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
  }

  .arrow::before {
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }

  &.bs-tooltip-top,
  &.bs-tooltip-auto[x-placement^="top"] {
    padding: 5px 0;
  }

  &.bs-tooltip-top .arrow,
  &.bs-tooltip-auto[x-placement^="top"] .arrow {
    bottom: 0;
  }

  &.bs-tooltip-top .arrow::before,
  &.bs-tooltip-auto[x-placement^="top"] .arrow::before {
    margin-left: -3px;
    content: "";
    border-width: 8px 8px 0;
    border-top-color: #bee3ed;
  }

  &.bs-tooltip-right,
  &.bs-tooltip-auto[x-placement^="right"] {
    padding: 0 5px;
  }

  &.bs-tooltip-right .arrow,
  &.bs-tooltip-auto[x-placement^="right"] .arrow {
    left: 0;
  }

  &.bs-tooltip-right .arrow::before,
  &.bs-tooltip-auto[x-placement^="right"] .arrow::before {
    margin-top: -3px;
    content: "";
    border-width: 8px 8px 8px 0;
    border-right-color: #bee3ed;
  }

  &.bs-tooltip-bottom,
  &.bs-tooltip-auto[x-placement^="bottom"] {
    padding: 5px 0;
  }

  &.bs-tooltip-bottom .arrow,
  &.bs-tooltip-auto[x-placement^="bottom"] .arrow {
    top: 0;
  }

  &.bs-tooltip-bottom .arrow::before,
  &.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    margin-left: -3px;
    content: "";
    border-width: 0 8px 8px;
    border-bottom-color: #bee3ed;
  }

  &.bs-tooltip-left,
  &.bs-tooltip-auto[x-placement^="left"] {
    padding: 0 5px;
  }

  &.bs-tooltip-left .arrow,
  &.bs-tooltip-auto[x-placement^="left"] .arrow {
    right: 0;
  }

  &.bs-tooltip-left .arrow::before,
  &.bs-tooltip-auto[x-placement^="left"] .arrow::before {
    right: 0;
    margin-top: -3px;
    content: "";
    border-width: 8px 0 8px 8px;
    border-left-color: #bee3ed;
  }

  .tooltip-inner {
    max-width: 300px;
    padding: 10px 10px;
    color: #050505;
    text-align: left;
    background-color: #8abce0;
    border-radius: 0.25rem;
  }

  .tooltip-inner h6 {
    color: #fff;
    text-align: left;
    font-weight: bold;
  }
}
</style>
