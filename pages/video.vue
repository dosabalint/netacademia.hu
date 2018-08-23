<template>
  <main>
    {{ pageData }}
    <iframe src="http://pedellus.local/account/logon" frameborder="0"></iframe>
  </main>
</template>

<script>
  export default {
    name: "videoPage",
    layout: "decode",
    data: function() {
      return {
        pageData: null
      };
    },
    created() {
      this.fetchPageData().then(response => {
          console.log(response);
          this.pageData = response;
        }
      );
    },
    methods: {
      fetchPageData() {
        let courseName = "ELAI-I-az-elektronika-alapismeretei-i";

        let headers = {
          Cookie: this.$store.state.user.token
        };

        console.log(headers);

        return this.$axios
          .$get(
            `${this.$store.state.url.backend}${this.$store.state.url.videos}/${courseName}`,
            {
              headers: headers,
              withCredentials: true
            }
          );
      }
    }
  };
</script>
