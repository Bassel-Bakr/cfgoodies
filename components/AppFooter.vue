<template>
  <div :class=theme>
    <footer>
      <p>Made with <i style="color: red" class="fas fa-heart"></i> by <strong>Bassel Bakr</strong></p>
      <slot></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app-footer",
  props: ["theme"]
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 20vh;
  display: table;
  text-align: center;
  font-weight: bold;
  background-attachment: fixed;
  background-image: linear-gradient(
      to right,
      rgba(60, 15, 68, 0.5),
      rgba(9, 1, 17, 0.5),
      rgba(60, 15, 68, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2017/06/23/10/48/code-2434271_960_720.jpg");
}

footer p {
  color: white;
  display: table-cell;
  font-size: 2rem;
  vertical-align: middle;
}
</style>

