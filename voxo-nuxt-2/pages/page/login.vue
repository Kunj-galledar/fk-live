<template>
  <div class="login-section">
    <div class="materialContainer">
      <div class="box">
        <div class="login-title">
          <h2>Login</h2>
        </div>
        <div class="input">
          <label
            for="email"
            :style="[{ 'line-height': selected['email'] ? '18px' : '60px' }]"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            required
            v-model="auth.email"
            @focus.prevent="select('email')"
          />
          <span
            class="spin"
            :style="[{ width: selected['email'] ? '100%' : '0%' }]"
          ></span>
          <div class="valid-feedback">Please fill the name</div>
        </div>
        <div class="input">
          <label
            for="password"
            :style="[{ 'line-height': selected['password'] ? '18px' : '60px' }]"
            >Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            v-model="auth.password"
            @focus.prevent="select('password')"
          />
          <span
            class="spin"
            :style="[{ width: selected['password'] ? '100%' : '0%' }]"
          ></span>
          <div class="valid-feedback">Please fill the name</div>
        </div>
        <a
          href="javascript:void(0)"
          @click.prevent="$router.push('/page/forgot_password')"
          class="pass-forgot"
          >Forgot your password?</a
        >

        <div class="button login">
          <button
            href="javascript:void(0)"
            @click.prevent="login"
            type="submit"
          >
            <span>Log In</span>
            <i class="fa fa-check"></i>
          </button>
        </div>

        <p class="sign-category">
          <span>Or sign in with</span>
        </p>

        <div class="row gx-md-3 gy-3">
          <div class="col-md-6">
            <a href="www.facebook.com">
              <div class="social-media fb-media">
                <img
                  src="~assets/images/inner-page/facebook.png"
                  class="img-fluid"
                  alt=""
                />
                <h6>Facebook</h6>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a href="www.gmail.com">
              <div class="social-media google-media">
                <img
                  src="~assets/images/inner-page/google.png"
                  class="img-fluid"
                  alt=""
                />
                <h6>Google</h6>
              </div>
            </a>
          </div>
        </div>

        <p>
          Not a member?
          <nuxt-link to="/page/register" class="theme-color"
            >Sign up now</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeCss: "/demo2.css",
      auth: { email: "test@gmail.com", password: "test@123" },
      selected: { email: false, password: false },
    };
  },
  head() {
    return {
      link: [
        // { rel: "stylesheet", type: "text/css", href: this.themeCss, id: "color-link", },
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      ],
    };
  },
  created() {
    let layoutMode = localStorage.getItem("colorMode");
    if (layoutMode === "dark") this.themeCss = "/voxo/css/demo2_dark.css";
    else this.themeCss = "/voxo/css/demo2.css";
  },
  methods: {
    select(textbox) {
      if (this.auth.email === "") this.selected.email = false;
      if (this.auth.password === "") this.selected.password = false;
      this.selected[textbox] = true;
    },
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {})
        .then((user) => {
          if (user) this.$router.back();
        });
    },
  },
  mounted() {
    this.auth.email.length != 0 ? this.select("email") : false;
    this.auth.password.length != 0 ? this.select("password") : false;
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/demo2.scss";
</style>
