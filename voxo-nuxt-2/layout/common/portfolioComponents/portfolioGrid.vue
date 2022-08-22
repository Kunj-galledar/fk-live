<template>
  <section id="portfolio" class="portfolio section-b-space">
    <CoolLightBox :items="lightBoxImages" :index="index" @close="index = null">
    </CoolLightBox>
    <div class="container">
      <div class="row gx-2">
        <div class="col-12">
          <div class="filters button filter-button-group">
            <ul>
              <li
                class="btn btn-submit"
                :class="{ active: isActive('all') }"
                data-filter="*"
                @click="updateFilter('all')"
              >
                <h4>All</h4>
              </li>
              <li
                class="btn btn-submit"
                :class="{ active: isActive('app') }"
                data-filter=".app"
                @click="updateFilter('app')"
              >
                <h4>App</h4>
              </li>
              <li
                class="btn btn-submit"
                :class="{ active: isActive('card') }"
                data-filter=".card"
                @click="updateFilter('card')"
              >
                <h4>Card</h4>
              </li>
              <li
                class="btn btn-submit"
                :class="{ active: isActive('web') }"
                data-filter=".web"
                @click="updateFilter('web')"
              >
                <h4>Web</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <no-ssr>
        <div
          class="row g-3 filter-gallery mt-3 content grid"
          v-masonry
          transition-duration="1s"
          item-selector=".item"
          :class="[parentDivClasses]"
        >
          <div
            v-masonry-tile
            class="grid-item col-sm-6 item"
            :class="[item.filter, childDivClasses]"
            v-for="(item, imageIndex) in filteredImages"
            :key="imageIndex"
          >
            <div class="parent-container parent-container-size">
              <a
                @click="index = item.id - 1"
                class="back sliderBackground bg-size"
                :style="{ backgroundImage: `url(${getImageUrl(item.src)})` }"
              >
                <img
                  :src="getImageUrl(item.src)"
                  class="img-fluid bg-img images d-none"
                  alt=""
                />
                <div class="overlay-color">
                  <div class="overlay-icon">
                    <div>
                      <h3>{{ item.title }}</h3>
                      <p class="font-light">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

import layout5 from "~/layout/layouts/layout5.vue";
import NoSSR from "vue-no-ssr";

export default {
  props: ["parentDivClasses", "childDivClasses"],
  components: {
    layout5,
    "no-ssr": NoSSR,
    CoolLightBox,
  },
  data() {
    return {
      galleryFilter: "all",
      lightBoxImages: [],
      index: null,
    };
  },
  computed: {
    filteredImages: function () {
      if (this.galleryFilter === "all") {
        return this.images;
      } else {
        return this.images.filter((data) => data.filter === this.galleryFilter);
      }
    },
    images() {
      let allImages = this.$store.state.information.data.filter(
        (item) => item.type === "portfolio"
      )[0].children;
      allImages.forEach((item) =>
        this.lightBoxImages.push(require("@/assets/images/" + item.src))
      );
      return allImages;
    },
  },
  methods: {
    changeIndex(imageIndex) {
      this.index = imageIndex;
    },
    isActive: function (menuItem) {
      return this.galleryFilter === menuItem;
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName;
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>
