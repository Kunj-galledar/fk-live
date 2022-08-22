<template>
  <section class="section-b-space block-shadow-space ratio3_2">
    <div class="container">
      <div class="slide-4 product-wrapper slick-lg-space">
        <vue-slick-carousel v-bind="settings">
          <div v-for="(blog, index) in relatedBlogs" :key="index">
            <div class="card blog-categority">
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/blog/blog_details')"
                class="blog-img sliderBackground bg-size"
                :style="{
                  'background-image': `url(${getImageUrl(blog.image)})`,
                }"
              >
                <img
                  :src="getImageUrl(blog.image)"
                  alt=""
                  class="card-img-top bg-img d-none"
                />
              </a>
              <div class="card-body">
                <a
                  href="javascript:void(0)"
                  @click.prevent="$router.push('/blog/blog_details')"
                >
                  <h2 class="card-title">{{ blog.heading }}</h2>
                </a>
                <div class="blog-profile">
                  <div class="image-name">
                    <h3>{{ blog.author }}</h3>
                    <h6>{{ blog.date }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    relatedBlogs() {
      return this.$store.state.blogData.data.filter(
        (item) => item.type === "blogDetails"
      )[0].carouselItems;
    },
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  data() {
    return {
      image: "/_nuxt/assets/images/inner-page/product/9.jpg",
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
            breakpoint: 990,
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
