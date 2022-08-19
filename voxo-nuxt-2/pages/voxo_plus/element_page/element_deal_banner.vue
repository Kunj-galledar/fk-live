<template>
  <layout5 pageName="Element Category" parent="Element Category">
    <section class="">
      <dealBanner1
        :banner="
          banners.filter(
            (item) => item.type === 'shoes' && item.subtype === 'dealday'
          )[0]
        "
      />
      <dealBanner2
        :banner="
          banners.filter(
            (item) => item.type === 'vegetables' && item.subtype === 'dealday'
          )[0]
        "
      />
      <dealBanner3
        :banner="
          banners.filter(
            (item) => item.type === 'furniture' && item.subtype === 'deal'
          )[0]
        "
      />
      <dealBanner4
        :banner="
          banners.filter(
            (item) => item.type === 'flower' && item.subtype === 'deal'
          )[0]
        "
      />
    </section>
  </layout5>
</template>

<script>
import { mapState } from "vuex";
import layout5 from "~/layout/layouts/layout5.vue";
import dealBanner1 from "~/components/voxo_plus/element_page/element_deal_banner/dealBanner1.vue";
import dealBanner2 from "~/components/voxo_plus/element_page/element_deal_banner/dealBanner2.vue";
import dealBanner3 from "~/components/voxo_plus/element_page/element_deal_banner/dealBanner3.vue";
import dealBanner4 from "~/components/voxo_plus/element_page/element_deal_banner/dealBanner4.vue";
export default {
  components: {
    layout5,
    dealBanner1,
    dealBanner2,
    dealBanner3,
    dealBanner4,
  },
  computed: {
    ...mapState({
      banners: (state) => state.banners.data,
    }),
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/element-deal-banner.scss";
</style>
