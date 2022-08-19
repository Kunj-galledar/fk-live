<template>
  <section>
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-12">
          <div class="header-image-contain">
            <div class="title title1 text-center">
              <h2>Home Style 2</h2>
            </div>

            <div class="contain-image-box">
              <electronicDemoHomeSlider :slides="slides" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import electronicDemoHomeSlider from "~/components/home/electronicDemoComponents/homeSlider.vue";
export default {
  components: { electronicDemoHomeSlider },
  computed: {
    slides() {
      return this.$store.state.homeSliders.data.filter(
        (item) => item.type === "electronic"
      )[0].slides;
    },
  },
};
</script>

<style></style>
