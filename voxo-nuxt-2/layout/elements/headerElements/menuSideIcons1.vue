<template>
  <div class="menu-right">
    <ul>
      <li>
        <div
          class="search-box"
          :class="iconBgColor"
          :style="{ color: iconBgColor ? 'white' : 'black' }"
          @click="openSearchBar"
        >
          <vue-feather type="search"></vue-feather>
        </div>
      </li>
      <li class="onhover-dropdown">
        <div class="cart-media">
          <vue-feather type="user"></vue-feather>
        </div>
        <div class="onhover-div profile-dropdown">
          <ul>
            <li>
              Welcome
              {{
                $store.state.firebase.user === null
                  ? "User"
                  : $store.state.firebase.user.email
              }}
            </li>
            <li v-if="$store.state.firebase.user === null">
              <nuxt-link to="/page/login" class="d-block">Login</nuxt-link>
            </li>
            <li v-else>
              <a @click.prevent="signout" to="/page/login" class="d-block"
                >logout</a
              >
            </li>
            <li v-if="$store.state.firebase.user === null">
              <nuxt-link to="/page/register" class="d-block"
                >Register</nuxt-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="onhover-dropdown wislist-dropdown">
        <div class="cart-media">
          <a @click.prevent="$router.push('/page/wishlist')">
            <vue-feather type="heart"></vue-feather>
            <span class="label label-theme rounded-pill">{{
              wishlist.length
            }}</span>
          </a>
        </div>
        <div class="onhover-div">
          <a @click.prevent="$router.push('/page/wishlist')">
            <div class="wislist-empty">
              <i class="fab fa-gratipay"></i>
              <h6 class="mb-1" v-if="wishlist.length === 0">
                Your wislist empty !!
              </h6>
              <p class="font-light mb-0" v-if="wishlist.length === 0">
                explore more and shortlist items.
              </p>
              <h6 v-if="wishlist.length != 0">
                Your Wishlist has {{ wishlist.length }} items.
              </h6>
              <nuxt-link
                to="/page/wishlist"
                class="font-light mb-0"
                v-if="wishlist.length != 0"
              >
                View Wishlist
              </nuxt-link>
            </div>
          </a>
        </div>
      </li>
      <li
        class="onhover-dropdown cart-dropdown"
        :class="isCartOpen ? 'show' : ''"
      >
        <button
          type="button"
          @click="toggleCart"
          class="btn btn-solid-default btn-spacing"
        >
          <vue-feather type="shopping-cart"></vue-feather>
          <span>$ {{ cartTotal }}</span>
        </button>
        <!-- <animatedButton :buttonContent="'$ ' + cartTotal" featherType="shopping-cart"
          buttonClasses="btn btn-solid-default btn-spacing" /> -->
        <div class="onhover-div">
          <div class="cart-menu" v-if="getterCartItems.length != 0">
            <div class="cart-title">
              <h6>
                <vue-feather type="shopping-bag"></vue-feather>
                <span class="label label-theme rounded-pill">{{
                  getterCartItems.length
                }}</span>
              </h6>
              <span class="d-md-none d-block" @click="toggleCart">
                <i class="fas fa-arrow-right back-cart"></i>
              </span>
            </div>
            <ul class="custom-scroll">
              <li v-for="(item, index) in getterCartItems" :key="index">
                <div class="media">
                  <img
                    :src="getImageUrl(item.images[0].src)"
                    class="img-fluid"
                    alt="no image"
                    @click.prevent="
                      $router.push('/product/product_left_sidebar/' + item.id)
                    "
                  />
                  <div class="media-body">
                    <h6
                      @click.prevent="
                        $router.push('/product/product_left_sidebar/' + item.id)
                      "
                    >
                      {{ item.name }}
                    </h6>
                    <div class="qty-with-price">
                      <span>{{ currencySymbol }}{{ item.price }}</span>
                      <span>
                        <input
                          type="number"
                          class="form-control"
                          min="1"
                          max="9"
                          :value="item.quantity"
                          @change="changeQuantity($event, item.id)"
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    type=" button"
                    class="btn-close d-flex d-md-none"
                    @click.prevent="removeItem(item.id)"
                    aria-label="Close"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="cart-menu" v-else>
            <div class="cart-title">
              <h6>
                <vue-feather type="shopping-bag"></vue-feather>
                <span class="label label-theme rounded-pill">0</span>
              </h6>
              <span class="d-md-none d-block" @click="toggleCart">
                <i class="fas fa-arrow-right back-cart"></i>
              </span>
            </div>
            <ul class="custom-scroll">
              <li>
                <div class="media">
                  <img
                    style="width: 100%"
                    :src="require('@/assets/images/cartEmptyHeader.png')"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div class="cart-btn" v-if="getterCartItems.length != 0">
            <h6 class="cart-total">
              <span>Total:</span> {{ currencySymbol }} {{ cartTotal }}
            </h6>
            <animatedButton
              :buttonContent="'Proceed to payment'"
              buttonClasses="btn btn-solid-default btn-block"
              :headerLocation="'/page/cart'"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import VueFeather from "vue-feather";
import animatedButton from "~/layout/elements/buttons/animatedButton.vue";
export default {
  props: ["iconBgColor"],
  data() {
    return {
      isCartOpen: false,
      searchBarOpen: false,
      cartItems: [],
      currencySymbol: this.$store.state.layout.selectedCurrencySymbol,
    };
  },
  components: {
    VueFeather,
    animatedButton,
  },
  computed: {
    ...mapGetters({
      cartTotal: "cart/cartTotal",
      getterCartItems: "cart/cartItems",
      wishlist: "products/wishlist",
    }),
  },
  methods: {
    removeItem(productId) {
      this.$store.dispatch("cart/removeCartItem", productId);
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    signout() {
      this.$fire.auth.signOut().then((message) => {});
    },
    changeQuantity(event, productId) {
      let payload = {
        productId: productId,
        quantity: parseInt(event.target.value),
      };
      this.$store.dispatch("cart/changeQuantityTo", payload);
    },
    openSearchBar() {
      this.$emit("openSearchBar", true);
    },
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  mounted() {
    this.cartItems = this.getterCartItems;
  },
};
</script>
