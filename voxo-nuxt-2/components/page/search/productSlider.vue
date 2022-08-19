<template>
  <section class="ratio_asos section-b-space">
    <div class="container">
      <div
        class="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space"
      >
        <VueSlickCarousel v-bind="settings">
          <div v-for="(product, index) in productsList" :key="index">
            <productBox1 :product="product" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
import { mapState } from "vuex";
export default {
  components: {
    productBox1,
  },
  data() {
    return {
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",

        // focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      productsList: (state) =>
        state.products.data.filter((item) => item.type === "fashion"),
    }),
  },
};
</script>

<style></style>
