<template>
  <div>
    <section class="ratio_square">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="title title-2 text-center">
              <h2>Instagram Shop</h2>
              <h5 class="text-color">New Collection</h5>
            </div>
            <div class="product-style-1 instagram-2 product-wrapper">
              <div class="insta-slider instagram-wrap">
                <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                  <instagramShopCard
                    v-for="(banner, index) in banners"
                    :key="index"
                    :banner="banner"
                  />
                </vue-slick-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import instagramShopCard from "~/layout/elements/productBox/product-box7.vue";
import buttonAnimated from "~/layout/elements/buttons/animatedButton.vue";
import { InstaSlider } from "~/data/SliderSettingsData";
export default {
  props: ["banners"],
  components: {
    buttonAnimated,
    instagramShopCard,
  },
  data() {
    return {
      settings: InstaSlider,
    };
  },
};
</script>

<style></style>
