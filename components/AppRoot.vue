<template>  
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "app-root"
}
</script> 

<style>
body {
  margin: 0;
  padding: 0;
}
#galleryId {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
