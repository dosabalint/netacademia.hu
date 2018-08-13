<template>
  <div>
    <DNavigation theme="transparent"></DNavigation>
    <DContainer>
      <nuxt class="decode-container"/>
    </DContainer>
    <Footer></Footer>
    <DScrollUp></DScrollUp>
    <CookieAlert></CookieAlert>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";
  import DContainer from "@/components/decode/DContainer";
  import DScrollUp from "@/components/decode/DScrollUp";
  import CookieAlert from "@/components/CookieAlert";
  import DNavigation from "@/components/decode/DNavigation";

  export default {
    components: { DContainer, Footer, DNavigation, DScrollUp, CookieAlert }
  };
</script>
