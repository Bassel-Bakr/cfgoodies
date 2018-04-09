import VueResource from 'vue-resource';

import AppRoot from "./components/AppRoot.vue";

import css from "./app.scss";

Vue.use(VueResource);

const app = new Vue({
  el: "#vue-app",
  render: h => h(AppRoot),
  data() {
    return {
      theme: "hero is-primary"
    };
  }
});

AOS.init({
  duration: 500
});

$(window).on("load", function() {
  AOS.refresh();
  // document.getElementById("").page
});