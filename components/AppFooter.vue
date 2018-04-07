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
}
</script>

<style scoped>
footer {
  display: table;
  text-align: center;
  font-weight: bold;
  width: 100%;
  min-height: 100px;
  background-color: rgb(23, 19, 51);
}

footer p {
  color: white;
  display: table-cell;
  font-size: 2rem;
  vertical-align: middle;
}
</style>

