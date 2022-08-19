<template>
  <div class="col-sm-12">
    <div class="table-responsive mt-4">
      <table class="table cart-table">
        <thead>
          <tr class="table-head">
            <th scope="col">image</th>
            <th scope="col">product name</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">action</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in cartItems" :key="index" v-if="cartItems">
          <tr>
            <td>
              <a
                href="javascript:void(0)"
                @click.prevent="$router.push('/product/product_left_sidebar')"
              >
                <img :src="getImageUrl(item.images[0].src)" alt="" />
              </a>
            </td>
            <td>
              <nuxt-link to="/product/product_left_sidebar">{{
                item.name
              }}</nuxt-link>
              <div class="mobile-cart-content row">
                <div class="col">
                  <div class="qty-box">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quantity"
                        class="form-control input-number"
                        :value="item.quantity"
                        @change="changeItemQuantity($event, item.id)"
                        min="1"
                        :max="item.inStock"
                      />
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h2>
                    {{ selectedCurrencySymbol
                    }}{{ (item.price * item.quantity).toFixed(2) }}
                  </h2>
                </div>
                <div class="col">
                  <h2 class="td-color">
                    <a
                      href="javascript:void(0)"
                      @click.prevent="removeItem(item.id)"
                    >
                      <i class="fas fa-times"></i>
                    </a>
                  </h2>
                </div>
              </div>
            </td>
            <td>
              <h2>{{ selectedCurrencySymbol }}{{ item.price }}</h2>
            </td>
            <td>
              <div class="qty-box">
                <div class="input-group">
                  <input
                    type="number"
                    name="quantity"
                    class="form-control input-number"
                    :value="item.quantity"
                    @change="changeItemQuantity($event, item.id)"
                    min="1"
                    :max="item.inStock"
                  />
                </div>
              </div>
            </td>
            <td>
              <a href="javascript:void(0)" @click.prevent="removeItem(item.id)">
                <i class="fas fa-times"></i>
              </a>
            </td>
            <td>
              <h2 class="td-color">
                {{ selectedCurrencySymbol
                }}{{ (item.price * item.quantity).toFixed(2) }}
              </h2>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          Cart is Empty
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItems"],
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    changeItemQuantity(event, productId) {
      let payload = {
        productId: productId,
        quantity: parseInt(event.target.value),
      };
      this.$store.dispatch("cart/changeQuantityTo", payload);
    },
    removeItem(productId) {
      this.$store.dispatch("cart/removeCartItem", productId);
    },
  },
  computed: {
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
};
</script>

<style></style>
