<template>
  <layout6 parent="Products" pageName="Product Left Sidebar">
    <shopSection />
    <productSection />
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout6.vue";
import shopSection from "~/components/product/productVideoThumbnail/shopSection.vue";
import productSection from "~/layout/common/productsComponents/productSection.vue";
export default {
  components: { layout6, productSection, shopSection },
};
</script>

<style lang="scss"></style>
