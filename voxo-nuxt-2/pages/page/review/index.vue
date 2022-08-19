<template>
  <layout5 pageName="Review" parent="Review">
    <section class="review-section section-b-space">
      <div class="container">
        <no-ssr>
          <div
            class="row g-4 grid"
            v-masonry
            transition-duration="1s"
            item-selector=".item"
          >
            <div
              v-masonry-tile
              class="grid-item col-lg-4 col-sm-6 item"
              v-for="(banner, index) in banners"
              :key="index"
            >
              <div class="review-box">
                <div class="review-name">
                  <p>
                    {{ banner.review }}
                  </p>

                  <p v-if="banner.review2">
                    {{ banner.review2 }}
                  </p>
                </div>
                <div class="review-image">
                  <div class="review-profile">
                    <img
                      :src="getImageUrl(banner.image)"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <i class="fas fa-quote-right"></i>
                  <div class="image-name">
                    <h3>John wike</h3>
                    <ul class="rating d-flex">
                      <li>
                        <i
                          class="fas fa-star theme-color"
                          v-for="(stars, index) in banner.ratingStars"
                          :key="'a' + index"
                        ></i>
                      </li>
                      <li>
                        <i
                          class="fas fa-star"
                          v-for="(stars, index) in 5 - banner.ratingStars"
                          :key="'a' + index"
                        ></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </no-ssr>
      </div>
    </section>
  </layout5>
</template>

<script>
import NoSSR from "vue-no-ssr";
import layout5 from "~/layout/layouts/layout5.vue";
export default {
  components: {
    layout5,
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  computed: {
    banners() {
      return this.$store.state.banners.data.filter(
        (item) => item.type === "reviews"
      )[0].children;
    },
  },
};
</script>