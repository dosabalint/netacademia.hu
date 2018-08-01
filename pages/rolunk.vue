<template>
  <main>
    <iframe src="/page-rolunk/index.html" frameborder="0"
            :style="{height: iframe.height + 'px'}"
            @load="IframeResize"></iframe>
  </main>
</template>

<script>
  export default {
    name: "vue-path",
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
    }
  };
</script>

<style scoped>
  iframe {
    width: 100%;
  }
</style>
