<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8">
          <h3 class="mb-3">Billing address</h3>
          <form class="needs-validation">
            <topForm @isFormValid="isFormValid" />
            <div class="form-check ps-0 mt-3 custome-form-check">
              <input class="checkbox_animated check-it" type="checkbox" id="flexCheckDefault11" value="saveInfo"
                v-model="saveUserInfo" />
              <label class="form-check-label checkout-label" for="flexCheckDefault11">Save this information for next
                time</label>
            </div>

            <hr class="my-lg-5 my-4" />

            <h3 class="mb-3">Payment</h3>

            <paymentForm @changePaymentMethod="changePaymentMethod" />
            <button v-if="paymentMethod === 'stripe'" class="btn btn-solid-default mt-4" type="button"
              :disabled="!validInfo" @click.prevent="order">
              Continue to checkout
            </button>
          </form>
        </div>

        <yourCart :cartItems="cartItems" />
      </div>
    </div>
  </section>
</template>

<script>
  import topForm from "~/components/page/checkout/topForm.vue";
  import paymentForm from "~/components/page/checkout/paymentForm.vue";
  import { mapGetters } from "vuex";
  import yourCart from "~/components/page/checkout/yourCart.vue";
  export default {
    props: ["cartItems"],
    data() {
      return {
        saveUserInfo: false,
        validInfo: false,
        isLogin: false,
        paymentMethod: "stripe",
        userInfo: {},
      };
    },
    components: {
      yourCart,
      topForm,
      paymentForm,
    },
    computed: {
      ...mapGetters({
        cartTotal: "cart/cartTotal",
      }),
    },
    created() {
      this.isLogin = this.$store.state.firebase.user === null ? false : true;
      if (!this.isLogin) {
        this.$router.push("/page/login");
      }
    },
    methods: {
      changePaymentMethod(method) {
        this.paymentMethod = method;
      },
      order() {
        this.isLogin = this.$store.state.firebase.user === null ? false : true;
        if (this.validInfo) {
          if (this.isLogin) {
            this.payWithStripe();
          } else {
            this.$router.push("/page/login");
          }
          if (this.saveUserInfo)
            this.$store.dispatch("cart/saveUserInfo", this.userInfo);
        } else alert("Information Entered is Not valid!");
      },
      payWithStripe() {
        const handler = window.StripeCheckout.configure({
          key: "PUBLISHBLE_KEY", // 'PUBLISHBLE_KEY'
          locale: "auto",
          closed: function () {
            handler.close();
          },
          token: (token) => {
            this.$store.dispatch("products/createOrder", {
              product: this.cart,
              userDetail: this.user,
              token: token.id,
              amt: this.cartTotal,
            });
            this.$router.push("/page/order_success");
          },
        });
        handler.open({
          name: "VOXO ",
          description: "Reach to your Dream",
          amount: this.cartTotal * 100,
        });
      },
      isFormValid(value) {
        this.userInfo = value.userInfo;
        this.validInfo = value.infoValid;
      },
    },
  };
</script>