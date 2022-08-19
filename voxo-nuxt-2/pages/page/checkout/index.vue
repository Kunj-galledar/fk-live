<template>
  <layout5 parent="Checkout" pageName="Checkout">
    <checkOutMain :cartItems="cartItems" />
  </layout5>
</template>

<script>
import { mapGetters } from "vuex";
import layout5 from "~/layout/layouts/layout5.vue";
import checkOutMain from "~/components/page/checkout/checkoutMain.vue";
export default {
  components: {
    layout5,
    checkOutMain,
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
    }),
  },
  created() {
    if (this.cartItems.length === 0) this.$router.push("/page/cart");
  },
};
</script>
