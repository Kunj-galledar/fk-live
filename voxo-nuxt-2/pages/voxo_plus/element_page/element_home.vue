<template>
  <layout5 pageName="Element home" parent="Element home">
    <homeSlider1 />
    <homeSlider2 />
    <homeSlider3 />
    <homeSlider4 />
    <homeSlider5 />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import homeSlider1 from "~/components/voxo_plus/element_page/element_home/homeSlider1.vue";
import homeSlider2 from "~/components/voxo_plus/element_page/element_home/homeSlider2.vue";
import homeSlider3 from "~/components/voxo_plus/element_page/element_home/homeSlider3.vue";
import homeSlider4 from "~/components/voxo_plus/element_page/element_home/homeSlider4.vue";
import homeSlider5 from "~/components/voxo_plus/element_page/element_home/homeSlider5.vue";
export default {
  components: {
    layout5,
    homeSlider1,
    homeSlider2,
    homeSlider3,
    homeSlider4,
    homeSlider5,
  },

  head() {
    return {
      title: "Fashion Store",
      link: [
        // {
        //   rel: "stylesheet",
        //   type: "text/css",
        //   href: "/voxo/css/demo1.css",
        //   id: "color-link",
        // },
        // {
        //   rel: "stylesheet",
        //   type: "text/css",
        //   href: "/voxo/css/demo2.css",
        //   id: "color-link",
        // },
        // {
        //   rel: "stylesheet",
        //   type: "text/css",
        //   href: "/voxo/css/demo3.css",
        //   id: "color-link",
        // },
        // {
        //   rel: "stylesheet",
        //   type: "text/css",
        //   href: "/voxo/css/demo4.css",
        //   id: "color-link",
        // },
        // {
        //   rel: "stylesheet",
        //   type: "text/css",
        //   href: "/voxo/css/demo5.css",
        //   id: "color-link",
        // },
        { rel: "icon", type: "image/x-icon", href: "/2.png" },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "~assets/scss/demo1.scss";
@import "~assets/scss/demo2.scss";
@import "~assets/scss/demo3.scss";
@import "~assets/scss/demo4.scss";
@import "~assets/scss/demo5.scss";
@import "~/assets/scss/element-header.scss";
</style>
