<template>
  <div>
    <DContainer class="mt-5">
      <DNavigation/>
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
  components: { DNavigation, DContainer, Footer }
};
</script>
