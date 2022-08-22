<template>
  <layout5 pageName="Shop Fashion" parent="Shop Listing">
    <shopSection />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import { mapState } from "vuex";
import shopSection from "~/components/shop/shopListInfinite/shopSection.vue";
export default {
  components: { layout5, shopSection },
  computed: {
    ...mapState({
      showFilterBar: (state) => state.filters.showFilters,
    }),
  },
};
</script>

<style lang="scss"></style>
