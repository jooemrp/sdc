<template>
    <div class="card">
        <button class="px-8 mx-auto btn"><NuxtLink to="/works">Back</NuxtLink></button>
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <NuxtImg :src="work.image" alt="work image" class="mx-auto my-7"/> 
            </div>
            <div class="p-7">
                <h2 class="text-4xl">{{ work.title }}</h2>
                <!-- <p class="text-xl my-7"> Price - $ {{ product.price }}</p> -->
                <h3 class="pb-2 mb-4 font-bold border-b-2"> Works Description: </h3>
                <p class="mb-7"> {{ work.challange }} </p>
                <p class="mb-7"> {{ work.approach }} </p>
                <p class="mb-7"> {{ work.result }} </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { work } = defineProps(['work'])
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>