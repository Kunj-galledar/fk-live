<template>
  <section>
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-12">
          <div class="header-image-contain">
            <div class="title title1 text-center">
              <h2>Home Style 4</h2>
            </div>

            <div class="contain-image-box">
              <furnitureDemoHomeSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import furnitureDemoHomeSlider from "~/components/home/furnitureDemoComponents/homeSlider.vue";
export default {
  components: { furnitureDemoHomeSlider },
};
</script>

<style></style>
