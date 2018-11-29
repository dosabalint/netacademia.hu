<template>
  <div>
    <DPageHeader
      asset-image="~/assets/default-header-bg.svg"
      icon="decode-icon-time"
    >
      <h1>Friss tanfolyamok</h1>
    </DPageHeader>
    <Container class="py-5">
      <Row class="justify-content-center">
        <Column class="col-md-12">
          <DHeadline class="pb-4 text-center">
            <h6>NetAcademia</h6>
            <h3 class="mb-4">Legfrissebb tanfolyamaink</h3>
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

    <DFullSection theme="light">
      <Container class="py-5">
        <Container class="row justify-content-center">
          <Column class="col-md-12">
            <DHeadline class="text-center">
              <h6>NetAcademia</h6>
              <h3 class="pb-5">Tudástár videóink</h3>
            </DHeadline>
          </Column>
          <Column class="col">
            <DTTLast10 :videos="tudastar">
            </DTTLast10>
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
  import DTTLast10 from "@/components/decode/DTTLast10";

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
      DPageHeader,
      DTTLast10
    },
    data() {
      return {
        courses: [],
        tudastar: []
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
      const [tt, courses] = await Promise.all([
        this.$axios.$get(this.$store.state.url.tudastarLast10VideosUrl),
        this.$axios
          .$get(`${this.$store.state.url.backend}${ this.$store.state.url.commingSoonCourses }`)
          .catch(console.warn)
        ]);

      this.tudastar = tt;
      this.courses = courses;
    }
  };
</script>

<style scoped>
</style>
