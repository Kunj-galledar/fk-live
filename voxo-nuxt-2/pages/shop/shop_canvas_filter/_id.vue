<template>
  <layout5 pageName="Shop Listing" parent="Shop">
    <shopSection pageName="Shop Listing" :category="category" />
    <off-canvas-section />
    <!-- <div
      class="bg-overlay"
      v-if="showFilterBar"
      :style="{
        opacity: showFilterBar ? '1' : '0',
        visibility: showFilterBar ? 'visible' : 'hidden',
      }"
      @click="hideFilterBar"
    ></div> -->
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import shopSection from "~/components/shop/shopCanvasFilter/shopSection.vue";
import offCanvasSection from "~/components/shop/shopCanvasFilter/offCanvasSection.vue";
import { mapState } from "vuex";
export default {
  components: { shopSection, offCanvasSection, layout5 },
  data() {
    return {
      category: this.$route.params.id,
    };
  },
  computed: {
    ...mapState({
      showFilterBar: (state) => state.filters.showFilters,
    }),
  },
  methods: {
    hideFilterBar() {
      this.$store.dispatch("filters/toggleFilterBar");
    },
  },
};
</script>
