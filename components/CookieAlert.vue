<template>
  <div>
    <no-ssr>
      <cookie-law theme="na-theme"
                  buttonText="Elfogadom"
                  buttonLink="/adatvedelem"
                  buttonLinkText="Adatvédelem">
        <div slot="message">
          Ez az oldal is sütiket használ, nyilván.
        </div>
      </cookie-law>
    </no-ssr>
  </div>
</template>

<script>
  import CookieLaw from "vue-cookie-law";

  export default {
    components: { CookieLaw },
    name: "CookieAlert"
  };
</script>

<style lang="scss">

  .Cookie--na-theme {
    background: #424851;
    color: #fff;
    padding: 1rem 1.5rem;

    .Cookie__button {
      background: rgb(255, 165, 0);
      padding: 0.625em 1.125em;
      color: #fff;
      font-weight: 700;
      border-radius: 0;
    }
  }

</style>
