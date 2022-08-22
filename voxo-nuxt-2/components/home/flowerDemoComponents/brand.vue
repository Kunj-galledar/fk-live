<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="brand-slider">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(image, index) in images" :key="index">
                <div class="brand-image">
                  <img
                    :src="'/_nuxt/assets/images/brand/' + image"
                    class="img-fluid"
                    alt="brand logo"
                  />
                </div>
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FlowerBrandSlider } from "~/static/data/SliderSettingsData";

export default {
  data() {
    return {
      images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "4.png"],
      settings: FlowerBrandSlider,
    };
  },
};
</script>

<style></style>
