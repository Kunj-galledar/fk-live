<template>
  <section class="left-sidebar-section masonary-blog-section section-b-space">
    <div class="container">
      <div class="row g-4">
        <blogLeft />
        <blogRight />
      </div>
    </div>
  </section>
</template>

<script>
import blogLeft from "./blogLeft.vue";
import blogRight from "./blogRight.vue";
export default {
  components: { blogLeft, blogRight },
};
</script>

<style lang="scss" scoped></style>
