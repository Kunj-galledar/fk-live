<template>
  <section class="masonary-blog-section">
    <div class="container">
      <div class="row g-4">
        <blogRight />
        <blog-left />
      </div>
    </div>
  </section>
</template>

<script>
import blogRight from "./blogRight.vue";
import blogLeft from "~/layout/common/blogComponents/blogLeftSection1.vue";
export default {
  components: { blogRight, blogLeft },
};
</script>

<style lang="scss" scoped></style>
