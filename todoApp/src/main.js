import { createApp } from 'vue'
import App from './App.vue'
import MainApplication from './components/MainApplication.vue'
import inputFormComponent from './components/inputFormComponent.vue'
import toDoItem from './components/toDoItem.vue';
import toDoList from './components/toDoList.vue';





const app = createApp(App);
app.component('main-application' , MainApplication);
app.component('input-form' , inputFormComponent);
app.component('to-doItem' , toDoItem);
app.component('to-doList' , toDoList);


app.mount('#app')
