import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Supplements from './components/Supplements.vue'
import Medicine from './components/Medicine.vue'

const app = createApp(App);
app.component('food-item' ,FoodItem);
app.component('supplement-item', Supplements);
app.component('medicine-item' , Medicine);



app.mount('#app')
