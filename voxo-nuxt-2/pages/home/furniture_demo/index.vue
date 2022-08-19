<template>
  <layout1 iconBgColor="theme-bg-color">
    <template v-slot:cookieBar>
      <cookieBar2 />
    </template>

    <homeSlider />
    <banner
      :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].children
      "
    />
    <newArrival :products="products" />
    <dealDayBanner
      :banner="bannersList.filter((item) => item.subtype === 'deal')[0]"
    />
    <carousels />
    <ourProducts :products="products" />
    <hurryUp
      :tabList="
        hurryUpBannersList.filter((item) => item.subtype === 'hurryup')[0].tabs
      "
    />
    <instagramShop
      :banners="
        bannersList.filter((item) => item.subtype === 'instagramshop')[0]
          .children
      "
    />
    <service serviceClasses="service-style-2 section-b-space" />
  </layout1>
</template>

<script>
import { mapState } from "vuex";
import layout1 from "~/layout/layouts/layout1.vue";
import homeSlider from "~/components/home/furnitureDemoComponents/homeSlider.vue";
import banner from "~/components/home/furnitureDemoComponents/banner.vue";
import newArrival from "~/components/home/furnitureDemoComponents/newArrival.vue";
import dealDayBanner from "~/components/home/furnitureDemoComponents/dealDayBanner.vue";
import carousels from "~/components/home/furnitureDemoComponents/carousels.vue";
import ourProducts from "~/components/home/furnitureDemoComponents/ourProducts.vue";
import hurryUp from "~/components/home/furnitureDemoComponents/hurryUp.vue";
import instagramShop from "~/components/home/furnitureDemoComponents/instagramShop.vue";
import service from "~/layout/elements/banners/customerServices.vue";
import cookieBar2 from "~/layout/elements/cookieBars/cookieBar2.vue";
export default {
  head() {
    return {
      title: "Furniture Store",
      link: [
        // { rel: "stylesheet", type: "text/css", href: this.themeCss },
        { rel: "icon", type: "image/x-icon", href: "/4.png" },
      ],
    };
  },
  components: {
    layout1,
    cookieBar2,
    homeSlider,
    banner,
    dealDayBanner,
    newArrival,
    carousels,
    ourProducts,
    hurryUp,
    instagramShop,
    service,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState({
      productsList: (state) =>
        state.products.data.filter((item) => item.type === "furniture"),
      bannersList: (state) =>
        state.banners.data.filter((banner) => banner.type === "furniture"),
      hurryUpBannersList: (state) =>
        state.banners.tabsBanners.filter((item) => item.type === "furniture"),
    }),
  },
  mounted() {
    localStorage.setItem("primaryColor", "#e87316");
    this.$store.dispatch("layout/setPrimaryColor", { primaryColor: "#e87316" });
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo4_dark.css";
    else this.themeCss = "/voxo/css/demo4.css";
  },
  created() {
    this.productsArray();
  },
  methods: {
    productsArray() {
      this.productsList.map((item) => {
        if (item.type === "furniture") {
          this.products.push(item);
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/demo4.scss";
</style>
