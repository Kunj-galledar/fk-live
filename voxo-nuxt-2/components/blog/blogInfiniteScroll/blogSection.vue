<template>
  <section
    id="portfolio"
    class="left-sidebar-section masonary-blog-section section-b-space"
  >
    <div class="container">
      <div class="row g-4">
        <blog-right />
        <blogLeft />
      </div>
    </div>
  </section>
</template>

<script>
import blogLeft from "~/layout/common/blogComponents/blogLeftSection1.vue";
import blogRight from "./blogRight.vue";
export default {
  components: { blogLeft, blogRight },
};
</script>

<style lang="scss" scoped></style>
