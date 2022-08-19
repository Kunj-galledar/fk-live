<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="slide-7-1 product-wrapper slick-lg-space">
            <vue-slick-carousel v-bind="settings">
              <div v-for="(card, index) in categories" :key="index">
                <div class="image-slider">
                  <div class="image-product">
                    <img
                      :src="require(`assets/images/${card.image}`)"
                      class="w-100"
                      alt=""
                    />
                    <div class="image-contain">
                      <h5>{{ card.category }}</h5>
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
import { categoryFilterSlider } from "~/static/data/SliderSettingsData";
export default {
  computed: {
    categories() {
      return this.$store.state.categories.data.filter(
        (item) => item.type === "topCategoryFilter"
      )[0].children;
    },
  },
  data() {
    return {
      settings: categoryFilterSlider,
    };
  },
};
</script>

<style lang="scss" scoped></style>
