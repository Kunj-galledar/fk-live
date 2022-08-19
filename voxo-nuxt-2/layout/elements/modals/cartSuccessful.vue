<template>
  <div
    class="modal fade cart-modal"
    :class="showModal ? 'show' : ''"
    id="addtocart"
    :style="{ display: showModal ? 'block' : 'none' }"
    v-if="product.length != 0"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            @click="toggleCartModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="modal-contain">
            <div>
              <div class="modal-messages">
                <i class="fas fa-check"></i> {{ product.name }}
                successfully added to you cart.
              </div>
              <div class="modal-product">
                <div class="modal-contain-img">
                  <img
                    :src="getImageUrl(product.images[0].src)"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="modal-contain-details">
                  <h4>{{ product.name }}</h4>
                  <p class="font-light my-2">Qty : {{ product.quantity }}</p>
                  <div class="product-total">
                    <h5>
                      TOTAL :
                      <span
                        >{{ selectedCurrencySymbol
                        }}{{ product.price * product.quantity }}</span
                      >
                    </h5>
                  </div>
                  <div class="shop-cart-button mt-3">
                    <a
                      href="javascript:void(0)"
                      @click.prevent="redirectTo('/shop/shop_left_sidebar')"
                      class="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                      >CONTINUE SHOPPING</a
                    >
                    <a
                      href="javascript:void(0)"
                      @click.prevent="redirectTo('/page/cart')"
                      class="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                      >VIEW CART</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ratio_asos mt-4">
            <div class="container">
              <div class="row m-0">
                <div class="col-sm-12 p-0">
                  <div
                    class="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space spacing-slider"
                  >
                    <vue-slick-carousel v-bind="settings" ref="brandCarousel">
                      <div
                        v-for="(rproduct, index) in relatedProducts.filter(
                          (item) => item.category != 'vr'
                        )"
                        :key="index"
                      >
                        <div class="product-box">
                          <div class="img-wrapper">
                            <div class="front">
                              <a
                                href="javascript:void(0)"
                                @click.prevent="changePage(rproduct.id)"
                                class="sliderBackground bg-size"
                                :style="{
                                  'background-image': `url(${getImageUrl(
                                    rproduct.images[0].src
                                  )})`,
                                }"
                              >
                                <img
                                  :src="
                                    require('@/assets/images/' +
                                      rproduct.images[0].src)
                                  "
                                  class="bg-img d-none"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="product-details text-center">
                            <div class="rating-details d-block text-center">
                              <span class="font-light grid-content">{{
                                rproduct.name
                              }}</span>
                            </div>
                            <div class="main-price mt-0 d-block text-center">
                              <h3 class="theme-color">
                                {{ selectedCurrencySymbol }}{{ rproduct.price }}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </vue-slick-carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { quickViewCarousel } from "~/static/data/SliderSettingsData";
export default {
  props: ["showModal"],
  data() {
    return {
      settings: quickViewCarousel,
    };
  },
  computed: {
    ...mapGetters({
      product: "cart/lastAddedProduct",
      relatedProducts: "clickEvents/relatedProducts",
    }),
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    changePage(productId) {
      this.toggleCartModal();
      this.$router.push("/product/product_left_sidebar/" + productId);
    },
    redirectTo(page) {
      this.toggleCartModal();
      this.$router.push(page);
    },
    toggleCartModal() {
      this.$store.dispatch("clickEvents/toggleCartModal");
    },
  },
};
</script>

<style lang="scss" scoped></style>
