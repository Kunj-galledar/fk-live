<template>
  <div class="col-md-6" :class="sliderClass ? sliderClass : ''">
    <div class="degree-section">
      <div class="degree-section">
        <div class="details-image ratio_asos">
          <vue-slick-carousel
            v-bind="sliderSetting"
            ref="c1"
            :asNavFor="$refs.c2"
            :focusOnSelect="true"
          >
            <div v-for="(topImage, index) in productImages" :key="index">
              <div class="product-image-tag">
                <!-- <img
                  :src="getImageUrl(topImage.src)"
                  id="zoom_01"
                  :data-zoom-image="getImageUrl(topImage.src)"
                  class="img-fluid w-100 image_zoom_cls-0"
                  alt=""
                /> -->
                <image-zoom
                  :regular="getImageUrl(topImage.src)"
                  :zoom="getImageUrl(topImage.src)"
                  img-class="img-fluid w-100 image_zoom_cls-0"
                  hover-message="Click once on image"
                >
                </image-zoom>
                <div class="label-tag">
                  <h6>
                    <i class="fas fa-star"></i> 4.8
                    <span class="font-light">120</span>
                  </h6>
                </div>
              </div>
            </div>
          </vue-slick-carousel>
        </div>
      </div>
      <div
        class="image-360 videoplay-box"
        data-bs-toggle="modal"
        data-bs-target="#product-modal"
        @click="toggleVideoModal"
      >
        <img
          src="https://img.icons8.com/ios/50/000000/circled-play.png"
          alt=""
        />
      </div>

      <div class="details-image-option black-slide mt-4 rounded">
        <vue-slick-carousel
          v-bind="settings2"
          ref="c2"
          :asNavFor="$refs.c1"
          :focusOnSelect="true"
        >
          <div v-for="(bottomImage, index2) in productImages" :key="index2">
            <img :src="getImageUrl(bottomImage.src)" class="img-fluid" alt="" />
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import imageZoom from "vue-image-zoomer";

import { mapState } from "vuex";
export default {
  props: ["sliderClass"],
  components: {
    imageZoom,
  },
  data() {
    return {
      changeValue: 0,
      sliderSetting: {},
      settings1: {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settings2: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        autoplay: false,
        // focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
        ],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.sliderSetting = this.settings1;
    }, 100);
  },
  computed: {
    ...mapState({
      productImages: (state) =>
        state.information.data.filter(
          (item) => item.type === "fashionImages"
        )[0].images,
    }),
  },
  methods: {
    getImageUrl(path) {
      return require("assets/images/" + path);
    },
    toggleVideoModal() {
      this.$emit("toggleVideoModal");
    },
  },
};
</script>

<style></style>
