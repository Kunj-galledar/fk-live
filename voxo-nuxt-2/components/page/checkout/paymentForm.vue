<template>
  <div>
    <div class="d-block my-3">
      <div class="form-check custome-radio-box">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="stripe"
          id="credit"
          v-model="paymentMethod"
        />
        <label class="form-check-label" for="credit">Stripe</label>
      </div>

      <div class="form-check custome-radio-box">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="paypal"
          id="debit"
          v-model="paymentMethod"
        />
        <label class="form-check-label" for="debit">Paypal</label>
      </div>
    </div>
    <!-- <div class="row g-4">
      <div class="col-md-6">
        <label for="cc-name" class="form-label">Name on card</label>
        <input type="text" class="form-control" id="cc-name" />
        <div id="emailHelp" class="form-text">
          Full name as displayed on card
        </div>
      </div>
      <div class="col-md-6">
        <label for="cc-number" class="form-label">Credit card number</label>
        <input type="text" class="form-control" id="cc-number" required="" />
        <div class="invalid-feedback">Credit card number is required</div>
      </div>
      <div class="col-md-3">
        <label for="expiration" class="form-label">Expiration</label>
        <input type="text" class="form-control" id="expiration" />
      </div>
      <div class="col-md-3">
        <label for="cc-cvv" class="form-label">CVV</label>
        <input type="text" class="form-control" id="cc-cvv" />
      </div>
    </div> -->
    <div class="text-right">
      <no-ssr>
        <paypal-checkout
          :amount="getamt()"
          currency="USD"
          :client="paypal"
          :env="environment"
          :button-style="button_style"
          v-on:payment-authorized="onPaymentComplete"
          v-on:payment-cancelled="onCancelled()"
          v-if="paymentMethod === 'paypal'"
        >
        </paypal-checkout>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: "stripe",
      cartTotal: 1000,
      paypal: {
        sandbox: "Your_Sendbox_Key",
      },
      environment: "sandbox",
      button_style: {
        label: "checkout",
        size: "medium", // small | medium | large | responsive
        shape: "pill", // pill | rect
        color: "blue", // gold | blue | silver | black
      },
    };
  },
  watch: {
    paymentMethod: function () {
      this.$emit("changePaymentMethod", this.paymentMethod);
    },
  },
  methods: {
    getamt() {
      return this.cartTotal.toString();
    },
    onPaymentComplete: function (data) {
      this.$store.dispatch("cart/createOrder", {
        product: this.cart,
        userDetail: this.user,
        token: data.orderID,
        amt: this.cartTotal,
      });
      this.$router.push("/page/order-success");
    },
  },
};
</script>

<style></style>
