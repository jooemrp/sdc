<template>
    <section
        id="h-50"
        :class="`flex items-center bg-opacity-70 bg-gradient-to-r from-sky-800 via-10% to-emerald-500 to-90% p-44 md:p-56 lg:p-48`"
        :style="`background-size: cover; object-fit: cover; background-image: url(${content?.thumbnail});`"
    ></section>

    <section class="m-10 mx-auto w-4/5 md:m-20" v-if="content.title">
        <div class="container mx-auto xl:p-0">
            <h1 class="text-2xl font-bold xl:text-4xl">
                {{ content?.title }}
            </h1>

            <p class="md:text-3md text-lg capitalize md:leading-normal">
                {{ formatDate(content?.created_at) }}
            </p>

            <p class="mt-3" v-html="content?.body"></p>

            <SharedSocialShareButton class="mt-5" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            content: {},
        };
    },
    async mounted() {
        const route = useRoute();
        const slug = route.params.slug;

        this.getData(slug);
    },
    methods: {
        setMeta() {
            useHead({
                title: this.content.title
                    ? `${this.content.title} | ${this.content.type}`
                    : 'Loading...',
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: this.content?.meta_title,
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.content?.meta_description,
                    },
                ],
            });
        },
        getData: async function (slug) {
            await fetch(`https://api.sipsedutech.id/api/content/${slug}`)
                .then((response) => response.json())
                .then((data) => {
                    this.content = data.data;
                    this.setMeta();
                });
        },
    },
};
</script>

<!-- <script setup>
import { ref } from 'vue';
import { formatDate } from '@/utils/helpers';

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
</script> -->
