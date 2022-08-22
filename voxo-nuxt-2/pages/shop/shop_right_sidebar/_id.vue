<template>
  <layout5 pageName="Shop Listing" parent="Shop">
    <shopSection :filterbarPosition="'right'">
      <template v-slot:topBanner>
        <topBanner />
      </template>
    </shopSection>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import { mapState } from "vuex";
import topBanner from "~/layout/elements/shopSections/topBanner.vue";
import shopSection from "~/layout/elements/shopSections/shopMain.vue";
export default {
  components: { layout5, shopSection, topBanner },
  computed: {
    ...mapState({
      showFilterBar: (state) => state.filters.showFilters,
    }),
  },
};
</script>

<style lang="scss"></style>
