<template>
  <div>
    <Navigation theme="transparent"></Navigation>
    <DContainer>
      <nuxt class="decode-container"/>
    </DContainer>
    <Footer></Footer>
  </div>
</template>
<script>
import Navigation from "~/components/Navigation";
import Footer from "../components/Footer";
import DContainer from "@/components/decode/DContainer";

export default {
  components: { DContainer, Footer, Navigation }
};
</script>
