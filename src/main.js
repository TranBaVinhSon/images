import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store";

import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

// for VueRouter
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth/2/callback", component: AuthHandler }
  ]
});

// store for VueX
new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
