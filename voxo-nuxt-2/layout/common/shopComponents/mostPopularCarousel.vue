<template>
  <div class="most-popular">
    <div class="title title-2 text-lg-start">
      <h3>Most Popular</h3>
    </div>

    <div class="product-slider border-top round-arrow1">
      <vue-slick-carousel v-bind="settings" ref="brandCarousel">
        <div
          v-for="(i, index) in Math.ceil(productsList.length / 3)"
          :key="index"
        >
          <div class="row g-3">
            <div
              class="col-12"
              v-for="(product, index2) in productsList.slice(
                (index + 1) * 3 - 3,
                (index + 1) * 3
              )"
              :key="'a' + index2"
            >
              <div class="product-image">
                <a
                  @click.prevent="
                    $router.push('/product/product_left_sidebar/' + product.id)
                  "
                >
                  <img :src="getImageUrl(product.images[0].src)" alt="" />
                </a>
                <div class="product-details">
                  <h6 class="font-light">{{ product.size }}</h6>
                  <a
                    @click.prevent="
                      $router.push(
                        '/product/product_left_sidebar/' + product.id
                      )
                    "
                    class=""
                  >
                    <h3>{{ product.name }}</h3>
                  </a>
                  <h4 class="font-light mt-1">
                    <del>{{ selectedCurrencySymbol }}{{ product.mrp }}</del>
                    <span class="theme-color"
                      >{{ selectedCurrencySymbol }}{{ product.price }}</span
                    >
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vue-slick-carousel>

      <div>
        <div class="row g-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "10px",
        infinite: true,
        slidesToShow: 1,
        speed: 500,
      },
    };
  },
  computed: {
    ...mapState({
      productsList: (state) =>
        state.products.data.filter((item) => item.type === "fashion"),
    }),
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
