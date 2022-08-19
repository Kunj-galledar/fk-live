<template>
  <div class="header-image-contain mb-0 section-b-space">
    <div class="title title1 text-center">
      <h2>Product Style 5</h2>
    </div>

    <div class="contain-image-box">
      <section class="ratio_asos pt-0">
        <div class="px-0 container-fluid p-sm-0">
          <div class="row m-0">
            <div class="our-product">
              <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                <div v-for="(product, index) in products" :key="index">
                  <productBox3 :product="product" />
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
import productBox3 from "~/layout/elements/productBox/product-box3.vue";
export default {
  props: ["products"],
  components: {
    productBox3,
  },

  data() {
    return {
      isLoaded: false,

      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
        infinite: true,
        slidesToShow: 5,
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
            breakpoint: 700,
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
  created() {
    this.isLoaded = true;
  },
};
</script>

<style></style>
