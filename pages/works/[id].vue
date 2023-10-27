<template>
    <section
        id="h-50"
        :class="
            `flex items-center bg-gradient-to-br pt-28 md:pb-20 md:pt-52 ` +
            (work?.color ? `bg-${work.color}` : 'bg-' + getRandomColor())
        "
    >
        <div class="container mx-auto p-5 text-white xl:p-0">
            <h1 class="max-w-4xl text-4xl font-bold xl:text-5xl">
                {{ work?.title }}
            </h1>
            <p
                class="max-w-5xl py-4 text-2xl md:py-8 md:text-3xl md:leading-normal"
            >
                {{ work?.category }}
            </p>
        </div>
    </section>

    <section class="m-20 mx-auto w-4/5">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <h3 class="mb-2 text-xl font-semibold text-sips-navy md:mb-0">
                The Challenge
            </h3>
            <p class="text-sips-navy">{{ work?.challenge }}</p>

            <h3
                class="mb-2 mt-7 text-xl font-semibold text-sips-navy md:mb-0 md:mt-10"
            >
                Our Approach
            </h3>
            <p class="text-sips-navy md:mt-10">{{ work?.approach }}</p>

            <h3
                class="mb-2 mt-7 text-xl font-semibold text-sips-navy md:mb-0 md:mt-10"
            >
                The Result
            </h3>
            <p class="text-sips-navy md:mt-10">{{ work?.result }}</p>
        </div>
    </section>
</template>

<script setup>
import { getRandomColor } from '@/utils/helpers';
import { ref } from 'vue';

const route = useRoute();
const id = route.params.id;
const work = ref({});

await useFetch(`https://api.sipsedutech.id/api/works/${id}`).then(
    (res) => {
        const data = res.data.value.data;
        work.value = data;
    },
    (error) => {
        console.log(error);
    },
);

useHead({
    title: 'Works Detail',
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} | ${work.value.title}`
            : work.value.title;
    },
    meta: [
        {
            hid: 'title',
            name: 'title',
            content: work.value.meta_title,
        },
        {
            hid: 'description',
            name: 'description',
            content: work.value.meta_description,
        },
    ],
});
</script>

<style scoped></style>
