<template>
  <section>
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-12">
          <div class="header-image-contain">
            <div class="title title1 text-center">
              <h2>Home Style 1</h2>
            </div>

            <div class="contain-image-box">
              <shoesDemoHomeSlider :slides="slides" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import shoesDemoHomeSlider from "~/components/home/shoesDemoComponents/homeSlider.vue";
export default {
  components: { shoesDemoHomeSlider },
  computed: {
    slides() {
      return this.$store.state.homeSliders.data.filter(
        (item) => item.type === "shoes"
      )[0].slides;
    },
  },
};
</script>

<style></style>
