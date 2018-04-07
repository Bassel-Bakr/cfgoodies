<template>
  <div :class=theme>
    <header>
      <br>
      <div class="header-overlay">
        <div class="title">
          <br>
          <p>Codeforces Gallery</p>
        </div>
        <div class="subtitle">
          <p>Feast your eyes!</p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "app-header",
  props: ["theme"]
}
</script>

<style scoped>
header {
  width: 100%;
  height: 40vh;
  /* background-size: cover; */
  background-attachment: fixed;
  background-image: url("http://r2metrics.com/wp-content/uploads/2015/09/banner-custom-programming-financial-applications-alm-products-services.jpg");
}

.header-overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 40vh;
  opacity: 0.7;
  background-color: black;
  background-attachment: fixed;
}

header p {
  color: white;
  font-weight: bold;
  text-shadow: 5px 5px rgb(4, 59, 95);
}

.title p {
  font-size: 5rem;
}

.subtitle p {
  color: grey;
  font-size: 3rem;
  font-style: italic;
}
</style>
