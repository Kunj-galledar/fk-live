<template>
  <layout5 pageName="Blog Listing" parent="Blog">
    <blogSection />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import blogSection from "~/components/blog/blogMasonary/blogSection.vue";
export default {
  components: {
    blogSection,
    layout5,
  },
};
</script>
