import * as layoutModule from "./store/modules/layout";
var layoutType = layoutModule.default.state.layoutType;
var boostrapCss = "/voxo/css/bootstrap.min.css";
// console.log("layoutType: " + layoutType);
// if (layoutType == "rtl") {
//   console.log("changing to rtl");
//   boostrapCss = "/voxo/css/bootstrap.rtl.min.css";
// } else {
//   console.log("changing to rtl");
//   boostrapCss = "/voxo/css/bootstrap.min.css";
// }
export default {
  ssr: false,
  subdirectory: "/voxo",

  /*
   ** importing a custom loader. this will overwrite the default loader
  //  */
  // components: true,
  // loading: "~/components/loader/loader.vue",
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: "VOXO Ecommerce | Vuejs shopping theme",
    meta: [{
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Buy VOXO - eCommerce VueJs Nuxt + Admin + Email  + Invoice Template by PixelStrap on ThemeForest.  VOXO – Multi-Purpose Responsive Ecommerce VueJs Nuxt Theme VOXO Ecommerce Theme with Multipurpose demos. ",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
      },

      {
        rel: "stylesheet",
        id: "bootstrap-link",
        class: "nuxt-bootstrap",
        href: boostrapCss,
      },
    ],
    script: [{
        src: "https://checkout.stripe.com/checkout.js",
      },
      {
        src: "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js",
      },
    ],
    // bodyAttrs: {
    //   class: "theme-color2 light ltr",
    // },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["~/assets/scss/style.scss"],
  css: ["~/assets/scss/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: "~/plugins/plugins.js",
    ssr: false,
  }, ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: ["~/components", "~/components/base/nestedcomponent"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  router: {
    middleware: ["auth"],
    base: "/voxo/",
  },
  // fontawesome: {
  //   icons: {
  //     solid: true,
  //     brands: true,
  //   },
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDwPD7ezU7pUUjvbK912KXwrI4vG6A4_MM",
          authDomain: "nuxt-firebase-authentica-7e03e.firebaseapp.com",
          projectId: "nuxt-firebase-authentica-7e03e",
          storageBucket: "nuxt-firebase-authentica-7e03e.appspot.com",
          messagingSenderId: "788072242403",
          appId: "1:788072242403:web:bb2a2ed7f19f3c0d3e79d6",
          measurementId: "G-0KKGKBZLEG",
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false,
            },
            ssr: false,
          }, // Just as example. Can be any other service.
        },
      },
    ],
    "@nuxtjs/axios",
    "nuxt-i18n",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // Or if you have custom options...
    [
      "vue-scrollto/nuxt",
      {
        duration: 300,
      },
    ],
  ],

  i18n: {
    locales: [{
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
          mayur: "mayur",
        },
        fr: {
          welcome: "Bienvenue",
          mayur: "mark",
        },
        es: {
          welcome: "Bienvenido",
          mayur: "mack",
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/voxo/data/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },
};