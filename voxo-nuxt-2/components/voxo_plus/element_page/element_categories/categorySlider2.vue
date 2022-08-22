<template>
  <div class="col-12">
    <div class="header-image-contain">
      <div class="title title1 text-center">
        <h2>Category Style 2</h2>
      </div>

      <div class="contain-image-box">
        <section class="ratio_asos pt-3 category-style-3">
          <div class="container">
            <div class="row">
              <div class="product-wrapper slide-4">
                <vue-slick-carousel v-bind="settings">
                  <div v-for="(banner, index) in banners" :key="index">
                    <div class="category-image-fruit">
                      <img
                        :src="getImageUrl(banner.image)"
                        class="img-fluid"
                        alt=""
                      />
                      <div class="category-contain">
                        <img
                          :src="getImageUrl(banner.imagefront)"
                          class=""
                          alt=""
                        />
                      </div>

                      <div class="category-text">
                        <h2>{{ banner.heading }}</h2>
                        <h5>{{ banner.subheading }}</h5>
                      </div>
                    </div>
                  </div>
                </vue-slick-carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["banners"],
  data() {
    return {
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
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
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style></style>
