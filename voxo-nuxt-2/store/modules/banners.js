// import Banners from "../../data/banners.json";
// import TabsBanners from "../../data/tabsBanners.json";
import axios from "axios";
const axiosData = [],
  axiosTabsBanner = [];

(async function () {
  await axios
    .get("data/banners.json")
    .then((res) => {
      axiosData.push(...res.data.data);
    })
    .catch((err) => console.log("error in Fetching data.", err));
  await axios
    .get("data/tabsBanners.json")
    .then((res) => {
      axiosTabsBanner.push(...res.data.data);
    })
    .catch((err) => console.log("error in Fetching data.", err));
})();

const state = {
  data: axiosData,
  tabsBanners: axiosTabsBanner,
};

// getters
const getters = {};

// mutations
const mutations = {};

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
