<template>
  <div class="product-box" :class="productBoxClasses">
    <div class="img-wrapper">
      <div @click="gotoProduct">
        <a
          @click="$router.push('/product/product_left_sidebar/' + product.id)"
          class="front sliderBackground bg-size"
          :style="{
            'background-image': `url(${getImageUrl(product.images[0].src)})`,
          }"
        >
          <img
            :src="getImageUrl(product.images[0].src)"
            class="bg-img d-none"
            alt=""
          />
        </a>
      </div>
      <div @click="gotoProduct">
        <a
          @click="$router.push('/product/product_left_sidebar/' + product.id)"
          class="back sliderBackground bg-size"
          :style="{
            'background-image': `url(${getImageUrl(
              product.images[1] ? product.images[1].src : product.images[0].src
            )})`,
          }"
        >
          <img
            :src="
              getImageUrl(
                product.images[1]
                  ? product.images[1].src
                  : product.images[0].src
              )
            "
            class="bg-img d-none"
            alt=""
          />
        </a>
      </div>
      <div class="label-block" v-if="product.new || product.discount">
        <span class="label label-black" v-if="product.new">New</span>
        <span class="label label-theme" v-if="product.discount"
          >{{ product.discount }}% Off</span
        >
      </div>
      <div class="cart-wrap">
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              class="addtocart-btn"
              data-bs-toggle="modal"
              data-bs-target="#addtocart"
              @click="toggleCartModal(product)"
            >
              <vue-feather type="shopping-bag"></vue-feather>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#quick-view"
              @click="toggleQuickViewModal(product.id)"
            >
              <vue-feather type="eye"></vue-feather>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click.prevent="addTocompare(product.id)"
            >
              <vue-feather type="refresh-cw"></vue-feather>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click.prevent="addToWishlist(product)"
              class="wishlist"
            >
              <vue-feather type="heart"></vue-feather>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-details">
      <div class="rating-details">
        <span class="font-light grid-content">{{ product.category }}</span>
        <ul class="rating mt-0 d-flex">
          <li v-for="(stars, index) in product.ratingStars" :key="index">
            <i class="fas fa-star theme-color"></i>
          </li>
          <li
            v-for="(noStars, index) in 5 - product.ratingStars"
            :key="'A' + index"
          >
            <i class="fas fa-star"></i>
          </li>
        </ul>
      </div>
      <div class="main-price">
        <a
          href="javascript:void(0)"
          @click.prevent="
            $router.push('/product/product_left_sidebar/' + product.id)
          "
          class="font-default"
        >
          <h5>{{ product.name }}</h5>
        </a>
        <div class="listing-content">
          <span class="font-light">{{ product.size }}</span>
          <p class="font-light">{{ product.description }}</p>
        </div>
        <h3 class="theme-color">
          {{ selectedCurrencySymbol }}{{ product.price }}
        </h3>
        <button
          href="javascript:void(0)"
          @click="toggleCartModal(product)"
          class="btn listing-content"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueFeather from "vue-feather";
export default {
  props: ["product", "productBoxClasses"],
  components: {
    VueFeather,
  },
  computed: {
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    async addToWishlist(product) {
      var isPresentInWishlist = false;
      await this.$store
        .dispatch("products/addToWishlist", product)
        .then((res) => {
          isPresentInWishlist = res;
        });
      if (isPresentInWishlist)
        this.$store.dispatch("clickEvents/toggleSuccessfulModal", {
          image: product.images[0].src,
          message: "Already in Wishlist",
        });
      else
        this.$store.dispatch("clickEvents/toggleSuccessfulModal", {
          image: product.images[0].src,
          message: "Added to Wishlist",
        });
    },
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    gotoProduct() {
      this.$router.push({
        path: "/product/product_left_sidebar/" + this.product.id,
      });
    },
    toggleCartModal(product) {
      var item = { product: product, quantity: 1 };
      this.$store.dispatch("cart/addToCart", item);
      this.$store.dispatch("clickEvents/changeProductId", product.id);
      this.$store.dispatch("clickEvents/toggleCartModal");
    },
    toggleQuickViewModal(productId) {
      this.$store.dispatch("clickEvents/changeProductId", productId);
      this.$store.dispatch("clickEvents/toggleQuickViewModal");
    },
    addTocompare(productId) {
      let payload = {
        image: this.product.images[0].src,
        message: "Added To compare",
      };
      this.$store.dispatch("compare/addToCompare", productId);
      this.$store.dispatch("clickEvents/toggleSuccessfulModal", payload);
    },
  },
};
</script>

<style></style>
