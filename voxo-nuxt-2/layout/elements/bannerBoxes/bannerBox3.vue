<template>
  <div :class="bannerClasses">
    <div
      class="poster-image sliderBackground bg-size"
      :style="{
        'background-image': `url(${getImageUrl(item.image)})`,
      }"
    >
      <img
        :src="getImageUrl(item.image)"
        class="img-fluid bg-img d-none"
        alt=""
      />
      <div class="poster-image-details">
        <div>
          <h5>{{ item.topTitle }}</h5>
          <h2>{{ item.heading }}</h2>
          <p class="d-sm-block d-none my-1">
            {{ item.feature }}
          </p>
          <h3>
            {{ selectedCurrencySymbol }}{{ item.price }}
            <span
              ><del>{{ selectedCurrencySymbol }}{{ item.mrp }}</del></span
            >
          </h3>
          <button
            href="javascript:void(0)"
            @click.prevent="$router.push('/shop/shop_left_sidebar')"
            class="btn btn-solid-default"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bannerClasses", "item"],
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
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
