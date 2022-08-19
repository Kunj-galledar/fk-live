<template>
  <div
    class="modal fade quick-view-modal"
    id="quick-view"
    :class="showModal ? 'show' : ''"
    :style="{ display: showModal ? 'block' : 'none' }"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="toggleQuickViewModal"
        ></button>
        <div class="modal-body">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="quick-view-image">
                <div class="quick-view-slider ratio_2">
                  <vue-slick-carousel
                    v-bind="settings"
                    ref="c1"
                    :asNavFor="$refs.c2"
                    :focusOnSelect="true"
                  >
                    <div
                      v-for="(image, index) in product.images"
                      :key="'a' + index"
                      class="sliderBackground bg-size"
                      :style="{
                        'background-image': `url(${getImageUrl(image.src)})`,
                      }"
                    >
                      <img
                        :src="getImageUrl(image.src)"
                        class="img-fluid bg-img d-none"
                        alt="product"
                      />
                    </div>
                  </vue-slick-carousel>
                </div>
                <div class="quick-nav">
                  <vue-slick-carousel
                    v-bind="settingsVertical"
                    :style="{ bottom: '0px' }"
                    ref="c2"
                    :asNavFor="$refs.c1"
                    :slidesToShow="4"
                    :focusOnSelect="true"
                  >
                    <div
                      v-for="(vimage, index) in product.images"
                      :key="'b' + index"
                    >
                      <img
                        :src="getImageUrl(vimage.src)"
                        class="img-fluid"
                        alt="product"
                      />
                    </div>
                  </vue-slick-carousel>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="product-right">
                <h2 class="mb-2">{{ product.name }}</h2>
                <ul class="rating mt-1">
                  <li v-for="(star, index) in product.ratingStars" :key="index">
                    <i class="fas fa-star theme-color"></i>
                  </li>
                  <li
                    v-for="(star, index) in 5 - product.ratingStars"
                    :key="'a' + index"
                  >
                    <i class="fas fa-star"></i>
                  </li>

                  <li class="font-light" v-if="product.inStock > 1">
                    (In stock)
                  </li>
                  <li class="font-light" v-else>(Out Of stock)</li>
                </ul>
                <div class="price mt-3">
                  <h3>{{ selectedCurrencySymbol }}{{ product.price }}</h3>
                </div>
                <div class="color-types" v-if="product.colors.length != 0">
                  <h4>colors</h4>
                  <ul class="color-variant mb-0">
                    <li
                      class="selected"
                      :style="{ 'background-color': color }"
                      v-for="(color, index) in product.colors"
                      :key="index"
                    ></li>
                  </ul>
                </div>
                <div class="size-detail" v-if="product.sizeoption">
                  <h4>size</h4>
                  <ul class="">
                    <li
                      v-for="(size, index) in product.sizeoption"
                      :key="index"
                    >
                      {{ size }}
                    </li>
                  </ul>
                </div>
                <div class="product-details">
                  <h4>product details</h4>
                  <ul>
                    <li>
                      <span class="font-light">Brand :</span>
                      {{ product.brand }}
                    </li>
                    <li>
                      <span class="font-light">Category :</span>
                      {{ product.category }}
                    </li>
                  </ul>
                </div>
                <div class="product-btns">
                  <a
                    @click.prevent="addToCart(product.id)"
                    class="btn btn-solid-default btn-sm"
                    >Add to cart</a
                  >
                  <a
                    @click.prevent="
                      redirectTo('/product/product_left_sidebar/', product.id)
                    "
                    class="btn btn-solid-default btn-sm"
                    >View details</a
                  >
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

export default {
  props: ["showModal"],
  data() {
    return {
      image: "/_nuxt/assets/images/fashion/product/front/4.jpg",
      settings: {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
      settingsVertical: {
        infinite: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "10px",
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      product: "clickEvents/productToShow",
    }),
    selectedCurrencySymbol() {
      return this.$store.state.layout.selectedCurrencySymbol;
    },
  },
  methods: {
    addToCart(product) {
      let payload = {
        image: this.product.images[0].src,
        message: "Added To Cart",
      };
      var item = { product: product, quantity: 1 };
      this.$store.dispatch("cart/addToCart", item);
      this.$store.dispatch("clickEvents/toggleSuccessfulModal", payload);
      this.$store.dispatch("clickEvents/closeOverlay");
    },
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
    redirectTo(path, productId) {
      this.toggleQuickViewModal();
      if (productId != undefined) this.$router.push(path + productId);
      else this.$router.push(path);
    },
    toggleQuickViewModal() {
      this.$store.dispatch("clickEvents/toggleQuickViewModal");
    },
  },
  updated() {
    console.log("product is:", this.product);
  },
};
</script>

<style lang="scss" scoped></style>
