<template>
  <section class="ratio_asos">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="title text-center">
            <h5>Just For You</h5>
            <h2>Fresh Fruits</h2>
          </div>
          <div class="product-wrapper slide-6">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(product, index) in products" :key="index">
                <productBox_2
                  :product="product"
                  productBoxClasses="product-box6"
                  wrapperClasses="hover-image"
                  square
                />
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FreshFruitsSlider } from "~/static/data/SliderSettingsData";
import productBox_2 from "~/layout/elements/productBox/product-box2.vue";
export default {
  props: ["products"],
  components: {
    productBox_2,
  },
  data() {
    return {
      settings: FreshFruitsSlider,
    };
  },
};
</script>

<style></style>
