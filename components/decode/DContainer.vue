<template functional>
  <div class="decode-container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "DContainer"
};
</script>

<style lang="scss">
.decode-container {
  overflow: hidden;
  background-color: #fff;
  font: 15px/28px "Open Sans", sans-serif;
  color: #838383;

  //.body-overlay:after {
  //  position: fixed;
  //  z-index: 8000;
  //  top: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 100%;
  //  background-color: rgba(0, 0, 0, 0.75);
  //  content: "";
  //}

  @import "../../scss/decode/base/typography";
  @import "../../scss/decode/base/animations";
  @import "../../scss/decode/base/forms";
  @import "../../scss/decode/base/lists";
  @import "../../scss/decode/base/waves";
}
</style>
