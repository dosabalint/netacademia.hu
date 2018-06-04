<template>
  <div class="multilayer" :style="{ top: yPercent, left: xPercent }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DFullSectionMultilayer",
  props: {
    yPercent: {
      type: String,
      required: true,
      validator(val) {
        return val.indexOf('%') !== -1;
      }
    },
    xPercent: {
      type: String,
      required: true,
      validator(val) {
        return val.indexOf('%') !== -1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.full-section {
  .multilayer {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
}
</style>
