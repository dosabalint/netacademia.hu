<template>
  <div>
    <Navigation theme="light"></Navigation>
    <DContainer class="mt-5">
      <nuxt/>
    </DContainer>
    <Footer></Footer>
    <DScrollUp></DScrollUp>
    <CookieAlert></CookieAlert>
  </div>
</template>

<script>
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import DContainer from "@/components/decode/DContainer";
  import DScrollUp from "@/components/decode/DScrollUp";
  import CookieAlert from "@/components/CookieAlert";

  export default {
    name: "decode",
    components: { DContainer, Navigation, Footer, DScrollUp, CookieAlert }
  };
</script>
