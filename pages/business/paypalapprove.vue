<template>
  <div>
    <DPageHeader asset-image="~/assets/default-header-bg.svg" icon="decode-icon-avatar">
      <h1>Megrendelés rögzítése folyamatban</h1>
    </DPageHeader>

    <section class="full-section" id="section-6">

      <div class="container">

        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8 mb-5 text-center">

            <!--suppress HtmlUnknownTarget -->
            <img src="~/assets/loading.gif" alt="">

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
    mounted() {
      this.$axios.post(`/api/v1/Subscription/PayPalApprove?id=${this.$route.query.id}&payerId=${this.$route.query.PayerID}`)
        .then(response => {
          if (response.status === 200) this.$router.push({ name: "business-subscribe-success" });
          else this.$router.push({ name: "business-subscribe-fail", query: { id: response.status } });
        })
        .catch(error => {
          this.$router.push({ name: "business-subscribe-fail", query: { id: error.response.status } });
        });
    }
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
