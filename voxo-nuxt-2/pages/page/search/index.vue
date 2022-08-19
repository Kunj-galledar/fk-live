<template>
  <layout5 pageName="Search" parent="Search">
    <topSearchBar />
    <productSlider />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import topSearchBar from "~/components/page/search/topSearchBar.vue";
import productSlider from "~/components/page/search/productSlider.vue";
export default {
  components: {
    layout5,
    topSearchBar,
    productSlider,
  },
};
</script>
