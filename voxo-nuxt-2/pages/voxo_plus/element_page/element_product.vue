<template>
  <layout5 pageName="Element Product" parent="Element Product">
    <section class="main_section">
      <productSlider1
        :products="productsList.filter((item) => item.type === 'fashion')"
      />
      <productSlider2
        :products="
          productsList.filter(
            (item) => item.type === 'electronic' && item.category === 'vr'
          )
        "
      />
      <productSlider3
        :products="productsList.filter((item) => item.type === 'vegetables')"
      />
      <productSlider4
        :products="productsList.filter((item) => item.type === 'vegetables')"
      />
      <productSlider5
        :products="productsList.filter((item) => item.type === 'furniture')"
      />
      <productSlider6
        :products="productsList.filter((item) => item.type === 'fashion')"
      />
    </section>
  </layout5>
</template>

<script>
import { mapState } from "vuex";
import layout5 from "~/layout/layouts/layout5.vue";
import productSlider1 from "~/components/voxo_plus/element_page/element_product/productSlider1.vue";
import productSlider2 from "~/components/voxo_plus/element_page/element_product/productSlider2.vue";
import productSlider3 from "~/components/voxo_plus/element_page/element_product/productSlider3.vue";
import productSlider4 from "~/components/voxo_plus/element_page/element_product/productSlider4.vue";
import productSlider5 from "~/components/voxo_plus/element_page/element_product/productSlider5.vue";
import productSlider6 from "~/components/voxo_plus/element_page/element_product/productSlider6.vue";
export default {
  components: {
    layout5,
    productSlider1,
    productSlider2,
    productSlider3,
    productSlider4,
    productSlider5,
    productSlider6,
  },
  computed: {
    ...mapState({
      productsList: (state) => state.products.data,
    }),
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/element-category.scss";
</style>
