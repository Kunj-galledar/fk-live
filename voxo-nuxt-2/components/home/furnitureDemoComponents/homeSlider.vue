<template>
  <section class="poster-section">
    <div class="poster-image slider-for custome-arrow classic-arrow">
      <vue-slick-carousel
        ref="c1"
        v-bind="settings"
        :asNavFor="$refs.c2"
        :focusOnSelect="true"
      >
        <template v-slot:prevArrow>
          <div class="custom-arrow next">
            <span>Next</span><i class="fas fa-chevron-right ms-3"></i>
          </div>
        </template>
        <div v-for="(image, index) in images" :key="index">
          <img
            :src="getImageUrl(image)"
            class="img-fluid"
            alt=""
            draggable="false"
          />
        </div>
      </vue-slick-carousel>
    </div>
    <div class="slider-nav image-show">
      <vue-slick-carousel
        v-bind="settings2"
        :style="{ height: '372px' }"
        ref="c2"
        :asNavFor="$refs.c1"
        :slidesToShow="3"
        :focusOnSelect="true"
      >
        <div
          v-for="(backgroundImage, index) in backgroundImages"
          :key="'A' + index"
        >
          <div class="poster-img">
            <img
              :src="getImageUrl(backgroundImage)"
              class="img-fluid"
              :alt="backgroundImage"
              draggable="false"
            />
            <div class="overlay-color">
              <i class="fas fa-plus theme-color"></i>
            </div>
          </div>
        </div>
      </vue-slick-carousel>
    </div>

    <div class="left-side-contain justify-content-sm-center">
      <div class="banner-left">
        <h4>Sale <span class="theme-color">35% Off</span></h4>
        <h1>New Latest <span>Furniture</span></h1>
        <p>BUY ONE GET ONE <span class="theme-color">FREE</span></p>
        <h2>
          $79.00 <span class="theme-color"><del>$65.00</del></span>
        </h2>
        <p class="poster-details mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>

    <div class="right-side-contain">
      <div class="social-image">
        <h6>Facebook</h6>
      </div>

      <div class="social-image">
        <h6>Instagram</h6>
      </div>

      <div class="social-image">
        <h6>Twitter</h6>
      </div>
    </div>
  </section>
</template>

<script>
import { MainHomeSlider } from "~/static/data/SliderSettingsData";
export default {
  data() {
    return {
      images: [
        "furniture-images/poster/1.png",
        "furniture-images/poster/2.png",
        "furniture-images/poster/3.png",
      ],
      backgroundImages: [
        "furniture-images/poster/t1.jpg",
        "furniture-images/poster/t2.jpg",
        "furniture-images/poster/t3.jpg",
      ],
      settings: {},
      sliderSetting: MainHomeSlider,
      settings2: {
        centerMode: true,
        centerPadding: "30px",
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        arrows: true,
      },
    };
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  mounted() {
    setTimeout(() => {
      this.settings = this.sliderSetting;
    }, 1000);
  },
};
</script>

<style></style>
