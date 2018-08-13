<template>
  <div>
    <DNavigation theme="light"></DNavigation>
    <DContainer class="mt-5">
      <nuxt/>
    </DContainer>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "@/components/Footer";
  import DContainer from "@/components/decode/DContainer";
  import DNavigation from "@/components/decode/DNavigation";

  export default {
    name: "decode",
    components: { DContainer, Footer, DNavigation }
  };
</script>
