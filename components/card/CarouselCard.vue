<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="content in contents">
            <NuxtLink :to="`/insights/${content?.slug}`">
                <div
                    class="m-1 max-w-md flex-none overflow-hidden rounded shadow-md"
                >
                    <NuxtPicture
                        :src="
                            content?.thumbnail ?? 'https://placehold.co/600x400'
                        "
                        :imgAttrs="{ class: 'w-full min-w-[200px]' }"
                        :alt="content?.title"
                    />
                    <div class="px-6 py-4">
                        <div class="text-md mb-2 font-bold">
                            {{ truncateString(content?.title, 60) }}
                        </div>
                        <p class="text-sm text-gray-700" v-if="content?.body">
                            {{ truncateString(removeTags(content?.body), 100) }}
                        </p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import ContentCard from './ContentCard.vue';

export default defineComponent({
    name: 'CarouselCard',
    components: {
        Carousel,
        Navigation,
        Slide,
        ContentCard,
        Pagination,
    },
    data() {
        return {
            contentIsLoading: true,
            contents: [],
        };
    },
    async mounted() {
        await nextTick(async () => {
            await this.getContent();
        });
    },
    methods: {
        getContent: async function (contentType = 'update') {
            this.contentIsLoading = true;

            await fetch(
                `https://api.sipsedutech.id/api/content?type=${contentType}&per_page=6`,
            )
                .then((response) => response.json())
                .then((data) => {
                    this.contents = data.data;
                    this.contentIsLoading = false;
                });
        },
    },
});
</script>
