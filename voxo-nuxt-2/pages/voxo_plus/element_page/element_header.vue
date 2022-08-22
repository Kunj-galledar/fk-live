<template>
  <layout5 pageName="Element Header" parent="Element Header">
    <section class="section-b-space">
      <div class="container-fluid">
        <div class="row gy-3">
          <elementHeader1 />
          <elementHeader2 />
          <elementHeader3 />
          <elementHeader4 />
          <elementHeader5 />
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import elementHeader1 from "~/components/voxo_plus/element_page/element_header/elementHeader1.vue";
import elementHeader2 from "~/components/voxo_plus/element_page/element_header/elementHeader2.vue";
import elementHeader3 from "~/components/voxo_plus/element_page/element_header/elementHeader3.vue";
import elementHeader4 from "~/components/voxo_plus/element_page/element_header/elementHeader4.vue";
import elementHeader5 from "~/components/voxo_plus/element_page/element_header/elementHeader5.vue";
export default {
  components: {
    layout5,
    elementHeader1,
    elementHeader2,
    elementHeader3,
    elementHeader4,
    elementHeader5,
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/element-header.scss";
</style>
