<template>
  <div class="counter-app">
    <section class="button-section">
      <button @click="incrementCounter">Add</button>
      <button @click="decrementCounter">Substract</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      InitialCount: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.count = this.InitialCount + 10;
    },
    decrementCounter() {
      this.count = this.InitialCount - 10;
    },
  },
};
</script>

<style>
.button-section {
  display: flex;
  justify-content: space-evenly;
}
.inputField {
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
}
button {
  height: 100px;
  width: 100px;
  border: 5px solid black;
  border-radius: 10px;
}
p {
  display: flex;
  justify-content: center;
}

.counter-app {
  display: grid;
  align-items: center;
  top: 0px;
}
</style>
