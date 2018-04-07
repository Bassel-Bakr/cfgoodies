<template>
  <div class="card">
    <div class="card-pic">
      <slot></slot>
    </div>
    <header class="card-header">
      <p>
        {{ handle }}
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: "app-card",
  props: ["handle"],
  methods: {
    gotoUser() {
      window.location.href = "http://codeforces.com/profile/" + this.handle;
    }
  }
};
</script>

<style c>
.card {
  margin: 0;
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
}
.card-header, .card-pic {
  display: table-row;
}

.card-header {
  font-weight: bold;
  vertical-align: bottom;
}

.card-pic {
  height: 100%;
  vertical-align: middle;
}
</style>
