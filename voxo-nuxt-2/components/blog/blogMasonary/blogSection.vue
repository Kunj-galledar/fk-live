<template>
  <section class="masonary-blog-section section-b-space">
    <div class="container">
      <no-ssr>
        <div
          class="row g-4 filter-gallery mt-3 grid"
          v-masonry
          transition-duration="1s"
          item-selector=".item"
        >
          <div
            v-masonry-tile
            class="grid-item col-lg-3 col-md-4 col-sm-6 item"
            v-for="(blog, index) in blogs"
            :key="index"
          >
            <div class="card masonary-blog">
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/blog/blog_details')"
                v-if="!blog.type"
              >
                <img
                  :src="getImageUrl(blog.image)"
                  alt=""
                  class="card-img-top"
                />
              </a>
              <div class="card-body" :class="blog.class">
                <img
                  v-if="blog.type === 'quote'"
                  :src="getImageUrl(blog.image)"
                  class="quote-image"
                  alt=""
                />
                <a
                  href="javascript:void(0)"
                  @click.prevent="$router.push('/blog/blog_details')"
                >
                  <h2
                    class="card-title"
                    :class="[{ 'quote-head': blog.type === 'quote' }]"
                  >
                    {{ blog.title }}
                  </h2>
                </a>
                <p class="font-light" v-if="blog.description">
                  {{ blog.description }}
                </p>
                <div
                  class="blog-profile"
                  :class="[{ 'box-center': blog.type === 'quote' }]"
                >
                  <div class="image-profile">
                    <img
                      :src="getImageUrl(blog.profileImage)"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="image-name">
                    <h3>{{ blog.author }}</h3>
                    <h6>{{ blog.date }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import NoSSR from "vue-no-ssr";
export default {
  components: {
    "no-ssr": NoSSR,
  },
  computed: {
    blogs() {
      return this.$store.state.blogData.data.filter(
        (item) => item.type === "blogMasonary"
      )[0].blogs;
    },
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style lang="scss" scoped></style>