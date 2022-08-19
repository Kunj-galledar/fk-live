<template>
  <div
    class="modal fade quick-view-modal"
    id="quick-view"
    :class="showModal ? 'show' : ''"
    :style="{ display: showModal ? 'block' : 'none' }"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="toggleCopySettings"
        ></button>
        <div class="modal-body">
          <div class="modal-contain">
            <div>
              <div class="modal-heading mb-5">
                <h2>Copy Layout Settings</h2>
              </div>
              <div class="modal-content">
                <div class="modal-contain-img">
                  <p>
                    <span>Dark Mode:</span
                    ><span>{{ themeSettings.darkMode }}</span>
                  </p>
                  <p>
                    <span>Layout Type:</span
                    ><span>{{ themeSettings.layoutType }}</span>
                  </p>
                  <p>
                    <span>Layout Color:</span
                    ><span>{{ themeSettings.themeColor }}</span>
                  </p>
                </div>
                <div class="modal-contain-details">
                  <div class="product-total"></div>
                  <div class="shop-cart-button mt-3">
                    <a
                      href="javascript:void(0)"
                      @click.prevent="copySettingsToClipboard"
                      class="
                        btn
                        default-light-theme
                        conti-button
                        default-theme default-theme-2
                        rounded
                      "
                      >Copy Settings</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
  data() {
    return {
      themeSettings: {
        darkMode: false,
        layoutType: "ltr",
        themeColor: "#e22454",
      },
    };
  },
  methods: {
    redirectTo(path, productId) {
      this.toggleQuickViewModal();
      if (productId != undefined) this.$router.push(path + productId);
      else this.$router.push(path);
    },
    toggleCopySettings() {
      this.$store.dispatch("clickEvents/toggleCopySettings");
    },
    copySettingsToClipboard() {
      let copyJson = `{
            "type":"default",
            "layout":"${this.themeSettings.layoutType}",
            "primaryColor":"${this.themeSettings.themeColor}",
            "darkMode":${this.themeSettings.darkMode}
          }`;
      navigator.clipboard.writeText(copyJson);
    },
  },
  mounted() {
    var storageColor = localStorage.getItem("primaryColor");
    var storageLayoutType = localStorage.getItem("layoutType");
    var storageLayoutMode = localStorage.getItem("colorMode");
    if (storageColor != null) {
      this.themeSettings.themeColor = storageColor;
    }
    if (storageLayoutType != null) {
      this.themeSettings.themeType = storageLayoutType;
    }
    if (storageLayoutMode != null) {
      storageLayoutMode === "dark"
        ? (this.themeSettings.darkMode = true)
        : (this.themeSettings.darkMode = false);
    }
    console.log("Layout settings:", this.themeSettings);
  },
  // updated() {

  //   var storageColor = localStorage.getItem("primaryColor");
  //   var storageLayoutType = localStorage.getItem("layoutType");
  //   var storageLayoutMode = localStorage.getItem("colorMode");
  //   if (storageColor != null) {
  //     this.themeSettings.themeColor = storageColor
  //   }
  //   if (storageLayoutType != null) {
  //     this.themeSettings.themeType = storageLayoutType
  //   }
  //   if (storageLayoutMode != null) {
  //     storageLayoutMode === 'dark' ? this.themeSettings.darkMode = true : this.themeSettings.darkMode = false
  //     this.themeSettings.darkMode = storageLayoutMode
  //   }
  //   console.log('Layout settings:', this.themeSettings)
  // }
};
</script> 