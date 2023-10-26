<template>
    <section id="h-50" :class="`flex items-center bg-gradient-to-br pt-28 md:pb-20 md:pt-52 ` + (work?.color ? `bg-${work.color}` : 'bg-' + getRandomColor())">
        <div class="container mx-auto text-white xl:p-0 p-5">
            <h1 class="xl:text-5xl text-4xl font-bold max-w-4xl">
                {{ work?.title }}
            </h1>
            <p class="text-2xl md:text-3xl md:py-8 py-4 md:leading-normal max-w-5xl">
                {{ work?.category }}
            </p>
        </div>
    </section>

    <section class="w-4/5 m-20 mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 class="text-xl font-semibold text-sips-navy mb-2 md:mb-0">The Challenge</h3>
            <p class="text-sips-navy">{{ work?.challenge }}</p>

            <h3 class="text-xl font-semibold text-sips-navy mt-7 md:mt-10 mb-2 md:mb-0">Our Approach</h3>
            <p class="text-sips-navy md:mt-10">{{ work?.approach }}</p>

            <h3 class="text-xl font-semibold text-sips-navy mt-7  md:mt-10 mb-2 md:mb-0">The Result</h3>
            <p class="text-sips-navy md:mt-10">{{ work?.result }}</p>
        </div>

    </section>
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
