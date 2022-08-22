import Products from "../../data/products.json";
import axios from "axios";

const axiosData = [];

(async function () {
  await axios
    .get("data/products.json")
    .then((res) => {
      axiosData.push(...res.data.data);
    })
    .catch((err) => console.log("error in Fetching data.", err));
  state.lastAddedProduct = axiosData[0];
})();
const state = {
  allProducts: axiosData,
  categoryMobileMenu: false,
  cartModal: false,
  quickViewModal: false,
  overlay: false,
  productId: 1,
  copySettings: false,
  shopFilterBar: false,
  successfulModal: false,
  lastAddedProduct: {},
  successfulModalImage: "fashion/banner/2.jpg",
  successfulModalMessage: "Item Added ",
  dashboardLinks: false,
};

// getters
const getters = {
  productToShow(state) {
    let productToReturn = {};
    productToReturn = state.allProducts.filter((product) => {
      if (product.id === state.productId) return true;
    })[0];
    return productToReturn;
  },
  relatedProducts(state, getters) {
    let type = getters.productToShow.type;
    let productsToReturn = [];
    productsToReturn = state.allProducts.filter((product) => {
      if (product.type === type) return true;
    });
    if (productsToReturn.length === 0) return state.allProducts.slice(0, 6);
    return productsToReturn;
  },
};

// mutations
const mutations = {
  toggleCategoryMobileMenu(state) {
    state.categoryMobileMenu = !state.categoryMobileMenu;
    state.overlay = !state.overlay;
  },
  toggleCartModal(state) {
    state.cartModal = !state.cartModal;
    state.overlay = !state.overlay;
  },
  toggleQuickViewModal(state) {
    state.quickViewModal = !state.quickViewModal;
    state.overlay = !state.overlay;
  },
  closeOverlay(state) {
    state.overlay = false;
    state.categoryMobileMenu = false;
    state.cartModal = false;
    state.quickViewModal = false;
    state.shopFilterBar = false;
    state.copySettings = false;
    state.dashboardLinks = false;
  },
  changeProductId(state, payload) {
    console.log("payload in changed id:", payload);
    if (payload != undefined || payload > 1) {
      state.allProducts.every((item) => {
        if (item.id === payload) {
          state.lastAddedProduct = item;
          return false;
        } else return true;
      });
      state.productId = payload;
    } else {
      state.lastAddedProduct = state.allProducts[0];
      state.productId = 1;
    }
  },
  toggleOverlay(state) {
    state.overlay = !state.overlay;
  },
  toggleShopFilterBar(state) {
    state.shopFilterBar = !state.shopFilterBar;
    state.overlay = !state.overlay;
  },
  toggleShopFilterBarNoOverlay(state) {
    state.shopFilterBar = !state.shopFilterBar;
  },
  toggleSuccessfulModal(state, payload) {
    //  payload = {
    //   image: image_src(without /_nuxt/assets/images/),
    //   message: "message_to_display",
    // };
    if (payload != undefined) {
      state.successfulModalImage = payload.image;
      state.successfulModalMessage = payload.message;
    }
    state.successfulModal = !state.successfulModal;
  },
  toggleCopySettings(state) {
    if (state.copySettings) {
      state.copySettings = false;
      state.overlay = false;
    } else {
      state.overlay = true;
      state.copySettings = true;
    }
  },
  toggleDashboardLinks(state) {
    state.dashboardLinks = !state.dashboardLinks;
    state.overlay = !state.overlay;
  },
};

// actions
const actions = {
  toggleCategoryMobileMenu({ commit }) {
    commit("toggleCategoryMobileMenu");
  },
  toggleCartModal({ commit }) {
    commit("toggleCartModal");
  },
  toggleOverlay({ commit }) {
    commit("toggleOverlay");
  },
  closeOverlay({ commit }) {
    commit("closeOverlay");
  },
  toggleQuickViewModal({ commit }) {
    commit("toggleQuickViewModal");
  },
  changeProductId({ commit }, payload) {
    commit("changeProductId", payload);
  },
  toggleShopFilterBar({ commit }) {
    commit("toggleShopFilterBar");
  },
  toggleShopFilterBarNoOverlay({ commit }) {
    commit("toggleShopFilterBarNoOverlay");
  },

  toggleSuccessfulModal({ commit }, payload) {
    commit("toggleSuccessfulModal", payload);
  },
  toggleCopySettings({ commit }) {
    commit("toggleCopySettings");
  },
  toggleDashboardLinks({ commit }) {
    commit("toggleDashboardLinks");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
