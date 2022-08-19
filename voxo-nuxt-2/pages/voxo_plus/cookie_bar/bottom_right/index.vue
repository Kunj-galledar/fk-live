<template>
  <layout1>
    <homeSlider />
    <topBanner
      :banners="
        banners.filter((item) => item.type === 'fashionDemoTopBanners')[0]
          .banners
      "
    />
    <!-- Add mobile view side menu -->
    <newArrivalCarousel :products="productsList" />
    <ourCategory :categories="categories" />
    <newOffers
      :banners="
        banners.filter((item) => item.type === 'fashionDemoNewOfferBanners')[0]
      "
    />
    <newArrivals :products="productsList" />
    <dealDayBanner
      :banner="
        banners.filter((item) => item.type === 'fashionHomeDealDayBanner')[0]
      "
    />
    <instagramShop :products="instagramShop" />
    <customerServices />
    <cartSuccessful :showModal="cartModal" />
    <quickViewModal :showModal="quickViewModal" />

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
import customerServices from "~/components/home/fashionDemoComponents/customerServices.vue";
import cartSuccessful from "~/layout/elements/modals/cartSuccessful.vue";
import quickViewModal from "~/layout/elements/modals/quickViewModal.vue";
import cookieBar1 from "~/layout/elements/cookieBars/cookieBar1.vue";

export default {
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
    cartSuccessful,
    quickViewModal,
    cookieBar1,
  },
  data() {
    return {
      themeCss: "demo2",
    };
  },
  head: {
    link: [{ rel: "stylesheet", href: "#" }],
  },
  computed: {
    ...mapState({
      cartModal: (state) => state.cartModal.cartModal,
      quickViewModal: (state) => state.quickViewModal.quickViewModal,
      productsList: (state) =>
        state.products.data.filter((item) => item.type === "fashion"),
      banners: (state) => state.banners.data,
      instagramShop: (state) =>
        state.instagramShop.data.filter(
          (item) => item.type === "fashionDemo"
        )[0].products,
      categories: (state) =>
        state.categories.data.filter((item) => item.type === "fashionDemo")[0]
          .categories,
    }),
  },
  mounted() {},
  methods: {
    switchMode() {
      if (this.themeCss == "demo2") {
        this.themeCss = "demo2_dark";
      } else if (this.themeCss == "demo2_dark") {
        this.themeCss = "demo2";
      }
    },
  },
};
</script>

<!-- <style lang="scss">
@import "~/assets/scss/demo2.scss";
</style> -->
