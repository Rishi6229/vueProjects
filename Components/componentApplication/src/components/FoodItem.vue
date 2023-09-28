<template>
    <div @click ="countClicks">
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p id="red">You have clicked me {{ count }} times</p>
    </div>
</template>

<script> 
export default{
    data(){
        return{
            name: 'Apples',
            message: 'Sebb mat kha bhai !!',
            count: 0,
        }
    },
    methods:{
        countClicks(){
            this.count++;
        }
    }
}
</script>

<style> 
#red{
    font-weight: bold;
    color: rgb(144 , 12 , 12);
}
</style>