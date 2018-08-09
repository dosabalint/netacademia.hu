<template>
  <main>
    <iframe src="/page-oktato/index.html" frameborder="0"
            :style="{height: iframe.height + 'px'}"
            @load="IframeResize"></iframe>
    <div class="container text-center">

      <!-- Modal -->
      <div class="modal fade" id="successModal" tabindex="-1" role="dialog"
           aria-hidden="true" style="margin-top: 150px;">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body py-5">
              <h4>Köszönjük!</h4>
              <p>Kollégáink hamarosan felveszik Veled a kapcsolatot!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="failModal" tabindex="-1" role="dialog"
           aria-hidden="true" style="margin-top: 150px;">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body py-5">
              <h4>Hiba történt a beküldés során</h4>
              <p>Kérlek jelezd ezt kollégáink felé, hogy javíthassák. </p>
              <p>Köszönjük!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "elofizetes",
    layout: "decode",
    data: function() {
      return {
        iframe: {
          height: 0
        }
      };
    },
    methods: {
      IframeResize(event) {
        this.iframe.height = event.target.contentWindow.document.body.scrollHeight;
      }
    },
    mounted() {
      window.$ = $;
      $("body")
        .on("successModal", () => {
          $("#successModal").modal("show");
        })
        .on("failModal", () => {
          $("#failModal").modal("show");
        });
    }
  };
</script>

<style scoped>
  iframe {
    width: 100%;
  }
</style>
