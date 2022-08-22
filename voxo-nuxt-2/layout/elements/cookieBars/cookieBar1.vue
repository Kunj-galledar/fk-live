<template>
  <div class="cookie-bar-section" :class="[{ hide: !show }, cookieBarClasses]">
    <img src="~assets/images/cookie.png" alt="" />
    <div class="content">
      <h3>Cookies Consent</h3>
      <p class="font-light">
        This website use cookies to ensure you get the best experience on our
        website.
      </p>
      <div class="cookie-buttons">
        <button
          class="btn btn-solid-default"
          id="button"
          @click.prevent="setCookie"
        >
          I understand
        </button>
        <a href="javascript:void(0)" class="btn default-light1">Learn more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cookieBarClasses"],
  data() {
    return {
      show: true,
    };
  },
  methods: {
    setCookie() {
      this.show = false;
      localStorage.setItem("cookieSet", true);
    },
  },
  created() {
    if (localStorage.getItem("cookieSet")) this.show = false;
  },
};
</script>
