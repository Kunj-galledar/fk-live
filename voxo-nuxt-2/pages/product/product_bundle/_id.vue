<template>
  <layout6 parent="Products" pageName="Product Bundle">
    <shopSection />
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout6.vue";

import shopSection from "~/components/product/productBundle/shopSection.vue";
export default {
  components: { layout6, shopSection },
};
</script>

<style lang="scss"></style>
