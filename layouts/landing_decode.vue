<template>
  <div>
    <DNavigation theme="transparent"></DNavigation>
    <DContainer>
      <nuxt class="decode-container"/>
    </DContainer>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import DNavigation from "@/components/decode/DNavigation";
import DContainer from "@/components/decode/DContainer";

export default {
  components: { DContainer, Footer, DNavigation }
};
</script>
