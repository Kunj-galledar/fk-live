<template>
  <div class="header-image-contain mb-0 section-b-space">
    <div class="title title1 text-center">
      <h2>Product Style 3</h2>
    </div>

    <div class="contain-image-box">
      <section class="ratio_asos pt-0">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="product-wrapper slide-6">
                <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                  <div v-for="(product, index) in products" :key="index">
                    <productBox_2
                      :product="product"
                      productBoxClasses="product-box6"
                      wrapperClasses="hover-image"
                      square
                    />
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
import productBox_2 from "~/layout/elements/productBox/product-box2.vue";
export default {
  props: ["products"],
  components: {
    productBox_2,
  },
  data() {
    return {
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
        slidesToScroll: 2,
        // focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
