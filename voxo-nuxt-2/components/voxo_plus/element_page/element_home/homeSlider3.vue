<template>
  <section>
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-12">
          <div class="header-image-contain">
            <div class="title title1 text-center">
              <h2>Home Style 3</h2>
            </div>

            <div class="contain-image-box">
              <fashionDemoHomeSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import fashionDemoHomeSlider from "~/components/home/fashionDemoComponents/homeSlider.vue";
export default {
  components: { fashionDemoHomeSlider },
};
</script>

<style></style>
