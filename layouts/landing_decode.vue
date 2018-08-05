<template>
  <div>
    <Navigation theme="transparent"></Navigation>
    <DContainer>
      <nuxt class="decode-container"/>
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
  components: { DContainer, Footer, Navigation, DScrollUp }
};
</script>
