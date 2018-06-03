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
  fetchImages() {
    api.fetchImages();
  }
};

// change state object
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};
