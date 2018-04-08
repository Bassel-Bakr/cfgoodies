<template>  
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "app-root",
}
</script> 

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
}
#galleryId {
  overflow: hidden;
  display: grid;
  grid-row-gap: 3vh;
  grid-column-gap: 3vw;
  margin: 3vw;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
}
</style>
