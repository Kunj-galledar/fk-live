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
              <flowerDemoHomeSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import flowerDemoHomeSlider from "~/components/home/flowerDemoComponents/homeSlider.vue";
export default {
  components: {
    flowerDemoHomeSlider,
  },
};
</script>

<style></style>
