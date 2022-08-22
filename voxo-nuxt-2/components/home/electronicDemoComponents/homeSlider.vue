<template>
  <section class="home-section">
    <div class="container-fluid">
      <div class="slick-1 classic-arrow">
        <vue-slick-carousel v-bind="settings">
          <div v-for="(slide, index) in slides" :key="index">
            <homeSlide :slide="slide" />
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </section>
</template>

<script>
// import "vue-slick-carousel-rtl/dist/vue-slick-carousel-rtl.css";
// optional style for arrows & dots
// import "vue-slick-carousel-rtl/dist/vue-slick-carousel-theme.css";
import homeSlide from "./homeSlide.vue";
import { ElectronicMainSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ["slides"],
  components: {
    homeSlide,
  },
  data() {
    return {
      settings: ElectronicMainSlider,
    };
  },
};
</script>

<style>
@-webkit-keyframes fadeInUpSD {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpSD {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUpSD {
  -webkit-animation-name: fadeInUpSD;
  animation-name: fadeInUpSD;
}

.slick-active > .fadeInUp {
  animation-name: fadeInUpSD;
  animation-duration: 1s;
  opacity: 1;
  width: 100%;
  padding: 10px 20px 30px 0;
}

.slick-slide.slick-active .fadeInUp {
  animation-name: fadeInUpSD;
  animation-duration: 1s;
  opacity: 1;
  width: 100%;
}
</style>
