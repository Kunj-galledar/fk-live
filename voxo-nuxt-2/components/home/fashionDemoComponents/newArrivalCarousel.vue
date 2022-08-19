<template>
  <section class="ratio_asos">
    <div class="container">
      <div class="row m-0">
        <div class="col-sm-12 p-0">
          <div class="title title-2 text-center">
            <h2>New Arrival</h2>
            <h5 class="text-color">Our collection</h5>
          </div>
          <div
            class="
              product-wrapper product-style-2
              slide-4
              p-0
              light-arrow
              bottom-space
            "
          >
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(product, index) in products" :key="index">
                <productBox1 :product="product" />
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
import { NewArrivalSlider } from "~/data/SliderSettingsData";
export default {
  components: {
    productBox1,
  },
  props: ["products"],
  data() {
    return {
      settings: NewArrivalSlider,
    };
  },
};
</script>
<style>
</style>
