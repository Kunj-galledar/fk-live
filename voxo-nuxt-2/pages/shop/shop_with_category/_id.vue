<template>
  <layout5 pageName="Shop Listing" parent="Shop">
    <shopSection>
      <template v-slot:topBanner>
        <topCategory />
      </template>
    </shopSection>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import { mapState } from "vuex";
import topBanner from "~/layout/elements/shopSections/topBanner.vue";
import shopSection from "~/layout/elements/shopSections/shopMain.vue";
import topCategory from "~/components/shop/shopWithCategory/topCategory.vue";
export default {
  components: { layout5, shopSection, topBanner, topCategory },
  computed: {
    ...mapState({
      showFilterBar: (state) => state.filters.showFilters,
    }),
  },
};
</script>

<style lang="scss"></style>
