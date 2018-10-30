<template>
  <div>
    <DPageHeader asset-image="~/assets/default-header-bg.svg" icon="decode-icon-avatar">
      <h1>Sikeres megrendelés!</h1>
    </DPageHeader>

    <section class="full-section" id="section-6">

      <div class="container">

        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8 mb-5">

            <h4 class="mt-0 mb-4">Megrendelésed rögzítettük</h4>

            A további lépésekről emailben tájékoztatunk.

          </div>
          <!-- col -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

  </div>
</template>

<script>
  import DPageHeader from "~/components/decode/DPageHeader.vue";

  export default {
    name: "business-paypal-approve",
    layout: "decode",
    components: { DPageHeader },
  };
</script>

<!--suppress CssUnknownTarget -->
<style scoped lang="scss">
  @import "~/scss/decode/components/_buttons.scss";

  .bg-indulo {
    overflow: auto;
    height: 300px;
    background: #fff url("~/assets/business-megrendeles/indulo-bg.svg") no-repeat;
    background-size: cover;
  }

  .full-section {
    padding-top: 100px;
    padding-bottom: 50px;
  }
</style>
