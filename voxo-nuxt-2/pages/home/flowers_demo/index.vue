<template>
  <layout2>
    <homeSlider />
    <topBanner
      :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].children
      "
    />
    <latest-products :products="products" />
    <ourCategory :categories="categories" />
    <newOffers
      :banner="bannersList.filter((item) => item.subtype === 'newoffer')[0]"
    />
    <ourProducts :products="products" />
    <bannerWithTimer
      :banner="bannersList.filter((item) => item.subtype === 'deal')[0]"
    />
    <newsAndUpdate
      :banners="
        bannersList.filter((item) => item.subtype === 'newsandupdate')[0]
          .children
      "
    />
    <subscribe />
    <brand />
    <!-- <cookieBar /> -->
  </layout2>
</template>

<script>
import { mapState } from "vuex";
import layout2 from "~/layout/layouts/layout2.vue";
import homeSlider from "~/components/home/flowerDemoComponents/homeSlider.vue";
import topBanner from "~/components/home/flowerDemoComponents/topBanner.vue";
import LatestProducts from "~/components/home/flowerDemoComponents/latestProducts.vue";
import ourCategory from "~/components/home/flowerDemoComponents/ourCategory.vue";
import newOffers from "~/components/home/flowerDemoComponents/newOffers.vue";
import ourProducts from "~/components/home/flowerDemoComponents/ourProducts.vue";
import bannerWithTimer from "~/components/home/flowerDemoComponents/bannerWithTimer.vue";
import newsAndUpdate from "~/components/home/flowerDemoComponents/newsAndUpdate.vue";
import subscribe from "~/components/home/flowerDemoComponents/subscribe.vue";
import brand from "~/layout/elements/banners/brand.vue";
export default {
  head() {
    return {
      title: "Flower Store",
      link: [
        // { rel: "stylesheet", type: "text/css", href: this.themeCss },
        { rel: "icon", type: "image/x-icon", href: "/5.png" },
      ],
    };
  },
  components: {
    layout2,
    homeSlider,
    topBanner,
    LatestProducts,
    ourCategory,
    newOffers,
    ourProducts,
    bannerWithTimer,
    newsAndUpdate,
    subscribe,
    brand,
    topBanner,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.$store.dispatch("layout/setPrimaryColor", { primaryColor: "#df4246" });
    this.productsArray();
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo5_dark.css";
    else this.themeCss = "/voxo/css/demo5.css";
  },
  computed: {
    ...mapState({
      productsList: (state) => state.products.data,
      bannersList: (state) =>
        state.banners.data.filter((item) => item.type === "flower"),
      categories: (state) =>
        state.categories.data.filter((item) => item.type === "flowers")[0]
          .categories,
    }),
  },
  methods: {
    productsArray() {
      this.productsList.map((item) => {
        if (item.type === "flower") {
          this.products.push(item);
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/demo5.scss";
</style>
