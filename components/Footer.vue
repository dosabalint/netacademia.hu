<template>
  <footer class="pt-5 text-light bg-dark">
    <div class="container-fluid footer-container">

      <div class="row py-3 mx-auto justify-content-center text-uppercase font-weight-bold">

        <div class="col-12 col-sm-6 col-lg-3 my-auto ">
          <nuxt-link to="/"><img src="~/assets/logo.svg" alt="logo" width="220" class="lg-px-3"></nuxt-link>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <ul class="list-unstyled">
            <li class="py-1">+36 20 385 3332</li>
            <li class="py-1">iroda@netacademia.hu</li>
            <li class="py-1">Adószám: 13702355-2-42</li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <ul class="list-unstyled">
            <li class="py-1">
              <nuxt-link to="/">Főoldal</nuxt-link>
            </li>
            <li class="py-1">
              <nuxt-link to="/tanfolyamkereso">Tanfolyamkereső</nuxt-link>
            </li>
            <li class="py-1">
              <nuxt-link to="/indulotanfolyamok">Induló tanfolyamok</nuxt-link>
            </li>
            <li class="py-1">
              <nuxt-link to="/oktato">Jelentkezz oktatónak!</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <ul class="list-unstyled">
            <li class="py-1">
              <nuxt-link to="/elofizetes">Előfizetés</nuxt-link>
            </li>
            <li class="py-1">
              <nuxt-link to="/certificate">NetAcademia Certificate</nuxt-link>
            </li>
            <li class="py-1">
              <nuxt-link to="/lenyugozo-tanfolyamok">Lenyűgöző tanfolyamok</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <h1 class="line">BARÁTKOZZUNK</h1>
      <div class="text-center px-0">
        <a class="px-3" href="https://www.facebook.com/Netacademia/">
          <fa :icon="['fab', 'facebook']" size="2x"/>
        </a>
        <a class="px-3" href="https://twitter.com/netacademia">
          <fa :icon="['fab', 'twitter']" size="2x"/>
        </a>
        <a class="px-3" href="https://www.instagram.com/netacademia.hu/">
          <fa :icon="['fab', 'instagram']" size="2x"/>
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
        <a class="px-3" href="https://www.linkedin.com/company/netacademia/">
          <fa :icon="['fab', 'linkedin']" size="2x"/>
        </a>
        <a class="px-3" href="https://www.youtube.com/user/Trombita45">
          <fa :icon="['fab', 'youtube']" size="2x"/>
        </a>
      </div>
    </div>

    <div class="container">
      <div class="row py-4">
        <div class="col-12 px-0 text-center">
          <nuxt-link class="mx-3" to="aszf">ÁSZF</nuxt-link>
          © NetAcademia 1998-{{currentYear}}
          <nuxt-link class="mx-3" to="/adatvedelem">Adatvédelem</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  font-size: 12px;
  overflow: hidden;
}

footer a {
  color: #fff;
}

footer a:hover {
  color: grey;
}

.line {
  margin: 0 0 1em;
  line-height: 2em;
  padding: 0;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  font-size: 2em;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.line:before,
.line:after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-left: -999em;
  height: 2px;
  width: 998em;
  border-top: 1px solid #fff;
  background: rgba(0, 0, 0, 0.2);
}

.line:after {
  left: auto;
  width: 999em;
  margin: 0 0 0 1em;
}

@media (min-width: 1600px) {
  .footer-container {
    margin-right: 250px;
    margin-left: 250px;
  }
}

@media (min-width: 1400px) {
  .footer-container {
    margin-right: 80px;
    margin-left: 80px;
  }
}

@media (min-width: 1200px) {
  .footer-container {
    margin-right: 50px;
    margin-left: 50px;
  }
}
</style>
