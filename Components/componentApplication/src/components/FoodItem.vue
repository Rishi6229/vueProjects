<template>
    <div>
        <p>
            <h1>{{ foodName }}</h1>
        </p>
       <p>
        <h2>{{ foodDesc }}</h2>
       </p>
    </div>
  
    
</template>

<script> 
export default{
    props:['foodName' , 'foodDesc','isFavorite'],

}
</script>

<style> 
#red{
    font-weight: bold;
    color: rgb(144 , 12 , 12);
}
</style>