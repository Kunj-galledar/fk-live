<template>
  <div class="col-12">
    <div class="header-image-contain">
      <div class="title title1 text-center">
        <h2>Header Style 3</h2>
      </div>

      <div class="contain-image-box">
        <header1 stopScrollWork="true" iconBgColor="theme-bg-color" />
      </div>
    </div>
  </div>
</template>

<script>
import header1 from "~/layout/common/headers/header1.vue";
export default {
  components: {
    header1,
  },
};
</script>

<style></style>
