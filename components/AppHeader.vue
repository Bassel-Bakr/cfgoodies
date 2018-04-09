<template>
  <div :class=theme>
    <header>
      <br>
      <div class="title">
        <br>
        <p>Codeforces Gallery</p>
      </div>
      <div class="subtitle">
        <p>Feast your eyes!</p>
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
  height: 30vh;
  display: table;
  background-attachment: fixed;
  background-image: linear-gradient(
      rgba(37, 6, 63, 0.5),
      rgba(37, 6, 63, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2017/06/23/10/48/code-2434271_960_720.jpg");
}

header p {
  color: white;
  font-weight: bold;
  text-shadow: 5px 5px rgb(4, 59, 95);
}

.title, .subtitle {
  display: table-row;
  vertical-align: middle;
}

.title p {
  font-size: 5rem;
}

.subtitle p {
  color: lightgrey;
  font-size: 3rem;
  font-style: italic;
}
</style>
