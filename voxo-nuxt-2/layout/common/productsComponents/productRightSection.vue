<template>
  <div class="col-md-6" :class="rightSectionClasses ? rightSectionClasses : ''">
    <div class="cloth-details-size">
      <productCount />

      <div class="details-image-concept">
        <h2>{{ currentProduct.name }}</h2>
      </div>

      <div class="label-section">
        <span class="badge badge-grey-color">#1 Best seller</span>
        <span class="label-text">in fashion</span>
      </div>

      <h3 class="price-detail">
        {{ selectedCurrencySymbol }}{{ currentProduct.price }}
        <del>{{ selectedCurrencySymbol }}{{ currentProduct.mrp }}</del
        ><span v-if="currentProduct.discount != 0"
          >{{ currentProduct.discount }}% off</span
        >
      </h3>

      <selectColors />

      <selectSize
        :product="currentProduct"
        @changeQuantityTo="changeQuantityTo"
      />

      <div class="product-buttons">
        <a
          @click.prevent="$router.push('/page/wishlist')"
          class="btn btn-solid"
        >
          <i class="fa fa-bookmark fz-16 me-2"></i>
          <span>Wishlist</span>
        </a>
        <a
          href="javascript:void(0)"
          @click="addToCart(currentProduct)"
          id="cartEffect"
          class="btn btn-solid hover-solid btn-animation"
        >
          <i class="fa fa-shopping-cart"></i>
          <span>Add To Cart</span>
        </a>
      </div>

      <ul class="product-count shipping-order">
        <li>
          <img
            src="~assets/images/gif/truck.png"
            class="img-fluid"
            alt="image"
          />
          <span class="lang">Free shipping for orders above $500 USD</span>
        </li>
      </ul>

      <timer />

      <shareIt />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import selectColors from "./selectColors.vue";
import selectSize from "./selectSize.vue";
import productCount from "./productCount.vue";
import timer from "./timer.vue";
import shareIt from "./shareIt.vue";
export default {
  props: ["rightSectionClasses", "product"],
  data() {
    return {
      currentProduct: {},
      quantity: 1,
    };
  },
  components: {
    shareIt,
    productCount,
    selectColors,
    selectSize,
    timer,
  },
  computed: {
    ...mapGetters({
      inCartProductIds: "cart/inCartProductIds",
    }),
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    addToCart(product) {
      var item = { product: product, quantity: this.quantity };
      this.$store.dispatch("cart/addToCart", item);
      this.$store.dispatch("clickEvents/changeProductId", product.id);
      this.$store.dispatch("clickEvents/toggleSuccessfulModal");
    },
    changeQuantityTo(quantity) {
      this.quantity = quantity;
    },
  },
  created() {
    if (this.product === undefined)
      this.currentProduct = this.$store.state.products.data[0];
    else this.currentProduct = this.product;

    let indexOfProductInCart = this.inCartProductIds.indexOf(
      this.currentProduct.id
    );
    if (indexOfProductInCart > -1) {
      this.currentProduct = this.cartItems[indexOfProductInCart];
    }
  },
};
</script>

<style></style>
