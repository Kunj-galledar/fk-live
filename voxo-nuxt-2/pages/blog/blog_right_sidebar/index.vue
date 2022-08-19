<template>
  <layout5 pageName="Blog Right Sidebar" parent="Blog">
    <blogSection />
  </layout5>
</template>

<script>
  import layout5 from "~/layout/layouts/layout5.vue";
  import blogSection from "~/components/blog/blogRightSidebar/blogSection.vue";
  export default {
    components: {
      blogSection,
      layout5,
    },
  };
</script>