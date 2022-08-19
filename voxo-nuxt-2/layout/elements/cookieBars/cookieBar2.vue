<template>
  <div
    class="cookie-bar-section-2"
    :class="[{ hide: !show }, cookieBarClasses]"
  >
    <div class="content">
      <img src="~assets/images/cookie.png" alt="" />
      <p class="font-light">
        This website use cookies to ensure you get the best experience on our
        website.
      </p>
      <div class="cookie-buttons">
        <button
          class="btn default-theme"
          id="button"
          @click.prevent="setCookie"
        >
          I understand
        </button>
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
    if (localStorage.getItem("cookieSet")) this.show = true;
  },
};
</script>
