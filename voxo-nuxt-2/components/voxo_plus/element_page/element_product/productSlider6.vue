<template>
  <div class="header-image-contain mb-0 section-b-space">
    <div class="title title1 text-center">
      <h2>Product Style 6</h2>
    </div>

    <div class="contain-image-box overflow-hidden">
      <section class="ratio_asos pt-0">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div
                class="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space"
              >
                <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                  <div v-for="(product, index) in products" :key="index">
                    <productBox1 :product="product" />
                  </div>
                </vue-slick-carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import productBox1 from "~/layout/elements/productBox/product-box1.vue";
export default {
  components: {
    productBox1,
  },
  props: ["products"],
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
};
</script>
<style></style>
