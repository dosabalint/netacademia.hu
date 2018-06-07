<template>
  <div :class="{ container: !isFluid, 'container-fluid': isFluid} ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    isFluid: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>
