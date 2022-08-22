<template>
  <layout5 parent="Portfolio" pageName="Portfolio No Space">
    <porfolioMasonary
      rowClasses="mb-4"
      masonaryParentClasses="g-0"
      masonaryItemClasses="col-lg-4 col-md-12 "
      imageClasses="w-100"
    />
  </layout5>
</template>

<script>
import porfolioMasonary from "~/layout/common/portfolioComponents/portfolioMasonary.vue";
import layout5 from "~/layout/layouts/layout5.vue";

export default {
  components: {
    layout5,
    porfolioMasonary,
  },
};
</script>
