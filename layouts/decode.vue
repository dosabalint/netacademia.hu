<template>
  <div>
    <Navigation theme="light"></Navigation>
    <DContainer class="mt-5">
      <nuxt/>
    </DContainer>
    <Footer></Footer>
    <DScrollUp></DScrollUp>
  </div>
</template>
<script>
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import DContainer from "@/components/decode/DContainer";
  import DScrollUp from "@/components/decode/DScrollUp";

  export default {
    name: "decode",
    components: { DContainer, Navigation, Footer, DScrollUp }
  };
</script>
