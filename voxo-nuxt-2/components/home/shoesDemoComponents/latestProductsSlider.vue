<template>
  <section class="ratio_asos overflow-hidden">
    <div class="container-fluid p-sm-0">
      <div class="row m-0">
        <div class="col-sm-12 p-0">
          <div class="title title-2 text-center">
            <h2>Latest Product</h2>
            <h5>Our Collection</h5>
          </div>
          <div class="product-wrapper slide-6">
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
import { ShoesProductSlider } from "~/static/data/SliderSettingsData";
import productBox2 from "~/layout/elements/productBox/product-box2.vue";
export default {
  props: ["products"],
  components: { productBox2 },
  data() {
    return {
      settings: ShoesProductSlider,
    };
  },
};
</script>

<style></style>
