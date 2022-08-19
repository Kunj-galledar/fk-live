<template>
  <layout1>
    <template v-slot:cookieBar>
      <cookieBar2 />
    </template>

    <homeSlider />
    <banner />
    <newArrival :products="products" />
    <dealDayBanner />
    <carousels />
    <ourProducts :products="products" />
    <hurryUp />
    <instagramShop />
    <service />
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
      productsList: (state) => state.products.data,
    }),
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

<!-- <style lang="scss">
@import "~assets/scss/demo4.scss";
</style> -->
