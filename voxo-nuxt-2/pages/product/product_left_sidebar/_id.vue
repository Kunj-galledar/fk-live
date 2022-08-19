<template>
  <layout6 parent="Products" pageName="Product Left Sidebar" :product="product">
    <shopSection :product="product" />
    <productSection />
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout6.vue";

import shopSection from "~/components/product/productLeftSidebar/shopSection.vue";
import productSection from "~/layout/common/productsComponents/productSection.vue";
export default {
  components: { layout6, productSection, shopSection },

  computed: {
    allProducts() {
      return this.$store.state.products.data;
    },
    product() {
      var product = this.allProducts.filter(
        (product) =>
          product.id ===
          Number(this.$route.params.id ? this.$route.params.id : 1)
      )[0];
      return product;
    },
  },
};
</script>

<style lang="scss"></style>
