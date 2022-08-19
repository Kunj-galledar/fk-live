<template>
  <div>
    <transition>
      <nuxt id="body-content" />
    </transition>
    <theme-settings />
    <div class="tap-to-top" v-scroll-to="'#body-content'">
      <a href="#home">
        <i class="fas fa-chevron-up"></i>
      </a>
    </div>
    <div class="bg-overlay show" v-if="overlay" @click.prevent="closeOverlay"></div>
    <cartSuccessful :showModal="cartModal" />
    <quickViewModal :showModal="quickViewModal" />
    <addedSuccessfulModal />
    <copySettingsModal :showModal="copySettingsView" />
  </div>
</template>
<script>
  import {
    mapState,
    mapGetters
  } from "vuex";
  import quickViewModal from "~/layout/elements/modals/quickViewModal.vue";
  import cartSuccessful from "~/layout/elements/modals/cartSuccessful.vue";
  import themeSettings from "~/layout/elements/themeSettings.vue";
  import addedSuccessfulModal from "~/layout/elements/modals/addedSuccessful.vue";
  import copySettingsModal from "~/layout/elements/modals/copySettings.vue";
  export default {
    data() {
      return {
        themeCss: "/voxo/css/bootstrap.css",
      };
    },
    components: {
      themeSettings,
      quickViewModal,
      cartSuccessful,
      addedSuccessfulModal,
      copySettingsModal,
    },
    watch: {
      primaryColor: function () {
        console.log("primary color in default:", this.primaryColor);
      },
      async $route(to, from) {
        console.log("to:" + to + " from:" + from);
        window.scrollTo({
          behaviour: "smooth",
          top: 0
        });
        setTimeout(() => {
          this.$store.dispatch("layout/setLayoutType", this.layoutType);
          if (this.layoutType === "ltr") {
            document
              .getElementById("bootstrap-link")
              .setAttribute("href", "/voxo/css/bootstrap.min.css");
          } else {
            document
              .getElementById("bootstrap-link")
              .setAttribute("href", "/voxo/css/bootstrap.rtl.min.css");
          }
        }, 5000);
      },
    },
    computed: {
      ...mapState({
        selectedCurrency: (state) => state.layout.selectedCurrency,
        selectedCurrencySymbol: (state) => state.layout.selectedCurrencySymbol,
        currencyConversionMultiple: (state) =>
          state.layout.currencyConversionMultiple,
        cartModal: (state) => state.clickEvents.cartModal,
        quickViewModal: (state) => state.clickEvents.quickViewModal,
        overlay: (state) => state.clickEvents.overlay,
        copySettingsView: (state) => state.clickEvents.copySettings,
        layoutType: (state) => state.layout.layoutType,
        primaryColor: (state) => state.layout.primaryColor,
      }),
      ...mapGetters({
        cartItems: "cart/cartItems",
      }),
    },
    methods: {
      closeOverlay() {
        this.$store.dispatch("clickEvents/closeOverlay");
      },
      beforeWindowUnload() {
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        localStorage.setItem("primaryColor", this.primaryColor);
        localStorage.setItem("selectedCurrency", this.selectedCurrency);
        localStorage.setItem(
          "selectedCurrencySymbol",
          this.selectedCurrencySymbol
        );
        localStorage.setItem(
          "currencyConversionMultiple",
          this.currencyConversionMultiple
        );
      },
    },
    beforeDestroy() {
      window.removeEventListener("beforeunload", this.beforeWindowUnload);
    },
    mounted() {
      window.addEventListener("beforeunload", this.beforeWindowUnload);
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 3000);
      });
    },
  };
</script>