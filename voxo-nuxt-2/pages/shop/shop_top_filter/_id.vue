<template>
  <layout5 pageName="Shop Fashion" parent="Shop Listing">
    <shopSection>
      <template v-slot:topFilters>
        <topFilters />
      </template>
    </shopSection>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import topFilters from "~/components/shop/shopTopFilter/topFilters.vue";
import shopSection from "~/layout/elements/shopSections/shopMain2.vue";
export default {
  components: { layout5, shopSection, topFilters },
};
</script>
