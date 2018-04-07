<template>
  <div :class=theme>
    <div class="container section content has-text-centered">
      Made with <i style="color: red" class="fas fa-heart"></i> by <strong>Bassel Bakr</strong>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-footer",
  props: ["theme"]
}
</script>
