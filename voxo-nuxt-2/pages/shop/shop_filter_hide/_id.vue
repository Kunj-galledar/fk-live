<template>
  <layout5 pageName="Shop Listing" parent="Shop">
    <shopSection :filterBarClasses="'category-side'" :filterHide="true" />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import shopSection from "~/layout/elements/shopSections/shopMain.vue";
export default {
  components: { layout5, shopSection },
  computed: {
    showFilterBar() {
      return this.$store.state.filters.showFilters;
    },
  },
};
</script>

<style lang="scss"></style>
