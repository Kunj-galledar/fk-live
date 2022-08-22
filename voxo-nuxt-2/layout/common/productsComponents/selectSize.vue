<template>
  <div
    id="selectSize"
    class="addeffect-section product-description border-product"
  >
    <h6 class="product-title size-text">
      select size
      <span>
        <a
          href="javascript:void(0)"
          data-bs-toggle="modal"
          data-bs-target="#sizemodal"
          >size chart</a
        >
      </span>
    </h6>

    <h6 class="error-message">please select size</h6>

    <div class="size-box">
      <ul>
        <li>
          <a href="javascript:void(0)">s</a>
        </li>
        <li>
          <a href="javascript:void(0)">m</a>
        </li>
        <li>
          <a href="javascript:void(0)">l</a>
        </li>
        <li>
          <a href="javascript:void(0)">xl</a>
        </li>
      </ul>
    </div>

    <h6 class="product-title product-title-2 d-block">quantity</h6>

    <div class="qty-box">
      <div class="input-group">
        <span class="input-group-prepend">
          <button
            type="button"
            class="btn quantity-left-minus"
            data-type="minus"
            data-field=""
            @click="changeQuantityTo(productQuantity - 1)"
          >
            <i class="fas fa-minus"></i>
          </button>
        </span>
        <input
          type="text"
          name="quantity"
          class="form-control input-number"
          v-model="productQuantity"
        />
        <span class="input-group-prepend">
          <button
            type="button"
            class="btn quantity-right-plus"
            data-type="plus"
            data-field=""
            @click="changeQuantityTo(productQuantity + 1)"
          >
            <i class="fas fa-plus"></i>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      productQuantity: 1,
    };
  },
  mounted() {
    this.productQuantity = this.product.quantity ? this.product.quantity : 1;
  },
  methods: {
    changeQuantityTo(quantity) {
      this.$emit("changeQuantityTo", quantity);
      this.productQuantity = quantity;
    },
  },
};
</script>

<style></style>
