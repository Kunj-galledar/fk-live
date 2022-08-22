import Vue from "vue";
import Vuex from "vuex";
import menu from "./modules/menu";
import cart from "./modules/cart";
import compare from "./modules/compare";
import products from "./modules/products";
import footerLinks from "./modules/footerLinks";
import categoryMenu from "./modules/categoryMenu";
import popularCards from "./modules/popularCards";
import blogData from "./modules/blogData";
import filters from "./modules/filters";
import information from "./modules/information";
import banners from "./modules/banners";
import categories from "./modules/categories";
import layout from "./modules/layout";
import homeSliders from "./modules/homeSliders";
import clickEvents from "./modules/clickEvents";
import firebase from "./modules/firebase";

Vue.use(Vuex);
const createStore = () => {
  return new Vuex.Store({
    modules: {
      menu,
      cart,
      compare,
      products,
      footerLinks,
      categoryMenu,
      popularCards,
      blogData,
      filters,
      information,
      banners,
      categories,
      layout,
      homeSliders,
      clickEvents,
      firebase,
    },
  });
};
export default createStore;
