<template>
  <section class="category-section ratio_40 overflow-hidden">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="title title-2 text-center">
            <h2>Our Category</h2>
            <h5>Our collection</h5>
          </div>
        </div>
      </div>
      <div class="row gy-3">
        <div class="col-xxl-2 col-lg-3">
          <div class="category-wrap category-padding theme-bg-color">
            <div>
              <h2 class="light-text">Top</h2>
              <h2>Our Top</h2>
              <span>Categories</span>
            </div>
          </div>
        </div>
        <div class="col-xxl-10 col-lg-9 ps-lg-0">
          <div
            class="category-wrapper category-slider1 white-arrow product-wrapper"
          >
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(category, index) in categories" :key="index">
                <a
                  href="javascript:void(0)"
                  @click.prevent="$router.push('/shop/shop_left_sidebar')"
                  class="category-wrap sliderBackground bg-size"
                  :style="{
                    'background-image': `url(${getImageUrl(category.image)})`,
                  }"
                >
                  <img
                    :src="require('@/assets/images/' + category.image)"
                    class="bg-img d-none"
                    alt="category image"
                  />
                  <div class="category-content category-spacing">
                    <h3 class="theme-color">{{ category.title }}</h3>
                    <span>{{ category.subTitle }}</span>
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
  props: ["categories"],
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  data() {
    return {
      isLoaded: false,
      image: "/_nuxt/assets/images/flower/categories/1.jpg",
      settings: CategoryBannerSlider,
    };
  },
};
</script>

<style></style>
