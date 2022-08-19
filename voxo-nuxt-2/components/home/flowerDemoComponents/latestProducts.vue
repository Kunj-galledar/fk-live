<template>
  <section class="ratio_asos">
    <div class="container p-sm-0">
      <div class="row m-0">
        <div class="col-sm-12 p-0">
          <div class="title title-2 text-center">
            <h2>Latest Product</h2>
            <h5>Our Collection</h5>
          </div>
          <div class="product-wrapper remove-padding slide-5_1">
            <vue-slick-carousel v-bind="settings">
              <div v-for="(product, index) in products" :key="index">
                <productBox2 :product="product" />
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productBox2 from "~/layout/elements/productBox/product-box2.vue";
import { FlowerLatestSlider } from "~/static/data/SliderSettingsData";
export default {
  components: {
    productBox2,
  },
  props: ["products"],
  data() {
    return {
      settings: FlowerLatestSlider,
    };
  },
};
</script>

<style></style>
