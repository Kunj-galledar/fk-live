<template>
  <!-- <div v-if="loading" class="loading-page">
    <div class="loading">
      <img src="/loader.gif" alt="" id="loader" />
    </div>
  </div> -->
  <div class="loading-page">
    <div class="loading">
      <div class="topDiv"></div>
      <img src="/loader.gif" alt="" id="loader" />
      <div class="bottomDiv"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
.loading {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
}
.topDiv {
  width: 100%;
  height: 40vh;
  background-image: linear-gradient(to top, white 30%, rgb(68, 68, 68));

  top: 0;
}
.bottomDiv {
  width: 100%;
  height: 40vh;

  /* background-color: red; */
  background-image: linear-gradient(to bottom, white 30%, rgb(68, 68, 68));
  bottom: 0;
}
img {
  height: 20vh;
}
/* .loading-page {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
} */
</style>
