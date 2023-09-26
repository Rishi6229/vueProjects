<template>
  <div id="app">
    <ColorFlipper />
  </div>
</template>

<script> 
import ColorFlipper from './components/ColorFlipper.vue';
export default{
  components:{
    ColorFlipper,
  }
}
</script>
<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>