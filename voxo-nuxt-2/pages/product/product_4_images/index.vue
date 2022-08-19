<template>
  <layout6 pageName="Product 4 Image" parent="Products" :product="product">
    <shopSection :product="product" />
    <productSection />
  </layout6>
</template>

<script>
import layout6 from "~/layout/layouts/layout6.vue";
import shopSection from "~/components/product/product4Images/shopSection.vue";
import productSection from "~/layout/common/productsComponents/productSection.vue";
import { mapState } from "vuex";
export default {
  components: { layout6, productSection, shopSection },
  computed: {
    ...mapState({
      showFilterBar: (state) => state.filters.showFilters,
    }),
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
