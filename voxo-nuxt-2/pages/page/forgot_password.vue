<template>
  <div class="login-section">
    <div class="materialContainer">
      <div class="box">
        <div class="login-title">
          <h2>Forgot Password</h2>
        </div>
        <div class="input">
          <label for="emailname">Enter Email Address</label>
          <input type="text" name="name" class="is-invalid" id="emailname" />
          <span class="spin"></span>
        </div>
        <div class="button login button-1">
          <button href="javascript:void(0)" @click.prevent="$router.push('/')">
            <span>Send</span>
            <i class="fa fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeCss: "/demo2.css",
    };
  },
  head() {
    return {
      link: [
        // { rel: "stylesheet", type: "text/css", href: this.themeCss, id: "color-link", },
      ],
    };
  },
  created() {
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo2_dark.css";
    else this.themeCss = "/voxo/css/demo2.css";
  },
};
</script>

<style lang="scss">
@import "~assets/scss/demo2.scss";
</style>
