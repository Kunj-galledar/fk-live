<template>
  <section>
    <div class="container">
      <div class="row gy-lg-0 gy-5">
        <div class="col-lg-8">
          <div class="title title-2 text-center">
            <h2>Our Product</h2>
            <h5>Just For You</h5>
          </div>
          <div class="product-wrapper slide-three ratio_asos">
            <vue-slick-carousel v-bind="settings">
              <div v-for="(product, index) in products" :key="index">
                <productBox2 :product="product" />
              </div>
            </vue-slick-carousel>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="title title-2 text-lg-start text-md-center">
            <h2>Most Popular</h2>
            <h5>Our Collection</h5>
          </div>
          <div class="product-slider round-arrow1">
            <vue-slick-carousel v-bind="settings2" ref="brandCarousel">
              <div
                v-for="(i, index) in Math.ceil(products.length / 5)"
                :key="index"
              >
                <div class="row g-3">
                  <div
                    class="col-lg-12 col-md-6 col-12"
                    v-for="(product, index2) in getSlicedProducts(
                      (index + 1) * 5 - 5,
                      (index + 1) * 5
                    )"
                    :key="index2"
                  >
                    <div class="product-image">
                      <a
                        href="javascript:void(0)"
                        @click.prevent="
                          $router.push('/product/product_left_sidebar')
                        "
                      >
                        <img :src="getImageUrl(product.images[0].src)" alt="" />
                      </a>
                      <div class="product-details">
                        <h6 class="font-light">{{ product.feature }}</h6>
                        <a
                          href="javascript:void(0)"
                          @click.prevent="
                            $router.push('/product/product_left_sidebar')
                          "
                          class=""
                        >
                          <h3>{{ product.name }}</h3>
                        </a>
                        <h4 class="font-light mt-1">
                          <del
                            >{{ selectedCurrencySymbol }}{{ product.mrp }}</del
                          >
                          <span class="theme-color"
                            >{{ selectedCurrencySymbol
                            }}{{ product.price }}</span
                          >
                        </h4>
                      </div>
                    </div>
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
import productBox2 from "~/layout/elements/productBox/product-box2.vue";
import { FlowerOurSlider } from "~/static/data/SliderSettingsData";
import { FlowerProductSlider } from "~/static/data/SliderSettingsData";

export default {
  components: { productBox2 },
  props: ["products"],
  data() {
    return {
      settings: FlowerOurSlider,
      settings2: FlowerProductSlider,
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
    getSlicedProducts(start, end) {
      var slicedArray = this.products.slice(start, end);
      return slicedArray;
    },
  },
};
</script>
<style></style>
