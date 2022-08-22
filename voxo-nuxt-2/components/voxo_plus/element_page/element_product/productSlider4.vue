<template>
  <div class="header-image-contain mb-0 section-b-space">
    <div class="title title1 text-center">
      <h2>Product Style 4</h2>
    </div>

    <div class="contain-image-box">
      <section class="ratio_90 pt-0">
        <div class="container">
          <div class="row">
            <div class="product-wrapper slide-6">
              <vue-slick-carousel v-bind="settings">
                <div v-for="(product, index) in products" :key="index">
                  <productBox6 :product="product" />
                </div>
              </vue-slick-carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import productBox6 from "~/layout/elements/productBox/product-box6.vue";

export default {
  props: ["products"],
  components: {
    productBox6,
  },
  data() {
    return {
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",

        // focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        dots: false,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
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
};
</script>

<style></style>
