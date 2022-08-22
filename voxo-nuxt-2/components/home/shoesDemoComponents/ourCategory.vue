<template>
  <section class="category-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="title title-2 text-center">
            <h2>Our Category</h2>
            <h5>Our collection</h5>
          </div>
        </div>
      </div>

      <div class="category-wrapper category-slider white-arrow">
        <vue-slick-carousel v-bind="settings" ref="brandCarousel">
          <div v-for="(category, index) in categories" :key="index">
            <div class="category-wrap category-color">
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/shop/shop_category_filter')"
              >
                <img
                  :src="getImageUrl(category.image)"
                  class="img-fluid"
                  alt="category image"
                />
                <div class="category-content category-text t-text">
                  <h3>{{ category.title }}</h3>
                  <span
                    >{{ selectedCurrencySymbol }}{{ category.startingPrice }} -
                    {{ selectedCurrencySymbol }}{{ category.endingPrice }}</span
                  >
                </div>
              </a>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { ShoesCategorySlider } from "~/static/data/SliderSettingsData";
export default {
  data() {
    return {
      settings: ShoesCategorySlider,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories.data.filter(
        (item) => item.type === "shoesCategories"
      )[0].children;
    },
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  mounted() {},
};
</script>

<style></style>
