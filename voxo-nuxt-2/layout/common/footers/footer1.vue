<template>
  <footer class="footer-sm-space">
    <div class="main-footer">
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="footer-contact">
              <brandLogo1 />
              <ul class="contact-lists">
                <li>
                  <span>
                    <b>phone :</b>
                    <span class="font-light"> + 185659635</span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>Address :</b>
                    <span class="font-light"
                      >1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052,
                      United States</span
                    >
                  </span>
                </li>
                <li>
                  <span>
                    <b>Email :</b>
                    <span class="font-light"> Voxo123@gmail.com</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-4 col-sm-6"
            v-for="(headings, index) in links"
            :key="index"
          >
            <div class="footer-links">
              <div class="footer-title" @click="toggleFooterMenu(headings.id)">
                <h3>{{ headings.title }}</h3>
              </div>
              <div
                class="footer-content"
                :class="headings.menuOpen ? '' : 'd-none'"
              >
                <ul>
                  <li v-for="(links, index) in headings.items" :key="index">
                    <nuxt-link :to="{ path: links.path }" class="font-dark">{{
                      links.title
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <slot :class="windowSize === 'small' ? 'd-none' : ''"></slot>
        </div>
      </div>
    </div>
    <subFooter1 />
  </footer>
</template>

<script>
import { mapState } from "vuex";
import brandLogo1 from "~/layout/elements/logo/brandLogo1.vue";
import subFooter1 from "~/layout/elements/footerElements/subFooter1.vue";
export default {
  components: {
    brandLogo1,
    subFooter1,
  },
  data() {
    return {
      windowWidth: 1500,
      windowSize: "large",
      clickingActive: false,
    };
  },
  created() {
    window.addEventListener("resize", this.getWindowWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  watch: {
    windowSize: function () {
      if (this.windowSize === "small") this.clickingActive = true;
      else this.clickingActive = false;
    },
    data() {
      return {
        windowWidth: 1500,
        windowSize: "large",
        clickingActive: false,
        lastActiveLink: 0,
      };
    },
  },
  computed: {
    ...mapState({
      links: (state) => state.footerLinks.data,
    }),
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = screen.availWidth;
      if (
        screen.availWidth < 750 &&
        screen.availWidth > 575 &&
        this.windowSize != "medium"
      )
        this.windowSize = "medium";
      else if (screen.availWidth < 575 && this.windowSize != "small")
        this.windowSize = "small";
      else if (screen.availWidth > 750 && this.windowSize != "large")
        this.windowSize = "large";
    },
    toggleFooterMenu(menuId) {
      if (this.clickingActive) {
        this.links[menuId - 1].menuOpen = !this.links[menuId - 1].menuOpen;
      }
    },
    getWindowWidth() {
      this.windowWidth = screen.availWidth;
      if (
        screen.availWidth < 750 &&
        screen.availWidth > 575 &&
        this.windowSize != "medium"
      )
        this.windowSize = "medium";
      else if (screen.availWidth < 575 && this.windowSize != "small")
        this.windowSize = "small";
      else if (screen.availWidth > 750 && this.windowSize != "large")
        this.windowSize = "large";
    },
    toggleFooterMenu(menuId) {
      let isActive = this.links[menuId].menuOpen;
      this.links.forEach((item, index) => {
        this.links[index].menuOpen = false;
      });
      this.links[menuId].menuOpen = isActive;
      if (this.clickingActive) {
        this.links[menuId].menuOpen = !this.links[menuId].menuOpen;
      }
    },
  },
  watch: {
    windowSize: function () {
      if (this.windowSize === "small") this.clickingActive = true;
      else this.clickingActive = false;
    },
    clickingActive: function () {
      if (!this.clickingActive) {
        this.links.forEach((item) => (item.menuOpen = true));
      } else {
        this.links.forEach((item) => (item.menuOpen = false));
      }
    },
  },
  computed: {
    ...mapState({
      links: (state) => state.footerLinks.data,
    }),
  },
};
</script>

<style></style>