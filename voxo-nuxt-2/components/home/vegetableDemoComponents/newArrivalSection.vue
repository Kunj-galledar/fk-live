<template>
  <section class="ratio_asos category-style-3">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 p-0">
          <div class="title text-center">
            <h5>Just For You</h5>
            <h2>Fresh Fruits</h2>
          </div>
        </div>

        <div class="product-wrapper slide-4">
          <vue-slick-carousel v-bind="settings">
            <div v-for="(banner, index) in banners" :key="index">
              <div class="category-image-fruit">
                <img
                  :src="getImageUrl(banner.image)"
                  class="img-fluid"
                  draggable="false"
                  alt=""
                />
                <div class="category-contain">
                  <img
                    :src="getImageUrl(banner.imagefront)"
                    class=""
                    alt=""
                    draggable="false"
                  />
                </div>

                <div class="category-text">
                  <h2>{{ banner.heading }}</h2>
                  <h5>{{ banner.subheading }}</h5>
                </div>
              </div>
            </div>
          </vue-slick-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SliderFruit } from "~/static/data/SliderSettingsData";

export default {
  props: ["banners"],
  data() {
    return {
      settings: SliderFruit,
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
