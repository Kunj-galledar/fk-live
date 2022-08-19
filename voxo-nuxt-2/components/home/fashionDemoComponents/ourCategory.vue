<template>
  <section
    class="category-section ratio_40 overflow-hidden"
    :class="categorySectionClasses"
  >
    <div class="container-fluid">
      <div class="title title-2 text-center">
        <h2>Our Category</h2>
        <h5 class="text-color">Our collection</h5>
      </div>
      <!-- <div class="row" v-if="title">
        <div class="col-lg-12">
          <div class="title title-2 text-center">
            <h2>Our Category</h2>
            <h5 class="text-color">Our collection</h5>
          </div>
        </div>
      </div> -->
      <div class="row gy-3">
        <div class="col-xxl-2 col-lg-3">
          <div
            class="category-wrap category-padding category-block theme-bg-color"
          >
            <div>
              <h2 class="light-text">Top</h2>
              <h2 class="top-spacing">Our Top</h2>
              <span>Categories</span>
            </div>
          </div>
        </div>
        <div class="col-xxl-10 col-lg-9">
          <div
            class="category-wrapper category-slider1 white-arrow category-arrow"
          >
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(category, index) in categories" :key="index">
                <a
                  href="javascript:void(0)"
                  @click.prevent="$router.push('/shop/shop_left_sidebar')"
                  class="
                    category-wrap category-padding
                    sliderBackground
                    bg-size
                  "
                  :style="{
                    'background-image': `url(${getImageUrl(category.image)})`,
                  }"
                >
                  <img
                    :src="getImageUrl(category.image)"
                    class="bg-img d-none"
                    alt="category image"
                  />
                  <div class="category-content category-text-1">
                    <h3 class="theme-color">{{ category.title }}</h3>
                    <span class="text-dark">{{ category.subTitle }}</span>
                  </div>
                </a>
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CategoryBannerSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ["categories", "categorySectionClasses", "title"],
  data() {
    return {
      settings: CategoryBannerSlider,
    };
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style></style>
