<template>
  <div>
    <input type="text" v-model="copyText" />
    <button @click.prevent="copyThisText">click me to copy</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: "",
    };
  },
  methods: {
    copyThisText() {
      navigator.clipboard.writeText(this.copyText);
    },
  },
};
</script>

<style></style>
