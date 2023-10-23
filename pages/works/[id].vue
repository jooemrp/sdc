<template>
    <div>
        <h1> {{ work.title }}</h1>
        <!-- <p> {{ work.category }}</p> -->
        <!-- <p> {{ work. }}</p> -->
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://api.sipsedutech.id/api/works' + id

    // fetch
    const { data: work } = await useFetch(uri, {key: id})

</script>

<style scoped>

</style>