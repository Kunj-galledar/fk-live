<template>
  <layout6 parent="Products" pageName="Product 360 View" :product="product">
    <shopSection />
    <productSection />
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout6.vue";
import shopSection from "~/components/product/product360View/shopSection.vue";
import productSection from "~/layout/common/productsComponents/productSection.vue";
export default {
  components: { layout6, productSection, shopSection },
  computed: {
    allProducts() {
      return this.$store.state.products.data;
    },
    product() {
      if (this.$route.params.id != undefined)
        return this.allProducts.filter(
          (item) => item.id === this.$route.params.id
        );
      else return this.allProducts[0];
    },
  },
};
</script>

<style lang="scss"></style>
