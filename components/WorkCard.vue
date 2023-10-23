<template>
    <div class="card text-center">
            <h1 class="text-3xl text-gray-500 m-4 truncate">{{ work.title }}</h1>
        <NuxtLink :to="`/works/${work.id}`">
        <!-- <img :src="product.image" class="thumbnail"> -->
            <p class="text-orange-500 hover:text-sky-500">Lihat Detail</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { work } = defineProps(['work'])
</script>

<style scoped>
.thumbnail {
    max-height: 350px;
    /* max-width: 70%; */
    margin: 0 auto;
}
</style>