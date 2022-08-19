<template>
  <layout4>
    <homeSlider />
    <customerServices />
    <topBanner
      :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].banners
      "
    />
    <freshFruitsCarousel :products="productsList" />
    <productsSection :products="productsList" />
    <bannerWithTimer
      :banner="bannersList.filter((item) => item.subtype === 'dealday')[0]"
    />
    <promoCode />
    <newArrivalSection
      :banners="
        bannersList.filter((item) => item.subtype === 'freshfruits')[0].banners
      "
    />
    <hurryUpBanner
      :bannersList="
        bannersList.filter((item) => item.subtype === 'hurryup')[0].banners
      "
    />
    <newsAndUpdate
      :banners="
        bannersList.filter((item) => item.subtype === 'ourblog')[0].banners
      "
    />
    <subscribe />
    <brand />
    <cookieBar2 cookieBarClasses="veg-cookiebar" />
    <template v-slot:footerRight>
      <footerRight2 />
    </template>
  </layout4>
</template>

<script>
import layout4 from "~/layout/layouts/layout4.vue";
import cookieBar2 from "~/layout/elements/cookieBars/cookieBar2.vue";
import homeSlider from "~/components/home/vegetableDemoComponents/homeSlider.vue";
import topBanner from "~/components/home/vegetableDemoComponents/vegetableBanner.vue";
import freshFruitsCarousel from "~/components/home/vegetableDemoComponents/freshFruitsCarousel.vue";
import productsSection from "~/components/home/vegetableDemoComponents/productsSection.vue";
import bannerWithTimer from "~/components/home/vegetableDemoComponents/bannerWithTimer.vue";
import promoCode from "~/components/home/vegetableDemoComponents/promoCode.vue";
import newArrivalSection from "~/components/home/vegetableDemoComponents/newArrivalSection.vue";
import hurryUpBanner from "~/components/home/vegetableDemoComponents/hurryUpBanner.vue";
import newsAndUpdate from "~/components/home/vegetableDemoComponents/newsAndUpdate.vue";

import subscribe from "~/layout/elements/banners/subscribe.vue";
import brand from "~/layout/elements/banners/brand.vue";
import customerServices from "~/layout/elements/banners/customerServices.vue";
import footerRight2 from "~/layout/elements/footerElements/footerRight2.vue";
export default {
  head() {
    return {
      title: "Vegetable Store",
      link: [
        // { rel: "stylesheet", type: "text/css", href: this.themeCss },
        { rel: "icon", type: "image/x-icon", href: "/6.png" },
      ],
    };
  },
  components: {
    layout4,
    cookieBar2,
    footerRight2,
    homeSlider,
    customerServices,
    topBanner,
    freshFruitsCarousel,
    productsSection,
    bannerWithTimer,
    promoCode,
    newArrivalSection,
    hurryUpBanner,
    newsAndUpdate,
    subscribe,
    brand,
  },
  computed: {
    productsList() {
      return this.$store.state.products.data.filter(
        (item) => item.type === "vegetables"
      );
    },
    bannersList() {
      return this.$store.state.banners.data.filter(
        (item) => item.type === "vegetables"
      );
    },
  },
  created() {
    this.$store.dispatch("layout/setPrimaryColor", { primaryColor: "#51983c" });
    // this.themeCss = "/css/" + localStorage.getItem("layoutMode");
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo6_dark.css";
    else this.themeCss = "/voxo/css/demo6.css";
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/demo6.scss";
</style>
