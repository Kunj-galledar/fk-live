<template>
  <section class="ratio_asos">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="title text-center">
            <h5>Just For You</h5>
            <h2>VR Collection</h2>
          </div>
          <div class="product-wrapper slide-7 product-style-1">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(product, index) in products" :key="index">
                <div class="product-box">
                  <div class="img-wrapper">
                    <div class="top-wishlist">
                      <span class="font-dark-30">{{ product.discount }}%</span>
                      <a
                        href="javascript:void(0)"
                        @click.prevent="$router.push('/page/wishlist')"
                        class="heart-wishlist wishlist"
                        ><i class="far fa-heart"></i
                      ></a>
                    </div>
                    <nuxt-link
                      :to="'/product/product_left_sidebar' + product.id"
                      class="text-center"
                    >
                      <img
                        :src="getImageUrl(product.images[0].src)"
                        class="img-fluid"
                        alt=""
                      />
                    </nuxt-link>
                  </div>
                  <div class="product-details text-center">
                    <h3 class="theme-color">
                      {{ selectedCurrencySymbol }}{{ product.price }}
                      <span class="font-light ml-1"
                        >{{ selectedCurrencySymbol }}{{ product.mrp }}</span
                      >
                    </h3>
                    <a
                      href="javascript:void(0)"
                      @click.prevent="
                        $router.push('/product/product_left_sidebar')
                      "
                      class="font-default"
                    >
                      <h5>{{ product.name }}</h5>
                    </a>
                    <ul class="rating">
                      <li
                        v-for="(stars, index) in product.ratingStars"
                        :key="'A' + index"
                      >
                        <i class="fas fa-star theme-color"></i>
                      </li>
                      <li
                        v-for="(stars, index) in 5 - product.ratingStars"
                        :key="'B' + index"
                      >
                        <i class="fas fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { VRSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ["products"],
  components: {
    // "vue-slick-carouse,
  },
  data() {
    return {
      settings: VRSlider,
    };
  },
  computed: {
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style></style>
