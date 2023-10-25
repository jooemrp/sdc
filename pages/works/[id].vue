<template>
    <div id="h-50" :class="`flex items-center bg-gradient-to-br pt-28 md:pb-20 md:pt-52 bg-${ getRandomColor() }`">
        <div class="container mx-auto text-white xl:p-0 p-5">
            <h1 class="xl:text-5xl text-4xl font-bold max-w-4xl">
                {{ work?.title }}
            </h1>
            <p class="text-2xl md:text-3xl md:py-8 py-4 md:leading-normal max-w-5xl">
                {{ work?.category }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { getRandomColor } from "@/utils/helpers";
import { ref } from 'vue';

const route = useRoute()
const id = route.params.id
const work = ref(null);

useFetch(`https://api.sipsedutech.id/api/works/${id}`).then(res => {
    work.value = res.data.value.data
}, error => {
    console.log(error)
})

</script>

<style scoped></style>
