<template>
  <layout5 pageName="Element Category" parent="Element Category">
    <section class="section-b-space">
      <div class="container-fluid">
        <div class="row g-4">
          <banner1
            :banners="
              banners.filter(
                (item) =>
                  item.type === 'fashion' && item.subtype === 'topbanner'
              )[0].children
            "
          />
          <banner2
            :banners="
              banners.filter(
                (item) =>
                  item.type === 'electronic' && item.subtype === 'topbanner'
              )[0].banners
            "
          />
          <banner3
            :banners="
              banners.filter(
                (item) =>
                  item.type === 'furniture' && item.subtype === 'topbanner'
              )[0].children
            "
          />
          <banner4
            :banners="
              banners.filter(
                (item) => item.type === 'flower' && item.subtype === 'topbanner'
              )[0].children
            "
          />
          <banner5
            :banners="
              banners.filter(
                (item) => item.type === 'fashion' && item.subtype === 'newoffer'
              )[0]
            "
          />
          <banner6
            :banners="
              banners.filter(
                (item) => item.type === 'shoes' && item.subtype === 'topbanner'
              )[0].banners
            "
          />
          <banner7
            :banners="
              banners.filter(
                (item) => item.type === 'shoes' && item.subtype === 'newoffers'
              )[0]
            "
          />
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
import { mapState } from "vuex";
import layout5 from "~/layout/layouts/layout5.vue";
import banner1 from "~/components/voxo_plus/element_page/element_collection_banner/banner1.vue";
import banner2 from "~/components/voxo_plus/element_page/element_collection_banner/banner2.vue";
import banner3 from "~/components/voxo_plus/element_page/element_collection_banner/banner3.vue";
import banner4 from "~/components/voxo_plus/element_page/element_collection_banner/banner4.vue";
import banner5 from "~/components/voxo_plus/element_page/element_collection_banner/banner5.vue";
import banner6 from "~/components/voxo_plus/element_page/element_collection_banner/banner6.vue";
import banner7 from "~/components/voxo_plus/element_page/element_collection_banner/banner7.vue";
export default {
  components: {
    layout5,
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  },
  computed: {
    ...mapState({
      banners: (state) => state.banners.data,
    }),
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/element-banner.scss";
</style>
