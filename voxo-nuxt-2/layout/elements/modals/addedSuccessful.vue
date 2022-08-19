<template>
  <div class="added-notification" :class="[{ show: successfulModal }]">
    <img :src="getImageUrl(successfulModalImage)" class="img-fluid" alt="" />
    <h3>{{ successfulModalMessage }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      successfulModal: (state) => state.clickEvents.successfulModal,
      successfulModalImage: (state) => state.clickEvents.successfulModalImage,
      successfulModalMessage: (state) =>
        state.clickEvents.successfulModalMessage,
    }),
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
  watch: {
    successfulModal: function () {
      if (this.successfulModal) {
        setTimeout(() => {
          this.$store.dispatch("clickEvents/toggleSuccessfulModal");
        }, 3000);
      }
    },
  },
};
</script>

<style></style> 