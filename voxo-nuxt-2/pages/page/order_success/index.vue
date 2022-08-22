<template>
  <layout5 :breadcrumb="false" pageName="Order Success" parent="Order Success">
    <template v-slot:breadcrumb>
      <breadcrumb3 />
    </template>
    <orderDetails />
  </layout5>
</template>

<script>
import layout5 from "~/layout/layouts/layout5.vue";
import orderDetails from "~/components/page/orderSuccess/orderDetails.vue";
import breadcrumb3 from "~/layout/elements/breadcrumbs/breadcrumb3.vue";
export default {
  components: {
    layout5,
    orderDetails,
    breadcrumb3,
  },
};
</script>
