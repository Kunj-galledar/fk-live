import Vue from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import PayPal from "vue-paypal-checkout";
import VueScrollTo from "vue-scrollto";
import VueSlickCarousel from "vue-slick-carousel-rtl";
// import ZoomOnHover from "vue-zoom-on-hover";

Vue.component("paypal-checkout", PayPal);
Vue.component("vue-slick-carousel", VueSlickCarousel);
Vue.use(VueMasonryPlugin);
Vue.use(VueScrollTo);
