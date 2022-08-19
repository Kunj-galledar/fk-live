<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title-3 text-center">
            <h2>Our News & Update</h2>
            <h5>Our Blog</h5>
          </div>
        </div>
        <div class="slide-3">
          <vue-slick-carousel v-bind="settings" ref="brandCarousel">
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
                  <div class="blog-date">
                    <div class="date-hover">
                      <div>
                        <h2>{{ banner.date }}</h2>
                        <h3>{{ banner.month }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-footer">
                <h2 class="theme-color">{{ banner.title }}</h2>
                <h5 class="theme-color">{{ banner.discount }}</h5>
                <h4>{{ banner.fresh }}</h4>
                <h4 class="brand-name">{{ banner.pricetitle }}</h4>
                <button
                  href="javascript:void(0)"
                  @click.prevent="$router.push('/blog/blog_details')"
                  type="button"
                  class="btn default-theme"
                >
                  {{ banner.btn }} <i class="fas fa-chevron-right ms-2"></i>
                </button>
              </div>
            </div>
          </vue-slick-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FlowerUpdateSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ["banners"],
  data() {
    return {
      settings: FlowerUpdateSlider,
    };
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>
