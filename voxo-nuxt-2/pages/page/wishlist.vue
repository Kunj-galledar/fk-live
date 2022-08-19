<template>
  <layout5 pageName="Wishlist" parent="Wishlist">
    <section class="wish-list-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 table-responsive" v-if="wishlist.length != 0">
            <table class="table cart-table wishlist-table">
              <thead>
                <tr class="table-head">
                  <th scope="col">image</th>
                  <th scope="col">product name</th>
                  <th scope="col">price</th>
                  <th scope="col">availability</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody v-for="product in wishlist" :key="product.id">
                <tr>
                  <td>
                    <nuxt-link to="product/product_left_sidebar">
                      <img :src="getImageUrl(product.images[0].src)" alt="" />
                    </nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="product/product_left_sidebar" class="font-light">{{ product.name }}</nuxt-link>
                    <div class="mobile-cart-content row">
                      <div class="col">
                        <p>In Stock</p>
                      </div>
                      <div class="col">
                        <p class="fw-bold">$48.23</p>
                      </div>
                      <div class="col">
                        <h2 class="td-color">
                          <a href="javascript:void(0)" class="icon">
                            <i class="fas fa-times"></i>
                          </a>
                        </h2>
                        <h2 class="td-color">
                          <nuxt-link to="/page/cart" class="icon">
                            <i class="fas fa-shopping-cart"></i>
                          </nuxt-link>
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-bold">
                      {{ selectedCurrencySymbol }}{{ product.price }}
                    </p>
                  </td>
                  <td>
                    <p v-if="product.inStock > 1">In Stock</p>
                    <p v-else>Out of Stock</p>
                  </td>
                  <td>
                    <a href="javascript:void(0)" class="icon" @click.prevent="removeFromWishlist(product)">
                      <i class="fas fa-times"></i>
                    </a>
                    <a href="javascript:void(0)" @click.prevent="addToCart(product)" class="icon">
                      <i class="fas fa-shopping-cart"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>Your Wishlist is Empty</div>
        </div>
      </div>
    </section>
  </layout5>
</template>

<script>
  import layout5 from "~/layout/layouts/layout5.vue";

  import { mapGetters } from "vuex";
  export default {
    components: {
      layout5,
    },
    computed: {
      ...mapGetters({
        wishlist: "products/wishlist",
      }),
      selectedCurrencySymbol() {
        return this.$store.state.layout.selectedCurrencySymbol;
      },
    },
    methods: {
      getImageUrl(path) {
        return require("@/assets/images/" + path);
      },
      addToCart(product) {
        var item = { productId: product.id, quantity: 1 };
        this.$store.dispatch("cart/addToCart", item);
        this.$store.dispatch("clickEvents/toggleSuccessfulModal", {
          image: product.images[0].src,
          message: "Added To cart",
        });
        this.$store.dispatch("products/removeFromWishlist", product);
      },
      removeFromWishlist(product) {
        this.$store.dispatch("products/removeFromWishlist", product);
        this.$store.dispatch("clickEvents/toggleSuccessfulModal", {
          image: product.images[0].src,
          message: "Item removed from wishlist",
        });
      },
    },
  };
</script>