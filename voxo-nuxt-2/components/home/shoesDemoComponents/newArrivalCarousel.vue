<template>
  <section class="ratio_asos">
    <div class="container">
      <div class="row m-0">
        <div class="col-sm-12 p-0">
          <div class="title title-2 text-center">
            <h2>New Arrival</h2>
            <h5>Our collection</h5>
          </div>
          <div class="product-wrapper slide-5 light-arrow bottom-space">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
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
import { ShoesNewSlider } from "~/static/data/SliderSettingsData";
import productBox2 from "~/layout/elements/productBox/product-box2.vue";
export default {
  props: ["products"],
  components: { productBox2 },
  data() {
    return {
      settings: ShoesNewSlider,
    };
  },
};
</script>

<style></style>
