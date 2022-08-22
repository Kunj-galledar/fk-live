<template>
  <div class="mobile-menu d-sm-none">
    <ul>
      <li>
        <nuxt-link to="/home/fashion_demo">
          <vue-feather type="home"></vue-feather>
          <span>Home</span>
        </nuxt-link>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          class="toggle-category active"
          @click="openCategory"
        >
          <vue-feather type="align-justify"></vue-feather>
          <span>Category</span>
        </a>
      </li>
      <li>
        <nuxt-link to="/page/cart">
          <vue-feather type="shopping-bag"></vue-feather>
          <span>Cart</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page/wishlist">
          <vue-feather type="heart"></vue-feather>
          <span>Wishlist</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page/user_dashboard">
          <vue-feather type="user"></vue-feather>
          <span>Account</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import VueFeather from "vue-feather";
export default {
  components: {
    VueFeather,
  },
  methods: {
    openCategory() {
      this.$store.dispatch("clickEvents/toggleCategoryMobileMenu");
    },
  },
};
</script>

<style></style>
