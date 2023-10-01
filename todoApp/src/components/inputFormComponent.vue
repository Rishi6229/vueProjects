<template>
    <div class="list-component">
        <input class="input-form" placeholder="Enter your tasks"/>
         <button class="btn-btn"> Add Task</button>
    </div>

</template>


<script> 
export default{
}
</script>

<style> 
.list-component{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
.input-form{
    padding: 8px;
    border: solid black 2px;
    border-radius: 7px;


}
.btn-btn{
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    
}

.btn-btn:hover{
    cursor: pointer;
}

</style>