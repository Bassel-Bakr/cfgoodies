<template inline-template="true">
  <div :data-aos="getRandomAnim()" class="app-card">
    <app-card :handle="handle">
      <div class="picture">
        <img @click="gotoUser" :src="src" :alt="handle">
      </div>
    </app-card>
  </div>
</template>

<script>
import AppCard from "./AppCard.vue";
import Colors from "../ranks.json";

export default {
  name: "app-codeforces-user",
  props: ["handle", "src", "rank"],
  
  data() {
    return {
      animationNames: [
        /* Fade animations: */
        // "fade",
        // "fade-up",
        // "fade-down",
        // "fade-left",
        // "fade-right",
        // "fade-up-right",
        // "fade-up-left",
        // "fade-down-right",
        // "fade-down-left",
        /* Slide animations: */
        // "slide-up",
        // "slide-down",
        // "slide-left",
        // "slide-right",
        /* Zoom animations: */
        // "zoom-in",
        "zoom-in-up",
        "zoom-in-down",
        "zoom-in-left",
        "zoom-in-right",
        // "zoom-out",
        // "zoom-out-up",
        // "zoom-out-down",
        // "zoom-out-left",
        // "zoom-out-right"
      ]
    }
  },
  mounted() {
    // console.log(this.handle, this.rank);
    this.$el.style.color = Colors.ranks[this.rank];
    this.$el.getElementsByClassName("first-letter")[0].style.color = Colors.franks[this.rank];
  },
  methods: {
    gotoUser() {
      window.location.href = `http://codeforces.com/profile/${this.handle}`;
    },

    getRandomAnim() {
      return this.animationNames[Math.floor(Math.random() * this.animationNames.length)];
    }
  },
  components: { AppCard }
};
</script>

<style  scoped >
.picture {
  display: table-cell;
  vertical-align: middle;
}

img {
  width: auto;
  /* height: 100%; */
  max-width: 100%;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: 0 0 10px 1px black;
}

.app-card {
  box-shadow: 5px 5px 20px 1px black;
}
</style>
