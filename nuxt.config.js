const webpack = require("webpack");

const scroll = function(to, from, savedPosition) {
  if (to.hash) {
    return new Promise(resolve => {
      setTimeout(() => {
        let position = {};
        if (to.hash && document.querySelector(to.hash)) {
          // scroll to anchor by returning the selector
          position = { selector: to.hash };
        } else {
          position = { x: 0, y: 0 };
        }
        resolve(position);
      }, 500);
    });
  } else {
    return { x: 0, y: 0 };
  }
};

const gtmId = process.env.GTM || "GTM-MWT4847";

module.exports = {
  router: {
    linkActiveClass: "active",
    scrollBehavior: scroll
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "NetAcademia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Teremtsd meg a jövőd!"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700&subset=latin-ext"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800%7C;Roboto:100,500"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  css: ["~/scss/main.scss", "~/scss/decode-icons/css/decode-icons.min.css"],
  plugins: [
    { src: "~/plugins/vue-observe-visibility", ssr: false },
    { src: "~/plugins/vue-youtube-embed", ssr: false },
    { src: "~/plugins/vue-mq", ssr: false },
    { src: "~/plugins/vue-lazyload", ssr: false }
  ],
  modules: [
    ["@nuxtjs/google-tag-manager", { id: gtmId }],
    "@nuxtjs/axios",
    "nuxt-fontawesome"
  ],
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/fontawesome-free-brands",
        icons: [
          "faSuperpowers",
          "faFacebook",
          "faTwitter",
          "faInstagram",
          "faLinkedin",
          "faYoutube"
        ]
      },
      {
        set: "@fortawesome/fontawesome-free-solid",
        icons: ["faHeart", "faBook", "faCheck", "faStar", "faAngleDown"]
      },
      {
        set: "@fortawesome/fontawesome-free-regular",
        icons: ["faCalendar", "faClock", "faMoneyBillAlt", "faPlayCircle"]
      }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    backendUrl: process.env.BACKEND_URL || "https://app.netacademia.hu"
  },
  axios: {
    https: process.env.NODE_ENV === "production" ? true : false,
    // credentials: true,
    baseURL: process.env.BACKEND_URL || "https://app.netacademia.hu",
    browserBaseURL: process.env.BACKEND_URL || "https://app.netacademia.hu"
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      "intersection-observer",
      "vue-observe-visibility",
      "babel-polyfill",
      "jquery", //alias-bol jon extend-nel
      "popper.js", //alias-bol jon extend-nel
      "bootstrap", //alias-bol jon extend-nel
      "jquery-touchswipe",
      // "~/static/revolutionslider/js/jquery.themepunch.tools.min.js",
      "~/static/revolutionslider/js/jquery.themepunch.revolution.min.js",
      "~/static/revolutionslider/js/extensions/revolution.extension.layeranimation.min.js",
      "~/static/revolutionslider/js/extensions/revolution.extension.navigation.min.js",
      "~/static/revolutionslider/js/extensions/revolution.extension.slideanims.min.js"
    ],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery", //alias-bol jon extend-nel
        jQuery: "jquery", //alias-bol jon extend-nel
        jquery: "jquery", //alias-bol jon extend-nel
        "window.jQuery": "jquery", //alias-bol jon extend-nel
        punchgs: "gsap/all"
      })
    ],
    analyze: true,
    babel: {
      presets: [
        [
          "vue-app",
          {
            useBuiltIns: true,
            targets: { ie: 9, uglify: true }
          }
        ]
      ]
    },
    extend(config, { isDev, isClient }) {
      config.resolve.alias["@fortawesome/fontawesome-free-brands$"] =
        "@fortawesome/fontawesome-free-brands/shakable.es.js";
      config.resolve.alias["@fortawesome/fontawesome-free-solid$"] =
        "@fortawesome/fontawesome-free-solid/shakable.es.js";
      config.resolve.alias["@fortawesome/fontawesome-free-regular"] =
        "@fortawesome/fontawesome-free-regular/shakable.es.js";

      config.resolve.alias["jquery"] =
        "~/static/bootstrap/jquery-3.3.1.slim.min.js";
      config.resolve.alias["popper.js"] =
        "~/static/bootstrap/popper.min.js";
      config.resolve.alias["bootstrap"] =
        "~/static/bootstrap/bootstrap.min.js";

      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      vueLoader.options.transformToRequire = {
        ...vueLoader.options.transformToRequire,
        "*": "asset-image"
      };

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
