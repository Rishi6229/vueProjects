<template>
    <div>
        <p>
            <h1>{{ medicineName }}</h1>
        </p>
        <p>
            <h2>{{ medicineDesc }}</h2>
        </p>
    </div>
</template>



<script>
export default {
    props:[medicineName , medicineDesc]
}
</script>

<style>

</style>