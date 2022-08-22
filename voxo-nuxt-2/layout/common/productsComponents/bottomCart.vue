<template>
  <div
    class="sticky-bottom-cart"
    :style="{ bottom: showCart ? '0px' : '-192px' }"
  >
    <div class="container">
      <div class="cart-content">
        <div class="product-image">
          <img
            :src="require('@/assets/images/' + currentProduct.images[0].src)"
            class="img-fluid"
            alt=""
          />
          <div class="content">
            <h5>{{ currentProduct.name }}</h5>
            <h6>
              {{ selectedCurrencySymbol }}{{ currentProduct.price
              }}<del class="font-light"
                >{{ selectedCurrencySymbol }}{{ currentProduct.mrp }}</del
              ><span v-if="currentProduct.discount != 0"
                >{{ currentProduct.discount }}% off</span
              >
            </h6>
          </div>
        </div>
        <div class="selection-section">
          <div class="form-group mb-0">
            <select id="inputState" class="form-control form-select">
              <option disabled selected>Choose color...</option>
              <option>Pink</option>
              <option>Blue</option>
              <option>Grey</option>
              <option>Pink</option>
            </select>
          </div>
          <div class="form-group mb-0">
            <select id="input-state" class="form-control form-select">
              <option selected disabled>Choose size...</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>
        </div>
        <div class="add-btn">
          <a
            class="btn default-light-theme default-theme default-theme-2 outline-button wishlist-btn"
            @click.prevent="$router.push('/page/wishlist')"
            ><i class="fas fa-heart"></i>Wishlist</a
          >
          <a
            class="btn default-light-theme default-theme default-theme-2 outline-button"
            @click.prevent="$router.push('/page/cart')"
            ><i class="fas fa-shopping-cart"></i> Add To Cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showCartAt", "product"],
  data() {
    return {
      currentProduct: {},
      showCart: false,
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    handleScroll(event) {
      if (this.showCartAt < window.scrollY) {
        this.showCart = true;
      } else {
        this.showCart = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.product === undefined)
      this.currentProduct = this.$store.state.products.data[0];
    else this.currentProduct = this.product;
  },
};
</script>

<style></style>
