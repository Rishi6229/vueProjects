<template>
    <div>
        <p><h1>{{ supplementName }}</h1></p>
        <p><h2>{{ supplementDesc }}</h2></p>
    </div>
</template>



<script>
export default {
    props:['supplementName' , 'supplementDesc'],
}
</script>

<style>

</style>