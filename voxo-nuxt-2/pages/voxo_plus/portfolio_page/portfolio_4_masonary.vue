<template>
  <layout5 parent="Portfolio" pageName="Portfolio Masonary">
    <porfolioMasonary
      masonaryParentClasses="g-3 "
      masonaryItemClasses="col-xl-3 col-md-4 col-sm-6 "
      imageClasses="img-fluid"
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
