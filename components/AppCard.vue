<template>
  <div class="card">
    <div class="card-pic">
      <slot></slot>
    </div>
    <div class="card-header">
      <p>
        <span class="first-letter">{{ handle.charAt(0) }}</span>{{ handle.slice(1) }}
      </p>
    </div>
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
  width: auto;
  max-width: 100%;
  vertical-align: middle;
}

.card-header p {
  height: 100%;
  width: auto;
  max-width: 100%;
  /* font-size: 1.8rem; */
  display: table-cell;
  padding-top: 5%;
  vertical-align: bottom;
}
</style>
