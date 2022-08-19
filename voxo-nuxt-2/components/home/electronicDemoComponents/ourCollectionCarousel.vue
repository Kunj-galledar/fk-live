<template>
  <section class="ratio_asos">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="title text-center">
            <h5>Just For You</h5>
            <h2>Our Collection</h2>
          </div>
          <div class="product-wrapper slide-6">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div
                v-for="(product, index) in products.slice(0, 7)"
                :key="index"
              >
                <productBox_2 :product="product" />
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productBox_2 from "~/layout/elements/productBox/product-box2.vue";
import { ElectronicProductSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ["products"],
  components: {
    productBox_2,
  },
  data() {
    return {
      settings: ElectronicProductSlider,
    };
  },
};
</script>

<style></style>
