import api from "../../api/imgur";

const state = {
  images: []
};

const getters = {
  allImages: (state) => {
    return state.images;
  }
};

const actions = {
  async fetchImages({ rootState }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
  }
};

// change state object
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};
