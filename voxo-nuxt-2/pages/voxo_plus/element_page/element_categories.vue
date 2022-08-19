<template>
  <layout5 pageName="Element Category" parent="Element Category">
    <section class="section-b-space overflow-hidden">
      <div class="row">
        <categorySlider1 :categories="categories" />
        <categorySlider2
          :banners="
            bannersList.filter((item) => item.subtype === 'freshfruits')[0]
              .banners
          "
        />
        <categorySlider3 />
      </div>
    </section>
  </layout5>
</template>

<script>
import { mapState } from "vuex";
import layout5 from "~/layout/layouts/layout5.vue";
import categorySlider1 from "~/components/voxo_plus/element_page/element_categories/categorySlider1.vue";
import categorySlider2 from "~/components/voxo_plus/element_page/element_categories/categorySlider2.vue";
import categorySlider3 from "~/components/voxo_plus/element_page/element_categories/categorySlider3.vue";
export default {
  components: {
    layout5,
    categorySlider1,
    categorySlider2,
    categorySlider3,
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
@import "~/assets/scss/element-category.scss";
</style>
