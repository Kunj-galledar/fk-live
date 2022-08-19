<template>
  <div class="login-section">
    <div class="materialContainer">
      <div class="box">
        <div class="login-title">
          <h2>Login</h2>
        </div>
        <div class="input">
          <!-- <label for="name">Email</label> -->
          <input type="email" placeholder="Email" name="name" id="name" required v-model="auth.email" />
          <span class="spin"></span>
          <div class="valid-feedback">Please fill the name</div>
        </div>

        <div class="input">
          <input type="password" placeholder="password" name="pass" id="pass" v-model="auth.password" />
          <span class="spin"></span>
        </div>

        <a href="javascript:void(0)" @click.prevent="$router.push('/page/forgot_password')" class="pass-forgot">Forgot
          your password?</a>

        <div class="button login">
          <button href="javascript:void(0)" @click.prevent="login" type="submit">
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
                <img src="~assets/images/inner-page/facebook.png" class="img-fluid" alt="" />
                <h6>Facebook</h6>
              </div>
            </a>
          </div>
          <div class="col-md-6">
            <a href="www.gmail.com">
              <div class="social-media google-media">
                <img src="~assets/images/inner-page/google.png" class="img-fluid" alt="" />
                <h6>Google</h6>
              </div>
            </a>
          </div>
        </div>

        <p>
          Not a member?
          <nuxt-link to="/page/register" class="theme-color">Sign up now</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        auth: {
          email: "test@gmail.com",
          password: "test@123",
        },
      };
    },
    methods: {
      login() {
        this.$fire.auth
          .signInWithEmailAndPassword(this.auth.email, this.auth.password)
          .catch(function (error) {
          })
          .then((user) => {
            // this.$store.dispatch("firebase/setUser", user);
            if (user) this.$router.back();
          });
      },
    },
  };
</script>

<!-- <style lang="scss">
@import "~/assets/scss/demo2.scss";
</style> -->