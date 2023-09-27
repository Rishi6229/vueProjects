<template>
  <div class="color-flipper">
    <section class="buttonField">
      <h1>Color Flipper</h1>
      <button class="btn" @click="changeColor">{{ buttonText }}</button>
    </section>
    <div :style="{ backgroundColor }" class="color-box">
      <p>{{ backgroundColor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: "",
      buttonText:'Change Color',
    };
  },
  methods: {
    changeColor() {
      const colorRec = getRandomColor();
      this.backgroundColor = colorRec;
      this.buttonText = colorRec;
    },
  },
};
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>
<style>
.color-flipper {
  text-align: center;
}
.color-box {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 20px;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  border-radius: 20px;
}
.btn{
  margin: 20px;
  border: 2px solid black;
  border-radius: 20px;
  width: 200px;
  height: 60px;
  background-color: aqua;
}
.buttonField{
  height: auto;
  width: auto;
  margin:auto;
  background-color: bisque;
  border-radius: 20px;
}

.heading{
  
}
</style>
