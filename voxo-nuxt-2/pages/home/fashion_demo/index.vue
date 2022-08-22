<template>
  <layout1>
    <homeSlider />
    <topBanner
      :banners="
        banners.filter((item) => item.subtype === 'topbanner')[0].children
      "
    />
    <newArrivalCarousel :products="productsList" />
    <ourCategory :categories="categories" :title="true" />
    <newOffers
      :banners="banners.filter((item) => item.subtype === 'newoffer')[0]"
    />
    <newArrivals :products="productsList" />
    <dealDayBanner
      :banner="banners.filter((item) => item.subtype === 'dealday')[0]"
    />
    <instagramShop
      :banners="
        banners.filter((item) => item.subtype === 'instagramshop')[0].children
      "
    />
    <customerServices :serviceClasses="'service-style-2 section-b-space'" />
    <template v-slot:cookieBar>
      <cookieBar1 />
    </template>
  </layout1>
</template>

<script>
import { mapState } from "vuex";
import layout1 from "~/layout/layouts/layout1.vue";
import homeSlider from "~/components/home/fashionDemoComponents/homeSlider.vue";
import topBanner from "~/components/home/fashionDemoComponents/topBanner.vue";
import newArrivalCarousel from "~/components/home/fashionDemoComponents/newArrivalCarousel.vue";
import ourCategory from "~/components/home/fashionDemoComponents/ourCategory.vue";
import newOffers from "~/components/home/fashionDemoComponents/newOffers.vue";
import newArrivals from "~/components/home/fashionDemoComponents/newArrivals.vue";
import dealDayBanner from "~/components/home/fashionDemoComponents/dealDayBanner.vue";
import instagramShop from "~/components/home/fashionDemoComponents/instagramShop.vue";
import customerServices from "~/layout/elements/banners/customerServices.vue";
import cookieBar1 from "~/layout/elements/cookieBars/cookieBar1.vue";

export default {
  // head: {
  //   title: "Fashion Store",
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/2.png" }],
  // },
  components: {
    layout1,
    homeSlider,
    topBanner,
    newArrivalCarousel,
    ourCategory,
    newOffers,
    newArrivals,
    dealDayBanner,
    instagramShop,
    customerServices,
    cookieBar1,
  },

  data() {
    return {
      values: [1, 2, 3, 4, 5],
      themeCss: "/demo2.css",
    };
  },

  head() {
    return {
      title: "Fashion Store",
      htmlAttrs: {
        dir: "ltr", // it sets the language English
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/2.png" }],
    };
  },
  computed: {
    ...mapState({
      productsList: (state) =>
        state.products.data.filter((item) => item.type === "fashion"),
      banners: (state) =>
        state.banners.data.filter((item) => item.type === "fashion"),
      categories: (state) =>
        state.categories.data.filter((item) => item.type === "fashionDemo")[0]
          .categories,
    }),
  },
  mounted() {
    this.$store.dispatch("products/fetchProductsData");
    this.$store.dispatch("layout/setPrimaryColor", { primaryColor: "#e22454" });
  },
  created() {
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo2_dark.css";
    else this.themeCss = "/voxo/css/demo2.css";
  },
  methods: {
    switchMode(layoutMode) {
      localStorage.setItem("layoutMode", layoutMode);
      this.$router.push("/redirect/redirectPage");
    },
  },
  beforeUnmount() {
    document
      .getElementById("bootstrap-link")
      .setAttribute("href", "/voxo/css/bootstrap.min.css");
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/demo2.scss";
</style>
