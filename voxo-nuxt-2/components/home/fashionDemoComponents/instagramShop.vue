<template>
  <div>
    <section class="ratio_square-2">
      <div class="container-fluid">
        <div class="title title-2 text-center">
          <h2>Instagram Shop</h2>
          <h5 class="text-color">New Collection</h5>
        </div>

        <div class="product-style-1 instagram-2 product-wrapper">
          <div class="insta-slider instagram-wrap">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <productBox5
                v-for="(banner, index) in banners"
                :key="index"
                :banner="banner"
              />
            </vue-slick-carousel>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col">
            <div class="title title-2 text-center">
              <h2>Instagram Shop</h2>
              <h5 class="text-color">New Collection</h5>
            </div>
            <div class="product-style-1 instagram-2 product-wrapper">
              <div class="insta-slider instagram-wrap">
                <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                  <productBox5
                    v-for="(banner, index) in banners"
                    :key="index"
                    :banner="banner"
                  />
                </vue-slick-carousel>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import productBox5 from "~/layout/elements/productBox/product-box5.vue";
import buttonAnimated from "~/layout/elements/buttons/animatedButton.vue";

import { InstaSlider } from "~/data/SliderSettingsData";
export default {
  props: ["banners"],
  components: {
    buttonAnimated,
    productBox5,
  },
  data() {
    return {
      settings: InstaSlider,
    };
  },
};
</script>

<style></style>
