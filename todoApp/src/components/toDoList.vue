<template>
    <ul>
        <li v-for="(task,index) in tasks"  :key="index">
            <input type="checkbox" v-model="task.completed" @change="toggleTask(index)">
            {{ task.text }}
            <button @click="deleteTask(index)">Delete</button>
        </li>
    </ul>
</template>

<script> 
export default{
 props:{
    tasks: Array,
 },

 methods:{
    toggleTask(index){
        this.$emit('toggle-task',index);
    },
    deleteTask(index){
        this.$emit('delete-task',index);
    }
 }
}
</script>