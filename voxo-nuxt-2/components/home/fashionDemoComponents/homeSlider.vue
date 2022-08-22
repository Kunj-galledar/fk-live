<template>
  <section class="home-section home-style-2 p-0">
    <div class="container-fluid p-0">
      <div class="slick-2 dot-dark">
        <vue-slick-carousel v-bind="settings">
          <div v-for="(slide, index) in slides" :key="index">
            <div class="home-slider">
              <div class="home-wrap row m-0 p-0">
                <div class="col-xxl-3 col-lg-4 p-0 d-lg-block d-none">
                  <div class="home-left-wrapper">
                    <div>
                      <h2>{{ slide.title }}</h2>

                      <div class="d-flex">
                        <ul class="rating p-0 me-2">
                          <li v-for="j in 5">
                            <i class="fas fa-star theme-color"></i>
                          </li>
                        </ul>
                        <h6 class="text-light">( {{ slide.review }} )</h6>
                      </div>

                      <p>
                        {{ slide.contain }}
                      </p>
                      <h3>
                        ${{ slide.price }}
                        <span class="theme-color">${{ slide.mrp }}</span>
                      </h3>
                      <ul class="selection-wrap">
                        <li>
                          <div class="dark-select">
                            <select class="form-select">
                              <option selected>Size</option>
                              <option
                                :value="size"
                                v-for="(size, index) in slide.Size"
                                :key="'a' + index"
                              >
                                {{ size }}
                              </option>
                            </select>
                            <i class="fas fa-chevron-down"></i>
                          </div>
                        </li>
                        <li>
                          <div class="dark-select">
                            <select class="form-select">
                              <option selected>Color</option>
                              <option
                                value="color"
                                v-for="(color, index) in slide.Color"
                                :key="'b' + index"
                              >
                                {{ color }}
                              </option>
                            </select>
                            <i class="fas fa-chevron-down"></i>
                          </div>
                        </li>
                        <li>
                          <div class="dark-select">
                            <select class="form-select">
                              <option selected>Qty</option>
                              <option
                                value="qty"
                                v-for="(qty, index) in slide.Qty"
                                :key="'c' + index"
                              >
                                {{ qty }}
                              </option>
                            </select>
                            <i class="fas fa-chevron-down"></i>
                          </div>
                        </li>
                      </ul>
                      <div class="add-btn">
                        <a
                          @click.prevent="$router.push('/page/cart')"
                          class="btn btn-white"
                          >Add to cart</a
                        >
                        <a
                          href="javascript:void:(0)"
                          class="btn btn-solid-default ms-2"
                        >
                          <i class="fas fa-heart"></i>
                        </a>
                      </div>
                      <sliderShareIcons />
                    </div>
                  </div>
                </div>
                <sliderLeftContent :slide="slide" />
              </div>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { MainHomeSlider } from "~/static/data/SliderSettingsData";

import sliderLeftContent from "./sliderLeftContent.vue";
import sliderShareIcons from "./sliderShareIcons.vue";
export default {
  components: {
    sliderLeftContent,
    sliderShareIcons,
  },
  computed: {
    slides() {
      return this.$store.state.homeSliders.data.filter(
        (item) => item.type === "fashion"
      )[0].slides;
    },
  },
  data() {
    return {
      settings: MainHomeSlider,
    };
  },
};
</script>
<style>
@keyframes fadeInUpSD {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.fadeInUpSD {
  -webkit-animation-name: fadeInUpSD;
  animation-name: fadeInUpSD;
}

.slick-slide.slick-active .fadeInUp1 {
  animation-name: fadeInUpSD;
  animation-duration: 1s;
  opacity: 1;
  width: 100%;
}
.slick-slide.slick-active .fadeInUp2 {
  animation-name: fadeInUpSD;
  animation-duration: 2s;
  opacity: 1;
  width: 100%;
}
.slick-slide.slick-active .fadeInUp3 {
  animation-name: fadeInUpSD;
  animation-duration: 3s;
  opacity: 1;
  width: 100%;
}
</style>
