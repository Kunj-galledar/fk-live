<template>
  <layout5 pageName="Shop Fashion" parent="Shop Listing">
    <shopSection :setCardsLayout="6">
      <template v-slot:topBanner>
        <topBanner />
      </template>
    </shopSection>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import { mapState } from "vuex";
import shopSection from "~/layout/elements/shopSections/shopMain.vue";
import topBanner from "~/layout/elements/shopSections/topBanner.vue";

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
