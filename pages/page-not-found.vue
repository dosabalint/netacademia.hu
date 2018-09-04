<template>
  <div id="page-content">

    <section class="full-section dark-section-2  full-screen" id="section-52">

      <div class="full-section-blending"></div>

      <div class="full-section-container">

        <div class="container">
          <div class="row">
            <div class="col-lg-6">

              <p class="text-lg-right"><img src="~/assets/page-not-found/not-found.svg" alt=""></p>

            </div><!-- col -->

            <div class="col-lg-6 my-auto">

              <div class="headline no-margin-bottom">

                <img src="~/assets/logo.svg" width="200" alt="">

                <h6>A keresett oldal nem található!</h6>

                <h1 class="py-3">404</h1>

                <nuxt-link :to="{ name: 'index' }" class="text-uppercase">Vissza a főoldalra!</nuxt-link>

              </div><!-- headline -->

            </div><!-- col -->
          </div><!-- row -->
        </div><!-- container -->

      </div><!-- full-section-container -->
    </section><!-- full-section -->

  </div>
</template>

<script>
  export default {
    name: "PageNotFound",
    layout: "nav-light"
  };
</script>

<style lang="scss" scoped>
  .full-section-blending {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #00f0d1;
    background: -webkit-linear-gradient(90deg, #00f0d1, #c44fcb);
    background: -ms-linear-gradient(90deg, #00f0d1, #c44fcb);
    background: linear-gradient(90deg, #00f0d1, #c44fcb);
    mix-blend-mode: multiply;
  }

  .full-section-container {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    a {
      color: #fff;

      &:hover{
        color: #00f0d1;
        outline: 0;
        text-decoration: none;
      }
    }

    p {
      color: #434343;
      text-decoration: none;
      -webkit-transition: all 0.25s;
      transition: all 0.25s;
      margin-bottom: 10px;
    }

    h1 {
      color: #fff;
      font-size: 90px;
      margin-bottom: 20px;
    }

    h6 {
      color: #fff;
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

</style>
