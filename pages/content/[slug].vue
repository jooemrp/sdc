<template>
    <section
        id="h-50"
        :class="`flex items-center bg-sips-orange bg-opacity-70 bg-gradient-to-br pt-28 md:pb-20 md:pt-52`"
        :style="`background-size: cover; object-fit: cover; background-image: url(${content?.thumbnail});`"
    >
        <div class="container mx-auto p-5 text-white xl:p-0">
            <h1 class="max-w-4xl text-4xl font-bold xl:text-5xl">
                {{ content?.title }}
            </h1>
            <p
                class="max-w-5xl py-4 text-2xl capitalize md:py-8 md:text-3xl md:leading-normal"
            >
                {{ content?.type }}
            </p>
        </div>
    </section>

    <section class="m-20 mx-auto w-4/5">
        <div class="container">
            <SharedSocialShareButton />
        </div>
        <p class="text-sips-navy" v-html="content?.body"></p>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const route = useRoute();
const slug = route.params.slug;
const content = ref({});

await useFetch(`https://api.sipsedutech.id/api/content/${slug}`).then(
    (res) => {
        const data = res.data.value.data;
        content.value = data;
    },
    (error) => {
        console.log(error);
    },
);

useHead({
    // title: 'Content',
    titleTemplate: (titleChunk) => {
        return content?.value?.title
            ? `${content.value.title} | ${content.value.type}`
            : 'Content';
    },
    meta: [
        {
            hid: 'title',
            name: 'title',
            content: content?.value.meta_title,
        },
        {
            hid: 'description',
            name: 'description',
            content: content?.value.meta_description,
        },
    ],
});
</script>
