<template>  
  <div id="top">
    <app-header :theme=theme></app-header>
      
      <app-nav id="gallery-top" @switchPage="gotoPage" :current="current" :pages="pages"></app-nav>

      <app-main>
        <!-- Main stuff goes here -->
        
        <div id="galleryId">
    
          <app-codeforces-user
            v-for="user in users"
              :key="user.handle" 
              :handle="user.handle" 
              :src="user.titlePhoto"
              :rank="user.rank">
          </app-codeforces-user>
    
        </div>

      </app-main>

      <app-nav @switchPage="gotoPageAnchor" :current="current" :pages="pages"></app-nav>

      <!-- <app-nav current=<%= page %> pages=<%= pagesCount %>></app-nav> -->
      
      <app-footer :theme=theme></app-footer>
      <!-- up button -->
      <app-back-up></app-back-up>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppMain from "./AppMain.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AppCard from "./AppCard.vue";
import AppCodeforcesUser from "./AppCodeforcesUser.vue";
import AppBackUp from "./AppBackUp.vue";

const myComponents = {
  AppNav,
  AppMain,
  AppHeader,
  AppFooter,
  AppCard,
  AppCodeforcesUser,
  AppBackUp
};

export default {
  name: "app-root",
  components: myComponents,
  data() {
    return {
      current: 0,
      pages: 0,
      users: []
    };
  },
  methods: {
    gotoPage(id) {
      this.$http.get(`data/${id}`).then(res => {
        this.current = id;
        this.users = res.body;
        AOS.refresh();
      });
    },
    gotoPageAnchor(id) {
      window.location.href = "#gallery-top";
      this.gotoPage(id);
    }
  },
  created() {
    this.$http.get("config").then(res => {
      this.pages = res.body.pages;
      this.current = Math.min(1, res.body.pages);      
      this.gotoPage(this.current);
    });
  }
};
</script> 

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
}
#galleryId {
  overflow: hidden;
  display: grid;
  grid-row-gap: 3vh;
  grid-column-gap: 3vw;
  padding: 3vw;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
}
</style>
