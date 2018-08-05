<template>
  <a id="scroll-up" class="waves">
    <fa :icon="['fa', 'angle-up']"/>
  </a>

</template>

<script>
  export default {
    name: "ScrollUp",
    mounted() {
      $("#scroll-up").on("click", this.ScrollUp);
      $(window).scroll(this.OnScroll);
      this.OnScroll();
    },
    methods: {
      OnScroll() {
        if ($(window).scrollTop() > $(window).height() / 2) {
          $("#scroll-up").fadeIn(300);
        } else {
          $("#scroll-up").fadeOut(300);
        }
      },
      /**
       * @returns {boolean}
       */
      ScrollUp() {
        $("html, body").animate({
          scrollTop: 0
        }, 800);
        return false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  #scroll-up {
    position: fixed;
    z-index: 8030;
    bottom: 50px;
    right: 50px;
    display: none;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: #00f0d1;
    color: #fff;
    font-size: 24px;
    line-height: 42px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  #scroll-up:hover {
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.16), 0 3px 12px 0 rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 767px) {

    #scroll-up {
      right: 20px;
      bottom: 20px;
    }

  }
</style>
