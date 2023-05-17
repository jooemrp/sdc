<template>
    <div class="card text-center max-w-md mx-auto my-10">
        <p class="text-9xl font-bold my-10">{{ error.statusCode }}</p>
        <p class="text-7xl my-10">Ooops!</p>
        <p class=" my-10">{{ error.message }}</p>
        <button class="btn my-5 px-8 py-3" @click="handleClearError">Go to home </button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>