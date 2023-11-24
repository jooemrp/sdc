<template>
    <section class="flex justify-center">
        <!-- <div
            class="container md:w-5/6 md:rounded-3xl lg:w-4/6 lg:xl:mt-5 xl:pt-5"
            :style="`height: 65vh; background-size: cover; object-fit: cover; background-image: url(${content?.thumbnail});`"
            v-if="content?.thumbnail"
        ></div> -->
        <div
            class="container md:w-5/6 md:rounded-3xl lg:w-4/6 lg:xl:mt-5 xl:pt-5"
        >
            <NuxtPicture
                :src="content?.thumbnail"
                alt="work image"
                :imgAttrs="{class:'mx-auto w-full xl:rounded-3xl md:rounded-2xl'}"
            />
        </div>
    </section>

    <section class="flex justify-center w-4/5 mx-auto" v-if="content.title">
        <div
            class="py-10 -mt-12 bg-white xl:-mt-32 w-6/6 rounded-t-3xl md:w-5/6 xl:w-4/6 xl:px-5 xl:py-10"
        >
            <div class="mx-auto md:mx-5 xl:p-0">
                <div class="mx-5">
                    <SharedBreadcrumbs class="mb-2" :items="breadcrumbItems" />

                    <h1
                        class="mb-5 text-2xl font-bold text-neutral-900 xl:text-4xl"
                    >
                        {{ content?.title }}
                    </h1>

                    <div class="flex">
                        <svg
                            class="w-4 h-4 mt-3 mr-3"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 122.88 122.88"
                            style="enable-background: new 0 0 122.88 122.88"
                            xml:space="preserve"
                        >
                            <g>
                                <path
                                    d="M81.61,4.73c0-2.61,2.58-4.73,5.77-4.73c3.19,0,5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 c-3.19,0-5.77-2.12-5.77-4.73V4.73L81.61,4.73z M66.11,103.81c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,103.81z M15.85,67.09c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,67.09z M40.98,67.09 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,67.09z M66.11,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,67.09z M91.25,67.09c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,67.09z M15.85,85.45c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,85.45z M40.98,85.45 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,85.45z M66.11,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2H81.9c0.34,0,0.61,1.43,0.61,3.2 c0,1.77-0.27,3.2-0.61,3.2H66.11L66.11,85.45z M91.25,85.45c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79 c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H91.25L91.25,85.45z M15.85,103.81c-0.34,0-0.61-1.43-0.61-3.2 c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H15.85L15.85,103.81z M40.98,103.81 c-0.34,0-0.61-1.43-0.61-3.2c0-1.77,0.27-3.2,0.61-3.2h15.79c0.34,0,0.61,1.43,0.61,3.2c0,1.77-0.27,3.2-0.61,3.2H40.98 L40.98,103.81z M29.61,4.73c0-2.61,2.58-4.73,5.77-4.73s5.77,2.12,5.77,4.73v20.72c0,2.61-2.58,4.73-5.77,4.73 s-5.77-2.12-5.77-4.73V4.73L29.61,4.73z M6.4,45.32h110.07V21.47c0-0.8-0.33-1.53-0.86-2.07c-0.53-0.53-1.26-0.86-2.07-0.86H103 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h10.55c2.57,0,4.9,1.05,6.59,2.74c1.69,1.69,2.74,4.02,2.74,6.59v27.06v65.03 c0,2.57-1.05,4.9-2.74,6.59c-1.69,1.69-4.02,2.74-6.59,2.74H9.33c-2.57,0-4.9-1.05-6.59-2.74C1.05,118.45,0,116.12,0,113.55V48.52 V21.47c0-2.57,1.05-4.9,2.74-6.59c1.69-1.69,4.02-2.74,6.59-2.74H20.6c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H9.33 c-0.8,0-1.53,0.33-2.07,0.86c-0.53,0.53-0.86,1.26-0.86,2.07V45.32L6.4,45.32z M116.48,51.73H6.4v61.82c0,0.8,0.33,1.53,0.86,2.07 c0.53,0.53,1.26,0.86,2.07,0.86h104.22c0.8,0,1.53-0.33,2.07-0.86c0.53-0.53,0.86-1.26,0.86-2.07V51.73L116.48,51.73z M50.43,18.54 c-1.77,0-3.2-1.43-3.2-3.2c0-1.77,1.43-3.2,3.2-3.2h21.49c1.77,0,3.2,1.43,3.2,3.2c0,1.77-1.43,3.2-3.2,3.2H50.43L50.43,18.54z"
                                />
                            </g>
                        </svg>
                        <p
                            class="mt-2 capitalize text-md text-neutral-600 md:leading-normal"
                        >
                            {{ formatDate(content?.created_at) }}
                        </p>
                    </div>
                    <div class="">
                        <SharedSocialShareButton
                            class="mt-4 md:mt-5 lg:mt-7"
                            :url="currentURL"
                            :text="`Baca artikel`"
                        />
                    </div>
                    <div
                        class="my-5 prose-lg text-neutral-900 md:mx-0 md:my-5 lg:mx-0"
                        id="el-body"
                        v-html="content?.body"
                    ></div>

                    <div v-if="content?.is_ebook_available">
                        <ButtonInsightEbookDownloadButton
                            :slug="content.slug"
                            :link="currentURL"
                        />
                    </div>

                    <SharedSocialShareButton
                        class="my-12"
                        :url="currentURL"
                        :text="`Baca artikel`"
                    />
                </div>
            </div>
        </div>
    </section>

    <section class="flex items-center justify-center h-screen -mt-100" v-else>
        <SharedLoader />
    </section>
</template>

<style scoped>
:deep(#el-body ul) {
    list-style-type: disc;
}
:deep(#el-body ol) {
    list-style-type: decimal;
}
</style>

<script>
import { useRoute } from 'vue-router';

export default {
    name: 'Content Detail',
    data() {
        return {
            content: {
                thumbnail: 'https://placehold.co/800x600',
            },
            currentURL: '',
            breadcrumbItems: [],
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
            // useHead({
            //     titleTemplate: (titleChunk) => {
            //         return titleChunk
            //             ? `${this.content.title} - ${this.content.type} | ${titleChunk}`
            //             : `${this.content.title} - ${this.content.type}`;
            //     },

            useSeoMeta({
                title: this.content?.meta_title,
                ogTitle: this.content?.meta_title,
                description: this.content?.meta_description,
                ogDescription: this.content?.meta_description,
                canonical: `https://digital.sipsedutech.id/${this.content.slug}`,
                ogImage: this.content?.thumbnail,
                ogUrl: `https://digital.sipsedutech.id/${this.content.slug}`,
                twitterTitle: this.content?.meta_title,
                twitterDescription: this.content?.meta_description,
                twitterImage: this.content?.thumbnail,
                twitterCard: this.content?.meta_description,
                ogLocale: 'id',
            });
            useHead({
                htmlAttrs: {
                    lang: 'id',
                },
            });
        },
        getData: async function (slug) {
            await fetch(`https://api.sipsedutech.id/api/content/${slug}`)
                .then((response) => response.json())
                .then((data) => {
                    this.content = data.data;
                    this.setMeta();

                    this.breadcrumbItems = [
                        {
                            title:
                                this.content.type == 'update'
                                    ? 'Works'
                                    : 'Insights',
                            path:
                                this.content.type == 'update'
                                    ? '/works'
                                    : '/insights',
                        },
                        { title: data.data.title, path: null },
                    ];
                });
        },
    },
};
</script>
