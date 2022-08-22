<template>
  <layout3 :offerCode="offerCode">
    <homeSlider :slides="slides" />
    <customerServices />
    <topBanner
      :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].banners
      "
    />
    <ourCollectionCarousel :products="productsList" />
    <bannerWithTimer
      :banner="bannersList.filter((item) => item.subtype === 'dealday')[0]"
    />
    <vrCollectionCarousel
      :products="productsList.filter((item) => item.category === 'vr')"
    />
    <hurryUpBanner
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
    <brandCarousel />
    <template v-slot:footerRight>
      <footerRight1 />
    </template>
    <cookieBar1 cookieBarClasses="cookiebar-left-section" />
  </layout3>
</template>

<script>
import layout3 from "~/layout/layouts/layout3.vue";
import cookieBar1 from "~/layout/elements/cookieBars/cookieBar1.vue";
import homeSlider from "~/components/home/electronicDemoComponents/homeSlider.vue";
import customerServices from "~/layout/elements/banners/customerServices.vue";
import topBanner from "~/components/home/electronicDemoComponents/electronicBanner.vue";
import ourCollectionCarousel from "~/components/home/electronicDemoComponents/ourCollectionCarousel.vue";
import bannerWithTimer from "~/components/home/electronicDemoComponents/bannerWithTimer.vue";
import vrCollectionCarousel from "~/components/home/electronicDemoComponents/vrCollectionCarousel.vue";
import instagramShop from "~/components/home/electronicDemoComponents/instagramShop.vue";
import hurryUpBanner from "~/components/home/electronicDemoComponents/hurryUpBanner.vue";
import brandCarousel from "~/layout/elements/banners/brand.vue";
import footerRight1 from "~/layout/elements/footerElements/footerRight1.vue";

export default {
  head() {
    return {
      title: "Electronic Store",
      link: [
        // { rel: "stylesheet", type: "text/css", href: this.themeCss },
        { rel: "icon", type: "image/x-icon", href: "/1.png" },
      ],
    };
  },
  components: {
    layout3,
    cookieBar1,
    homeSlider,
    customerServices,
    topBanner,
    ourCollectionCarousel,
    bannerWithTimer,
    vrCollectionCarousel,
    hurryUpBanner,
    instagramShop,
    brandCarousel,
    footerRight1,
  },
  data() {
    return {
      offerCode: "DEF4526",
      themeCss: "/voxo/css/demo1.css",
    };
  },

  computed: {
    productsList() {
      return this.$store.state.products.data.filter(
        (item) => item.type === "electronic"
      );
    },
    slides() {
      return this.$store.state.homeSliders.data.filter(
        (item) => item.type === "electronic"
      )[0].slides;
    },
    hurryUpBannersList() {
      return this.$store.state.banners.tabsBanners.filter(
        (item) => item.type === "electronic"
      );
    },
    bannersList() {
      return this.$store.state.banners.data.filter(
        (item) => item.type === "electronic"
      );
    },
  },
  created() {
    this.$store.dispatch("layout/setPrimaryColor", { primaryColor: "#0163d2" });
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo1_dark.css";
    else this.themeCss = "/voxo/css/demo1.css";
  },
  // mounted() {
  //   window.scrollTo({ behaviour: "smooth", top: 0 });
  // },
};
</script>

<style lang="scss">
@import "~assets/scss/demo1.scss";
</style>
