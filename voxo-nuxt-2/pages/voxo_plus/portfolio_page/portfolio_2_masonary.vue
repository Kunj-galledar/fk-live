<template>
  <layout5 pageName="Portfolio Masonary" parent="Portfolio">
    <porfolioMasonary masonaryParentClasses="g-3 masonry-container" masonaryItemClasses="col-sm-6"
      imageClasses="img-fluid" />
  </layout5>
</template>

<script>
  import porfolioMasonary from "~/layout/common/portfolioComponents/portfolioMasonary.vue"
  import layout5 from "~/layout/layouts/layout5.vue";

  export default {
    components: {
      layout5, porfolioMasonary
    },
  };
</script>