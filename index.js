import AppRoot from "./components/AppRoot.vue";
import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppCard from "./components/AppCard.vue";
import AppCodeforcesUser from "./components/AppCodeforcesUser.vue";
import AppBackUp from "./components/AppBackUp.vue";

import css from "./app.scss";

const myComponents = {
  AppRoot,
  AppNav,
  AppMain,
  AppHeader,
  AppFooter,
  AppCard,
  AppCodeforcesUser,
  AppBackUp
};

const app = new Vue({
  el: "#vue-app",
  components: myComponents,
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