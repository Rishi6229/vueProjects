<template>
  <div id="app">
    <CounterApp />
  </div>
</template>


<script>
import CounterApp from './components/CounterApp.vue';

export default{
  components:{
    CounterApp,
  }
}
</script>


<style>
#app{
  background-color: aqua;
}
</style>
