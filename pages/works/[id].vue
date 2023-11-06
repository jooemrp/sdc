<template>
    <section
        :class="
            `flex items-center bg-gradient-to-br pt-28 md:pb-20 md:pt-36 ` +
            (work?.color ? `bg-${work.color}` : 'bg-' + getRandomColor())
        "
    >
        <div class="container mx-auto w-4/5 py-5 text-white xl:p-0">
            <div v-if="work.title">
                <h1 class="max-w-4xl text-4xl font-bold xl:text-5xl">
                    {{ work?.title }}
                </h1>
                <p
                    class="max-w-5xl py-4 text-2xl md:py-8 md:text-3xl md:leading-normal"
                >
                    {{ work?.category }}
                </p>
            </div>
            <div v-else>
                <SharedLoader />
            </div>
        </div>
    </section>

    <section class="container m-20 mx-auto w-4/5">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <h3 class="mb-2 text-xl font-semibold text-sips-navy md:mb-0">
                The Challenge
            </h3>
            <p class="text-sips-navy md:col-span-2">{{ work?.challenge }}</p>

            <h3
                class="mb-2 mt-7 text-xl font-semibold text-sips-navy md:mb-0 md:mt-10"
            >
                Our Approach
            </h3>
            <p class="text-sips-navy md:col-span-2 md:mt-10">
                {{ work?.approach }}
            </p>

            <h3
                class="mb-2 mt-7 text-xl font-semibold text-sips-navy md:mb-0 md:mt-10"
            >
                The Result
            </h3>
            <p class="text-sips-navy md:col-span-2 md:mt-10">
                {{ work?.result }}
            </p>
        </div>
    </section>
</template>

<script>
import { getRandomColor } from '@/utils/helpers';

export default {
    name: 'Our Work',
    data() {
        return {
            work: {
                challenge: 'Loading...',
                approach: 'Loading...',
                result: 'Loading...',
            },
        };
    },
    async mounted() {
        const route = useRoute();
        const id = route.params.id;

        this.getData(id);
    },
    methods: {
        setMeta() {
            useHead({
                titleTemplate: (titleChunk) => {
                    return titleChunk
                        ? `${this.work.title} - Our Work | ${titleChunk}`
                        : `${this.work.title} - Our Work`;
                },
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: this.work?.meta_title,
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.work?.meta_description,
                    },
                ],
                link: [
                    {
                        hid: 'canonical',
                        rel: 'canonical',
                        href: `https://digital.sipsedutech.id/works/${this.work.slug}`,
                    },
                ],
            });
        },
        getData: async function (id) {
            await fetch(`https://api.sipsedutech.id/api/works/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    this.work = data.data;
                    this.setMeta();
                });
        },
    },
};
</script>

<style scoped></style>
