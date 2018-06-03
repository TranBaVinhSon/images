import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_token")
};

const getters = {
  isLoggedIn: (state) => {
    console.log("fuck");
    return !!state.token;
  }
};

const actions = {
  login: () => {
    console.log("login1");
    api.login();
  },
  // the function handle logic after login
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    window.localStorage.removeItem("imgur_token");
    router.push("/");
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.setItem("imgur_token", null);
    router.push("/");
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
