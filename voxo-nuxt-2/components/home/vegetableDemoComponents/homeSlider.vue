<template>
  <section class="pt-0 poster-section-6">
    <div class="poster-image slider-for custome-arrow classic-arrow-1">
      <vue-slick-carousel
        v-bind="sliderSetting"
        ref="c1"
        :asNavFor="$refs.c2"
        :focusOnSelect="true"
      >
        <div v-for="(backgroundImage, index) in backgroundImages" :key="index">
          <img
            :src="getImageUrl(backgroundImage)"
            class="img-fluid"
            alt=""
            draggable="false"
          />
        </div>
      </vue-slick-carousel>
    </div>

    <div class="background-circle">
      <img
        src="~assets/images/vegetable/poster/circle.png"
        class="img-fluid"
        alt=""
      />
    </div>

    <div class="slider-nav image-show">
      <vue-slick-carousel
        v-bind="settingsVertical"
        ref="c2"
        :style="{ height: '372px' }"
        :asNavFor="$refs.c1"
        :slidesToShow="3"
        :focusOnSelect="true"
      >
        <div v-for="(image, index) in images" :key="'A' + index">
          <div class="poster-img">
            <img :src="getImageUrl(image)" class="img-fluid" alt="" />
            <div class="overlay-color">
              <i class="fas fa-plus theme-color"></i>
            </div>
          </div>
        </div>
      </vue-slick-carousel>
    </div>

    <div class="left-side-contain">
      <div class="banner-left">
        <h4>Sale <span class="theme-color">35% Off</span></h4>
        <h1>Fresh & Tasty <span>Corn Cobe</span></h1>
        <p>BUY ONE GET ONE <span class="theme-color">FREE</span></p>
        <h2>
          $79.00 <span class="theme-color"><del>$65.00</del></span>
        </h2>
        <p class="poster-details">
          Lorem Ipsum is simply dummy text of typesetting.
        </p>
        <div class="banner-btn-grup">
          <button
            href="javascript:void(0)"
            @click.prevent="$router.push('/shop/shop_left_sidebar')"
            type="button"
            class="btn btn-solid-default"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>

    <div class="right-side-contain">
      <div class="social-image">
        <a href="https://www.facebook.com/" target="new">
          <h6>Facebook</h6>
        </a>
      </div>

      <div class="social-image">
        <a href="https://www.instagram.com/" target="new">
          <h6>Instagram</h6>
        </a>
      </div>

      <div class="social-image">
        <a href="https://twitter.com/" target="new">
          <h6>Twitter</h6>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { VegetableMainSlider } from "~/static/data/SliderSettingsData";
import { VegetableNavSlider } from "~/static/data/SliderSettingsData";

export default {
  data() {
    return {
      backgroundImages: [
        "vegetable/poster/1.png",
        "vegetable/poster/2.png",
        "vegetable/poster/3.png",
      ],
      images: [
        "vegetable/poster/t1.jpg",
        "vegetable/poster/t2.jpg",
        "vegetable/poster/t3.jpg",
      ],
      sliderSetting: {},
      settings: VegetableMainSlider,
      settingsVertical: VegetableNavSlider,
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
