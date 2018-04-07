<template inline-template="true">
  <div class="app-card">
    <app-card :handle="handle">
      <img @click="gotoUser" :src="src" :alt="handle">
    </app-card>
  </div>
</template>

<script>
import AppCard from "./AppCard.vue";

export default {
  name: "app-codeforces-user",
  props: ["handle", "src"],
  methods: {
    gotoUser() {
      window.location.href = `http://codeforces.com/profile/${this.handle}`;
    }
  },
  components: { AppCard }
};
</script>

<style  scoped >
.app-card {
  height: 100%;
}
</style>
