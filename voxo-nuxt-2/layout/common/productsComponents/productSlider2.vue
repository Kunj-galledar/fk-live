<template>
  <div class="col-md-6">
    <div class="row">
      <div class="col-lg-2">
        <div class="details-image-vertical black-slide rounded">
          <vue-slick-carousel
            v-bind="settingsVertical"
            :style="{ height: '372px' }"
            ref="c2"
            :asNavFor="$refs.c1"
            :slidesToShow="3"
            :focusOnSelect="true"
          >
            <div v-for="(verticalImage, index) in productImages" :key="index">
              <img
                :src="getImageUrl(verticalImage.src)"
                class="img-fluid"
                alt=""
              />
            </div>
          </vue-slick-carousel>
        </div>
      </div>
      <div class="col-lg-10">
        <div class="details-image-1 ratio_asos">
          <vue-slick-carousel
            v-bind="sliderSetting"
            ref="c1"
            :asNavFor="$refs.c2"
            :focusOnSelect="true"
          >
            <div v-for="(image, index2) in productImages" :key="index2">
              <img
                :src="getImageUrl(image.src)"
                id="zoom_01"
                :data-zoom-image="getImageUrl(image.src)"
                class="img-fluid w-100 image_zoom_cls-0"
                alt=""
              />
            </div>
          </vue-slick-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sliderSetting: {},
      settings: {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
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
  },
};
</script>

<style></style>
