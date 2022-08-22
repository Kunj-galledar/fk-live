<template>
  <layout5 pageName="Portfolio Grid" parent="Portfolio">
    <portfolioGrid parentDivClasses="ratio_asos" childDivClasses="col-md-4" />
  </layout5>
</template>

<script>
import portfolioGrid from "~/layout/common/portfolioComponents/portfolioGrid.vue";
import layout5 from "~/layout/layouts/layout5.vue";

export default {
  components: {
    layout5,
    portfolioGrid,
  },
};
</script>
