<template>
  <div class="theme-setting">
    <ul>
      <li>
        <button
          id="darkButton"
          class="btn btn-sm p-0 dark-buttton"
          @click.prevent="toggleCopySettings"
        >
          Copy
        </button>
      </li>
      <li>
        <button
          id="darkButton"
          class="btn btn-sm p-0 dark-buttton"
          @click.prevent="createStyle"
        >
          Dark
        </button>
      </li>
      <li>
        <button class="btn btn-sm p-0 rtl-button" @click.prevent="toggleLayout">
          <span v-if="themeLayout === 'rtl'">LTR</span>
          <span v-else>RTL</span>
        </button>
      </li>
      <li class="color-picker">
        <input
          v-model="themeColor"
          type="color"
          id="ColorPicker1"
          title="Choose your color"
        />
        <!-- class="form-control form-control-color" -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      themeColor: "",
      themeMode: "",
      themeLayout: "ltr",
    };
  },
  computed: {
    ...mapState({
      themeSettings: (state) => state.layout.themeConfig,
      primaryColor: (state) => state.layout.primaryColor,
    }),
  },
  head() {
    return {
      title: "Fashion Store",
      htmlAttrs: {
        class: this.themeMode,
      },
    };
  },
  methods: {
    toggleLayout() {
      if (this.themeLayout === "ltr") {
        this.themeLayout = "rtl";
        document
          .getElementById("bootstrap-link")
          .setAttribute("href", "/voxo/css/bootstrap.rtl.min.css");
      } else {
        this.themeLayout = "ltr";
        document
          .getElementById("bootstrap-link")
          .setAttribute("href", "/voxo/css/bootstrap.min.css");
      }
      this.$store.dispatch("layout/setLayoutType", this.themeLayout);
    },
    createStyle() {
      var layoutColor = localStorage.getItem("colorMode");

      if (layoutColor === "dark") {
        this.themeMode = "";
        localStorage.setItem("colorMode", "light");
        // this.$store.dispatch("layout/setLayoutMode", "/voxo/demo2.css");
        // this.$router.push("/redirect/redirectPage");
      } else {
        this.themeMode = "dark";
        localStorage.setItem("colorMode", "dark");
        // this.$store.dispatch("layout/setLayoutMode", "/voxo/demo2_dark.css");
        // this.$router.push("/redirect/redirectPage");
      }
    },
    toggleCopySettings() {
      this.$store.dispatch("clickEvents/toggleCopySettings");
      console.log(
        "comming to copysettings method",
        this.$store.state.clickEvents.copySettings
      );
    },
  },
  mounted() {
    let userDefinedSettings = this.themeSettings.filter(
      (items) => items.type === "userDefined"
    )[0];
    console.log("userDefinedSettings:", this);
    // if (typeof userDefinedSettings !== "undefined") {
    //   localStorage.setItem("primaryColor", userDefinedSettings.primaryColor);
    //   document.body.style.setProperty("--theme-color", this.themeColor);
    // }
    console.log(
      "themeColor color in themesettings:",
      localStorage.getItem("primaryColor")
    );

    this.themeColor = localStorage.getItem("primaryColor")
      ? localStorage.getItem("primaryColor")
      : "#e22454";
  },
  watch: {
    primaryColor: function () {
      this.themeColor = this.primaryColor;
      console.log(
        "theme color:" + this.themeColor + "primary color:",
        this.primaryColor
      );
      document.body.style.setProperty("--theme-color", this.primaryColor);
    },
    themeColor: function () {
      // localStorage.setItem("primaryColor", this.themeColor);
      this.$store.dispatch("layout/setPrimaryColor", {
        primaryColor: this.themeColor,
      });
      // document.body.style.setProperty("--theme-color", this.themeColor);
    },
  },
};
</script>

<style></style>
