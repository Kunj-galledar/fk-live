<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-3 text-center mt-0">
            <h2>Our News & Update</h2>
            <h5 class="theme-color">Our Blog</h5>
          </div>
        </div>

        <div class="product-wrapper slide-3">
          <vue-slick-carousel v-bind="settings">
            <div
              class="product-style-4 ratio2_3"
              v-for="(banner, index) in banners"
              :key="index"
            >
              <div class="blog-header">
                <div
                  class="blog-image sliderBackground bg-size"
                  :style="{
                    'background-image': `url(${getImageUrl(banner.image)})`,
                  }"
                >
                  <img
                    :src="getImageUrl(banner.image)"
                    class="img-fluid bg-img d-none"
                    alt=""
                  />
                  <div class="blog-date gradient-color">
                    <div class="date-hover">
                      <div>
                        <h2>{{ banner.day }}</h2>
                        <h3>{{ banner.month }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-footer">
                <h2 class="theme-color">{{ banner.watermark }}</h2>
                <h5 class="theme-color">{{ banner.title }}</h5>
                <h4>{{ banner.headingtop }}</h4>
                <h4 class="brand-name">{{ banner.headingbottom }}</h4>
                <nuxt-link
                  to="/shop/shop_canvas_filter"
                  type="button"
                  class="btn default-theme"
                >
                  Read More <i class="fas fa-chevron-right"></i>
                </nuxt-link>
              </div>
            </div>
          </vue-slick-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BottomBanner } from "~/static/data/SliderSettingsData";
export default {
  props: ["banners"],
  data() {
    return {
      settings: BottomBanner,
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
