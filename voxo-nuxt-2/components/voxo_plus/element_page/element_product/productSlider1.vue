<template>
  <div class="header-image-contain mb-0 section-b-space">
    <div class="title title1 text-center">
      <h2>Product Style 1</h2>
    </div>

    <div class="contain-image-box overflow-hidden">
      <section class="ratio_asos pt-3">
        <div class="container-fluid p-0">
          <div class="row m-0">
            <div class="col-sm-12 p-0">
              <div class="product-wrapper slide-6">
                <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                  <div v-for="(product, index) in products" :key="index">
                    <productBox2 :product="product" />
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
import productBox2 from "~/layout/elements/productBox/product-box2.vue";
export default {
  components: {
    productBox2,
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
        slidesToShow: 6,
        speed: 500,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3,
            },
          },
        ],
      },
    };
  },
};
</script>
<style></style>
