<template>
  <layout5 pageName="Order Tracking" parent="Order Tracking">
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <orderTrackingTop />
          <orderTrackingBottom />
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import orderTrackingTop from "~/components/page/orderTracking/orderTrackingTop.vue";
import orderTrackingBottom from "~/components/page/orderTracking/orderTrackingBottom.vue";
export default {
  components: {
    orderTrackingTop,
    orderTrackingBottom,
    layout5,
  },
};
</script>
