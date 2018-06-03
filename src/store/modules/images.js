import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: []
};

const getters = {
  allImages: (state) => {
    return state.images;
  }
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
    commit("setImages", response.data.data);
  },

  async uploadImages({ rootState }, images){
    // Get the access token
    const { token } = rootState.auth;
    console.log(token);
    // Call api to upload
    const response = await api.uploadImages(images, token);
    // Redirect to our user ImageList
    router.push("/");
    console.log(images);
  }
};

// change state object
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
