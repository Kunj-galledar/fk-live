<template>
  <section class="ratio_asos section-b-space overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="mb-lg-4 mb-3">Customers Also Bought These</h2>
          <div
            class="
              product-wrapper product-style-2
              slide-4
              p-0
              light-arrow
              bottom-space
            "
          >
            <vue-slick-carousel v-bind="settings">
              <div v-for="(product, index) in productsList" :key="index">
                <productBox1 :product="product" />
              </div>
            </vue-slick-carousel>
          </div>
        </div>
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
