<template>
  <layout3 :offerCode="offerCode">
    <homeSlider :slides="slides" />
    <customerServices />
    <topBanner
      :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].banners
      "
    />
    <latestProductsSlider :products="productsList" />
    <newOffersBanner
      :banners="bannersList.filter((item) => item.subtype === 'newoffers')[0]"
    />
    <ourCategory />
    <newArrivalCarousel :products="productsList" />
    <dealDayBanner
      :banner="bannersList.filter((item) => item.subtype === 'dealday')[0]"
    />
    <subscribe />
    <brand />
    <cookieBar1 />
    <template v-slot:footerRight>
      <footerRight2 />
    </template>
  </layout3>
</template>

<script>
import layout3 from "~/layout/layouts/layout3.vue";
import cookieBar1 from "~/layout/elements/cookieBars/cookieBar1.vue";
import footerRight2 from "~/layout/elements/footerElements/footerRight2.vue";
import homeSlider from "~/components/home/shoesDemoComponents/homeSlider.vue";
import topBanner from "~/components/home/shoesDemoComponents/topBanner.vue";
import latestProductsSlider from "~/components/home/shoesDemoComponents/latestProductsSlider.vue";
import newOffersBanner from "~/components/home/shoesDemoComponents/newOffersBanner.vue";
import ourCategory from "~/components/home/shoesDemoComponents/ourCategory.vue";
import newArrivalCarousel from "~/components/home/shoesDemoComponents/newArrivalCarousel.vue";
import dealDayBanner from "~/components/home/shoesDemoComponents/dealDayBanner.vue";
import customerServices from "~/layout/elements/banners/customerServices.vue";
import subscribe from "~/layout/elements/banners/subscribe.vue";
import brand from "~/layout/elements/banners/brand.vue";
export default {
  head() {
    return {
      title: "Shoes Store",
      link: [{ rel: "icon", type: "image/x-icon", href: "/3.png" }],
    };
  },
  components: {
    layout3,
    cookieBar1,
    footerRight2,
    homeSlider,
    customerServices,
    topBanner,
    latestProductsSlider,
    newOffersBanner,
    ourCategory,
    newArrivalCarousel,
    dealDayBanner,
    subscribe,
    brand,
  },
  data() {
    return {
      offerCode: "DEF4526",
    };
  },
  computed: {
    bannersList() {
      return this.$store.state.banners.data.filter(
        (item) => item.type === "shoes"
      );
    },
    productsList() {
      return this.$store.state.products.data.filter(
        (item) => item.type === "shoes"
      );
    },
    slides() {
      return this.$store.state.homeSliders.data.filter(
        (item) => item.type === "shoes"
      )[0].slides;
    },
  },

  created() {
    this.$store.dispatch("layout/setPrimaryColor", { primaryColor: "#7520dd" });
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo3_dark.css";
    else this.themeCss = "/voxo/css/demo3.css";
  },
};
</script>

<style lang="scss">
@import "~assets/scss/demo3.scss";
</style>
