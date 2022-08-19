<template>
  <layout3 :offerCode="offerCode">
    <homeSlider />
    <customerServices />
    <electronicBanner />
    <ourCollectionCarousel :products="productsList" />
    <bannerWithTimer />
    <vrCollectionCarousel />
    <hurryUpBanner />
    <instagramShop />
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
import electronicBanner from "~/components/home/electronicDemoComponents/electronicBanner.vue";
import ourCollectionCarousel from "~/components/home/electronicDemoComponents/ourCollectionCarousel.vue";
import bannerWithTimer from "~/components/home/electronicDemoComponents/bannerWithTimer.vue";
import vrCollectionCarousel from "~/components/home/electronicDemoComponents/vrCollectionCarousel.vue";
import instagramShop from "~/components/home/electronicDemoComponents/instagramShop.vue";
import hurryUpBanner from "~/components/home/electronicDemoComponents/hurryUpBanner.vue";
import brandCarousel from "~/layout/elements/banners/brand.vue";
import footerRight1 from "~/layout/elements/footerElements/footerRight1.vue";

export default {
  components: {
    layout3,
    cookieBar1,
    homeSlider,
    customerServices,
    electronicBanner,
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
    };
  },
  computed: {
    productsList() {
      return this.$store.state.products.data.filter(
        (item) => item.type === "electronic"
      );
    },
  },
};
</script>

<!-- <style lang="scss">
@import "~assets/scss/demo1.scss";
</style> -->
