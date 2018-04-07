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
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
}
#galleryId {
  overflow: hidden;
  display: grid;
  grid-gap: 50px;
  margin: 10px;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
}
</style>
