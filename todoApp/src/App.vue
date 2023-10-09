<template>
  <div class="main-Application">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Young+Serif&display=swap"
      rel="stylesheet"
    />
    <h1>To Do Application</h1>
    <input-form></input-form>
    <to-doList></to-doList>

  </div>
</template>

<script>
import ToDoList from './components/toDoList.vue'
export default{
  data(){
    return{

    }
  },
  components:{
    ToDoList

  },
  methods:{

  }
}
</script>





<style>


/* .main-Application{
  background-color:aquamarine;
  display: flex;
  justify-content: center;
  border: 10px;
  border-radius: 10px;
  font-family: 'Young Serif' ;
}, */
h1{
  background-color:aquamarine;
  display: flex;
  justify-content: center;
  border: 10px;
  border-radius: 10px;
  font-family: 'Young Serif' ;
}
</style>