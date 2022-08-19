<template>
  <layout5 pageName="Cart" parent="Cart">
    <cart :cartItems="cartItems" />
  </layout5>
</template>

<script>
  import layout5 from "~/layout/layouts/layout5.vue";
  import cart from "~/components/page/cart/cart.vue";
  export default {
    components: {
      layout5,
      cart,
    },
    computed: {
      cartItems() {
        return this.$store.state.cart.cartItems;
      },
    },
  };
</script>