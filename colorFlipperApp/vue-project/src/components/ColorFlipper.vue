<template>
  <div class="color-flipper">
    <button @click="changeColor">{{ buttonText }}</button>
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
      this.backgroundColor = getRandomColor();
      this.buttonText = getRandomColor();
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
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
}
</style>
