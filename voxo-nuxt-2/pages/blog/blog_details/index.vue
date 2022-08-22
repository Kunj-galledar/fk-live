<template>
  <layout5 pageName="Blog Details" parent="Blog">
    <blogSection />
    <relatedBlogCarousel />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import blogSection from "~/components/blog/blogDetails/blogSection.vue";
import relatedBlogCarousel from "~/components/blog/blogDetails/relatedBlogCarousel.vue";
export default {
  components: {
    layout5,
    blogSection,
    relatedBlogCarousel,
  },
};
</script>