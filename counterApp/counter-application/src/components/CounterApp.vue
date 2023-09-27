<template>
  <div class="counter-app">
    <p>{{ InitialCount }}</p>
    <section class="button-section">
      <button @click="incrementCounter">Add</button>
      <button @click="decrementCounter">Substract</button>
    </section>
  </div>
</template>

<script>
export default{
  data() {
    return {
      count: 0,
      InitialCount:0
    };
  },
  methods: {
    incrementCounter() {
      this.InitialCount = this.count + 10;
    },
    decrementCounter() {
        this.InitialCount = this.count - 10;
    },
  },
};
</script>

<style>

.button-section{
    display: flex;
    justify-content: space-evenly;
}

button{
    height: 100px;
    width: 100px;
    border: 5px solid black;
    border-radius: 10px;
}
p{
    
    display: flex;
    justify-content: center;
}


</style>