<template>
  <div>
    <DNavigation theme="light"></DNavigation>
    <DContainer class="mt-5">
      <nuxt/>
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
    name: "decode",
    components: { DContainer, DNavigation, Footer, DScrollUp, CookieAlert }
  };
</script>
