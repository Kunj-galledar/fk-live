<template>
  <section class="pt-0 poster-section-5">
    <div class="poster-image slider-for custome-arrow classic-arrow-1">
      <vue-slick-carousel
        v-bind="sliderSetting"
        ref="c1"
        :asNavFor="$refs.c2"
        :focusOnSelect="true"
      >
        <div v-for="(backgroundImage, index) in backgroundImages" :key="index">
          <img :src="getImageUrl(backgroundImage)" class="img-fluid" alt="" />
        </div>
      </vue-slick-carousel>
    </div>
    <div class="background-circle">
      <img
        src="~assets/images/flower/back-cirlce.png"
        class="img-fluid"
        alt=""
      />
    </div>

    <div class="flower-image">
      <img src="~assets/images/flower/poster/a1.png" class="flower-1" alt="" />
      <img src="~assets/images/flower/poster/a1.png" class="flower-2" alt="" />
    </div>
    <div class="slider-nav image-show">
      <vue-slick-carousel
        v-bind="settingsVertical"
        :style="{ height: '372px' }"
        ref="c2"
        :asNavFor="$refs.c1"
        :slidesToShow="2"
        :focusOnSelect="true"
      >
        <div v-for="(image, index) in images" :key="'A' + index">
          <div class="poster-img">
            <img :src="getImageUrl(image)" class="img-fluid" alt="" />
            <div class="overlay-color">
              <p class="theme-color">+</p>
            </div>
          </div>
        </div>
      </vue-slick-carousel>
    </div>

    <div class="left-side-contain">
      <div class="banner-left mb-0">
        <h4>Sale <span class="theme-color">35% Off</span></h4>
        <h1>New Fresh <span>Bookey</span></h1>
        <p>BUY ONE GET ONE <span class="theme-color">FREE</span></p>
        <h2>
          $79.00 <span class="theme-color"><del>$65.00</del></span>
        </h2>
        <p class="poster-details">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { MainHomeSlider } from "~/data/SliderSettingsData";
export default {
  data() {
    return {
      backgroundImages: ["flower/poster/1.png", "flower/poster/2.png"],
      images: ["flower/poster/t1.jpg", "flower/poster/t2.jpg"],
      sliderSetting: {},
      settings: MainHomeSlider,
      settingsVertical: {
        infinite: true,
        centerMode: true,
        arrows: false,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.sliderSetting = this.settings;
    }, 1000);
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style></style>
