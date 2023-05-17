<template>
    <div class="card text-center">
        <NuxtLink :to="`https://sejawat.co.id/event/${product.slug}`" target="_blank">
        <img :src="product.image" class="thumbnail">
            <!-- <p class="font-bold text-gray-500 m-4 truncate">{{ product.start_at }}</p> -->
            <!-- <p class="font-bold text-gray-500 m-4 truncate">{{ product.name }}</p> -->
            <!-- <p class="btn my-4">Lihat Detail</p> -->
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
.thumbnail {
    max-height: 350px;
    /* max-width: 70%; */
    margin: 0 auto;
}
</style>