<template>
    <div class="input-form">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task">
        <button id="btn" @click="addTask">Add</button>
    </div>
</template>

<script> 
export default{
    data(){
        return{
            newTask: '',
        }
    },
    methods:{
        addTask(){
            if(this.newTask.trim() != '')
            {
                this.$emit(add-task , this.newTask);
                this.newTask = ''
            }
        }
    }
}
</script>

<style>

.input-form{
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    padding: 10px;
}
#btn{
    padding: 20px;
    margin: 10px;
    border-color: 10px solid black;
    border-radius: 20px;
}
</style>