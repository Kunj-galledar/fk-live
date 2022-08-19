<template>
  <button type="button" @click="toLocation" :class="buttonClasses">
    <vue-feather v-if="featherType" :type="featherType"></vue-feather>
    <span>{{ buttonContent }}</span>
    <slot></slot>
  </button>
</template>

<script>
import VueFeather from "vue-feather";
export default {
  props: ["featherType", "buttonContent", "buttonClasses", "headerLocation"],
  components: {
    VueFeather,
  },
  methods: {
    toLocation() {
      if (!this.headerLocation) {
        this.headerLocation = "#";
      }
      this.$router.push(this.headerLocation);
    },
  },
};
</script>

<style></style>
