<template>
  <layout5 pageName="Element Buttons" parent="Element Buttons">
    <buttons />
  </layout5>
</template>

<script>
import { mapState } from "vuex";
import layout5 from "~/layout/layouts/layout5.vue";
import buttons from "~/components/voxo_plus/element_page/element_buttons/buttons.vue";
export default {
  components: {
    layout5,
    buttons,
  },
  computed: {
    ...mapState({
      categories: (state) =>
        state.categories.data.filter((item) => item.type === "fashionDemo")[0]
          .categories,
    }),
    bannersList() {
      return this.$store.state.banners.data.filter(
        (item) => item.type === "vegetables"
      );
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/demo2.scss";
</style>
