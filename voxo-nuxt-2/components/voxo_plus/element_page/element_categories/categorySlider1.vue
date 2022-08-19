<template>
  <div class="col-12">
    <div class="header-image-contain">
      <div class="title title1 text-center">
        <h2>Category Style 1</h2>
      </div>

      <div class="contain-image-box overflow-hidden">
        <section class="category-section ratio_40 pt-3">
          <div class="container-fluid">
            <div class="row gy-3">
              <div class="col-xxl-2 col-lg-3">
                <div
                  class="category-wrap category-padding category-block theme-bg-color"
                >
                  <div>
                    <h2 class="light-text">Top</h2>
                    <h2 class="top-spacing">Our Top</h2>
                    <span>Categories</span>
                  </div>
                </div>
              </div>
              <div class="col-xxl-10 col-lg-9">
                <div
                  class="category-wrapper category-slider1 white-arrow category-arrow"
                >
                  <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                    <div v-for="(category, index) in categories" :key="index">
                      <a
                        href="javascript:void(0)"
                        @click.prevent="$router.push('/shop/shop_left_sidebar')"
                        class="category-wrap category-padding"
                        :class="isLoaded ? 'sliderBackground bg-size' : ''"
                        :style="{
                          'background-image': `url(${getImageUrl(
                            category.image
                          )})`,
                        }"
                      >
                        <img
                          :src="getImageUrl(category.image)"
                          class="bg-img"
                          alt="category image"
                          :style="{ display: isLoaded ? 'none' : '' }"
                        />
                        <div class="category-content category-text-1">
                          <h3 class="theme-color">{{ category.title }}</h3>
                          <span class="text-dark">{{ category.subTitle }}</span>
                        </div>
                      </a>
                    </div>
                  </vue-slick-carousel>
                </div>
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
  props: ["categories"],
  components: {},
  data() {
    return {
      isLoaded: false,
      image: "/_nuxt/assets/images/fashion/category/1.jpg",
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "10px",
        // focusOnSelect: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        dots: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 760,
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
  created() {
    this.isLoaded = true;
  },
};
</script>

<style></style>
