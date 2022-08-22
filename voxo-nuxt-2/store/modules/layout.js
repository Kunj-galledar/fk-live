// import themeSettings from "../../data/themeSettings.json";

import axios from "axios";
const axiosData = [];
let localPrimaryColor = "";
(async function () {
  // console.log(localStorage.getItem("primaryColor"));
  await axios
    .get("data/themeSettings.json")
    .then((res) => {
      axiosData.push(...res.data.data);
    })
    .catch((err) => console.log("error in Fetching data.", err));
  localPrimaryColor = localStorage.getItem("primaryColor") || "#e22454";
  console.log("primarycolor:", localStorage.getItem("primaryColor"));
  state.selectedCurrency = localStorage.getItem("selectedCurrency") || "dollar";

  state.currencyConversionMultiple =
    +localStorage.getItem("currencyConversionMultiple") || 1;

  state.selectedCurrencySymbol =
    localStorage.getItem("selectedCurrencySymbol") || "$";
})();

const state = {
  currencyList: [
    {
      currency: "Dollar",
      currencySymbol: "$",
      currencyConversionMultiple: 1,
    },
    {
      currency: "Rupee",
      currencySymbol: "₹",
      currencyConversionMultiple: 78.6,
    },
    {
      currency: "Euro",
      currencySymbol: "€",
      currencyConversionMultiple: 0.98,
    },
  ],
  currencyConversionMultiple: 1,
  selectedCurrency: "dollar",
  selectedCurrencySymbol: "$",
  layoutType: "ltr",
  themeConfig: axiosData,
  layoutMode: "demo2_dark.css",
  layoutFile: "demo2_dark.css",
  primaryColor: localPrimaryColor,
};

// getters
const getters = {};

// mutations
const mutations = {
  setLayoutType: (state, payload) => {
    if (payload === "rtl") {
      state.layoutType = "rtl";
      document.documentElement.dir = "rtl";
      document.body.classList.remove("ltr");
      document.body.classList.add("rtl");
    } else {
      state.layoutType = "ltr";
      document.documentElement.dir = "ltr";
      document.body.classList.remove("rtl");
      document.body.classList.add("ltr");
    }
  },
  setLayoutMode: (state, payload) => {
    state.layoutMode = payload;
  },
  setCurrecy(state, payload) {
    state.currencyList.every((currency) => {
      if (currency.currency === payload.currency) {
        state.selectedCurrency = currency.currency;
        state.selectedCurrencySymbol = currency.currencySymbol;
        state.currencyConversionMultiple = currency.currencyConversionMultiple;
        return false;
      } else return true;
    });
  },
  setPrimaryColor(state, payload) {
    state.primaryColor = payload.primaryColor;
  },
};

// actions
const actions = {
  setLayoutType: ({ commit }, payload) => {
    commit("setLayoutType", payload);
  },
  setLayoutMode: ({ commit }, payload) => {
    // localStorage.setItem("layoutMode", payload);
    commit("setLayoutMode", payload);
  },
  setCurrecy: ({ commit }, payload) => {
    commit("setCurrecy", payload);
  },
  setPrimaryColor({ commit }, payload) {
    commit("setPrimaryColor", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
