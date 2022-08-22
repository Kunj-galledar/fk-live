<template>
  <div class="menu-right">
    <ul>
      <li>
        <div class="toggle-nav" @click="showMobileNav">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
      </li>
      <li>
        <div
          class="search-box theme-bg-color d-lg-none d-block"
          @click="openSearchbar"
        >
          <vue-feather type="search"></vue-feather>
        </div>
      </li>

      <li class="onhover-dropdown wislist-dropdown">
        <div class="cart-media" @click.prevent="$router.push('/page/compare')">
          <div class="cart-icon">
            <vue-feather type="refresh-cw"></vue-feather>
            <span class="label label-theme rounded-pill">{{
              compareItems.length
            }}</span>
          </div>
          <div class="cart-content" v-if="compareItems.length === 0">
            <h6>Empty</h6>
            <span>Compare</span>
          </div>
          <div class="cart-content" v-else>
            <h6>{{ compareItems.length }} Items</h6>
            <span>In Compare</span>
          </div>
        </div>
      </li>

      <li class="onhover-dropdown wislist-dropdown">
        <div class="cart-media">
          <div class="cart-icon">
            <a @click.prevent="$router.push('/page/wishlist')">
              <vue-feather type="heart"></vue-feather>
              <span class="label label-theme rounded-pill">{{
                wishlist.length
              }}</span>
            </a>
          </div>
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
          <span>{{ currencySymbol }}{{ cartTotal }}</span>
        </button>
        <div class="onhover-div">
          <div class="cart-menu">
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
              <li v-for="product in getterCartItems" :key="product.id">
                <div class="media">
                  <img
                    :src="getImageUrl(product.images[0].src)"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="media-body">
                    <h6>{{ product.name }}</h6>
                    <div class="qty-with-price">
                      <span>{{ currencySymbol }}{{ product.price }}</span>
                      <span>
                        <input
                          type="number"
                          class="form-control"
                          min="1"
                          max="9"
                          :value="product.quantity"
                          @change="changeQuantity($event, product.id)"
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn-close d-flex d-md-none"
                    aria-label="Close"
                    @click.prevent="removeItem(product.id)"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="cart-btn">
            <h6 class="cart-total">
              <span class="font-light">Total:</span> {{ currencySymbol }}
              {{ cartTotal }}
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
import VueFeather from "vue-feather";
import animatedButton from "~/layout/elements/buttons/animatedButton.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isCartOpen: false,
    };
  },
  components: {
    VueFeather,
    animatedButton,
  },
  computed: {
    ...mapGetters({
      compareItems: "compare/compareItems",
      cartTotal: "cart/cartTotal",
      getterCartItems: "cart/cartItems",
      wishlist: "products/wishlist",
    }),
    currencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    removeItem(productId) {
      this.$store.dispatch("cart/removeCartItem", productId);
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    changeQuantity(event, productId) {
      let payload = {
        productId: productId,
        quantity: parseInt(event.target.value),
      };
      this.$store.dispatch("cart/changeQuantityTo", payload);
    },
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    openSearchbar() {
      this.$emit("openSearchbar", true);
    },
    showMobileNav() {
      this.$emit("showMobileNav", true);
    },
  },
};
</script>

<style></style>
