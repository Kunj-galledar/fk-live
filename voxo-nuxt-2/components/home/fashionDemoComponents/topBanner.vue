<template>
  <section class="ratio2_1 banner-style-2">
    <div class="container">
      <div class="row gy-4">
        <bannerBox1
          v-for="(banner, index) in banners"
          :key="index"
          :banner="banner"
          :bannerClasses="bannerClasses(banner)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import bannerBox1 from "~/layout/elements/bannerBoxes/bannerBox1.vue";
export default {
  props: ["banners"],
  components: {
    bannerBox1,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    bannerClasses(banner) {
      if (banner.class) return "col-lg-4";
      else return "col-lg-4 col-md-6";
    },
  },
  created() {
    this.isLoaded = true;
  },
};
</script>

<style></style>
