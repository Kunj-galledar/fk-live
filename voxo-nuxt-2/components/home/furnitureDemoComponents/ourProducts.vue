<template>
  <section class="ratio_asos">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="title-3 text-center">
            <h2>Our Product</h2>
            <h5 class="theme-color">Our Collection</h5>
          </div>
        </div>

        <div class="our-product">
          <vue-slick-carousel v-bind="settings" ref="brandCarousel">
            <div v-for="(product, index) in products" :key="index">
              <productBox3 :product="product" />
            </div>
          </vue-slick-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productBox3 from "~/layout/elements/productBox/product-box3.vue";
import { FurnitureProductSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ["products"],
  components: {
    productBox3,
  },
  data() {
    return {
      settings: FurnitureProductSlider,
    };
  },
};
</script>

<style></style>
