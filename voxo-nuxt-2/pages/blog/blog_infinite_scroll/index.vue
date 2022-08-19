<template>
  <layout5 pageName="Blog Infinite Scroll" parent="Blog">
    <blogSection />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import blogSection from "~/components/blog/blogInfiniteScroll/blogSection.vue";
export default {
  components: {
    layout5,
    blogSection,
  },
};
</script>
