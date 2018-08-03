<template>
  <nuxt-link v-if="isNuxtLink" :to="href">
    <slot></slot>
  </nuxt-link>
  <a v-else :href="href">
    <slot></slot>
  </a>
</template>

<script>
//TODO: nuxt-link valamiert nem jol viselkedik ha #id-t kap. Ezt fixelni kell
// workaround: beadok telejs url-t state-bol es akkor a-t csinal
export default {
  name: "AOrNuxtLink",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isNuxtLink: function() {
      // console.log(this.href.indexOf('://'));
      // ha nincs egy linkben :// akkor azt nuxt-link-ken kezeljuk
      return this.href.indexOf("://") === -1;
    }
  }
};
</script>

<style scoped>
</style>
