<template>
  <layout4>
    <homeSlider />
    <customerServices />
    <vegetableBanner />
    <freshFruitsCarousel :products="productsList" />
    <productsSection :products="productsList" />
    <bannerWithTimer />
    <promoCode />
    <newArrivalSection />
    <hurryUpBanner :banners="bannersList" />
    <newsAndUpdate />
    <subscribe />
    <brand />
    <cookieBar2 />
    <template v-slot:footerRight>
      <footerRight2 />
    </template>
  </layout4>
</template>

<script>
import layout4 from "~/layout/layouts/layout4.vue";
import cookieBar2 from "~/layout/elements/cookieBars/cookieBar2.vue";
import homeSlider from "~/components/home/vegetableDemoComponents/homeSlider.vue";
import vegetableBanner from "~/components/home/vegetableDemoComponents/vegetableBanner.vue";
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
  components: {
    layout4,
    cookieBar2,
    footerRight2,
    homeSlider,
    customerServices,
    vegetableBanner,
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
      return this.$store.state.information.data.filter(
        (item) => item.type === "vegetablesHurryUpCards"
      )[0];
    },
  },
  created() {
    this.$router.push("/home/vegetables_demo");
  },
};
</script>

<!-- <style lang="scss">
@import "~/assets/scss/demo6.scss";
</style> -->
