<template>
    <section
        :class="`flex items-center bg-opacity-70 bg-gradient-to-r from-sky-800 via-10% to-emerald-500 to-90% p-44 md:p-56 lg:p-48`"
        :style="`background-size: cover; object-fit: cover; background-image: url(${content?.thumbnail});`"
        v-if="content?.thumbnail"
    ></section>

    <section class="w-4/5 m-10 mx-auto md:m-20" v-if="content.title">
        <div class="container mx-auto xl:p-0">
            <h1 class="text-2xl font-bold xl:text-4xl">
                {{ content?.title }}
            </h1>

            <p class="text-lg capitalize md:text-3md md:leading-normal">
                {{ formatDate(content?.created_at) }}
            </p>

            <p class="mt-3" v-html="content?.body"></p>

            <SharedSocialShareButton
                class="mt-5"
                :url="currentURL"
                :text="`Baca artikel`"
            />
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name: 'Content Detail',
    data() {
        return {
            content: {},
            currentURL: '',
        };
    },
    async mounted() {
        const route = useRoute();
        const slug = route.params.slug;
        const currentURL = route.fullPath;

        this.currentURL = `${window.location.origin}${currentURL}`;
        this.getData(slug);
    },
    methods: {
        setMeta() {
            useHead({
                titleTemplate: (titleChunk) => {
                    return titleChunk
                        ? `${this.content.title} - ${this.content.type} | ${titleChunk}`
                        : `${this.content.title} - ${this.content.type}`;
                },
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
                    {
                        hid:'canonical',
                        rel:'canonical',
                        href:`https://digital.sipsedutech.id/${this.content.slug}`
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
