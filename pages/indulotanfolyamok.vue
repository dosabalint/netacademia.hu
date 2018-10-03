<template>
  <div>
    <DPageHeader
      asset-image="~/assets/default-header-bg.svg"
      icon="decode-icon-time"
    >
      <h1>Folyamatban lévő és hamarosan induló tanfolyamaink</h1>
    </DPageHeader>
    <Container class="py-5">
      <Row class="justify-content-center">
        <Column class="col-md-12">
          <DHeadline class="pb-4 text-center">
            <h6>NetAcademia</h6>
            <h3 class="mb-4">Folyamatban lévő tanfolyamaink</h3>
          </DHeadline>
        </Column>
        <Column class="col">
          <DSuperPowerList :courses="this.coursesInProgress">
          </DSuperPowerList>
        </Column>
      </Row>
    </Container>

    <DFullSection theme="smoke">
      <Container class="py-5">
        <Container class="row justify-content-center">
          <Column class="col-md-12">
            <DHeadline class="text-center">
              <h6>NetAcademia</h6>
              <h3 class="pb-5">Hamarosan induló tanfolyamaink</h3>
            </DHeadline>
          </Column>
          <Column class="col">
              <DSuperPowerList :courses="this.coursesCommingSoon" :displayStartDate="false">
              </DSuperPowerList>
          </Column>
        </Container>
      </Container>
    </DFullSection>
  </div>
</template>

<script>
  import DPageHeader from "@/components/decode/DPageHeader";
  import Column from "@/components/base/Column";
  import Container from "@/components/base/Container";
  import Row from "@/components/base/Row";
  import DFullSection from "@/components/decode/DFullSection";
  import DHeadline from "@/components/decode/DHeadline";
  import DSuperPowerList from "@/components/decode/DSuperPowerList";

  export default {
    name: "indulotanfolyamok",
    layout: "decode",
    components: {
      DSuperPowerList,
      DHeadline,
      DFullSection,
      Row,
      Container,
      Column,
      DPageHeader
    },
    data() {
      return {
        courses: []
      };
    },
    computed: {
      coursesInProgress() {
        return this.courses.filter(c => c.dateColumn !== "");
      },
      coursesCommingSoon() {
        return this.courses.filter(c => c.dateColumn === "");
      }
    },
    updated() {
      this.$nextTick(() => {
        $("[data-toggle=\"tooltip\"]").tooltip();
      });
    },
    async mounted() {
      await this.$axios
        .$get(
          `${this.$store.state.url.backend}${
            this.$store.state.url.commingSoonCourses
            }`
        )
        .then(r => {
          this.courses = r;
        })
        .catch(console.warn);
    }
  };
</script>

<style scoped>
</style>
