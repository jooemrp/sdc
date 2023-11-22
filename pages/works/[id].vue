<template>
    <section
        :class="
            `flex items-center bg-gradient-to-br pb-16 pt-16 md:pt-36 ` +
            (work?.color ? `bg-${work.color}` : 'bg-' + getRandomColor())
        "
    >
        <div class="mx-auto w-4/5 py-5 text-white xl:w-3/5 xl:p-0">
            <div v-if="work.title">
                <h1
                    class="max-w-4xl text-4xl font-bold xl:text-5xl xl:leading-relaxed"
                >
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

    <section class="container m-16 mx-auto w-4/5 xl:w-3/5">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <h3 class="mb-2 text-4xl font-semibold text-sips-navy md:mb-0">
                The Challenge
            </h3>
            <p
                class="prose text-sips-navy md:col-span-2"
                id="el-body"
                v-html="work?.challenge"
            />

            <h3
                class="mb-2 mt-7 text-4xl font-semibold text-sips-navy md:mb-0 md:mt-10"
            >
                Our Approach
            </h3>
            <p
                class="prose text-sips-navy md:col-span-2 md:mt-10"
                v-html="work?.approach"
            />

            <h3
                class="mb-2 mt-7 text-4xl font-semibold text-sips-navy md:mb-0 md:mt-10"
            >
                The Result
            </h3>
            <p
                class="prose text-sips-navy md:col-span-2 md:mt-10"
                v-html="work?.result"
            />
        </div>
    </section>

    <section>
        <div class="flex justify-center pb-20 text-center">
            <a href="https://form.typeform.com/to/wrXbzSpp" target="_blank">
                <button
                    class="rounded-xl bg-sips-orange px-12 py-3 text-xl font-medium text-white hover:bg-orange-600"
                >
                    Contact Us
                </button>
            </a>
        </div>
    </section>

    <section
        :class="
            `flex items-center py-5 md:py-20 ` +
            (work?.color ? `bg-${work.color}` : 'bg-sips-navy')
        "
        v-if="work.content_url.length > 1"
    >
        <div
            id="default-carousel"
            class="container relative mx-auto w-4/5"
            data-carousel="slide"
        >
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div
                    class="hidden duration-700 ease-in-out"
                    data-carousel-item
                    v-for="(item, index) in work.content_url"
                >
                    <NuxtImg
                        :src="item"
                        class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                    />
                </div>
                <!-- Item 2 -->
                <!-- <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <NuxtImg
                        src="https://digital.sipsedutech.id/what-we-do-at-sips-digital-creative.webp"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        alt="..."
                    />
                </div> -->
            </div>
            <!-- Slider indicators -->
            <div
                class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3"
            >
                <button
                    type="button"
                    class="h-3 w-3 rounded-full"
                    v-for="(item, index) in work.content_url"
                    aria-current="true"
                    :aria-label="`Slide ${index + 1}`"
                    :data-carousel-slide-to="index"
                ></button>
                <!-- <button
                    type="button"
                    class="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                ></button> -->
            </div>
            <!-- Slider controls -->
            <button
                type="button"
                class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-prev
            >
                <span
                    class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                >
                    <svg
                        class="h-4 w-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-next
            >
                <span
                    class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
                >
                    <svg
                        class="h-4 w-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
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
import { getRandomColor } from '@/utils/helpers';
import { initFlowbite } from 'flowbite';

export default {
    name: 'Our Work',
    data() {
        return {
            work: {
                challenge: 'Loading...',
                approach: 'Loading...',
                result: 'Loading...',
                content_url: [],
            },
        };
    },
    async mounted() {
        const route = useRoute();
        const id = route.params.id;
        this.getData(id);

        // initialize components based on data attribute selectors
        setTimeout(() => {
            initFlowbite();
        }, 1500);
    },
    methods: {
        setMeta() {
            // useHead({
            //     titleTemplate: (titleChunk) => {
            //         return titleChunk
            //             ? `${this.work.title} - Our Work | ${titleChunk}`
            //             : `${this.work.title} - Our Work`;
            //     },
            //     meta: [
            //         {
            //             hid: 'title',
            //             name: 'title',
            //             content: this.work?.meta_title,
            //         },
            //         {
            //             hid: 'description',
            //             name: 'description',
            //             content: this.work?.meta_description,
            //         },
            //     ],
            //     link: [
            //         {
            //             hid: 'canonical',
            //             rel: 'canonical',
            //             href: `https://digital.sipsedutech.id/works/${this.work.slug}`,
            //         },
            //     ],
            // });

            useSeoMeta({
                title: this.work?.meta_title,
                ogTitle: this.work?.meta_title,
                description: this.work?.meta_description,
                ogDescription: this.work?.meta_description,
                canonical: `https://digital.sipsedutech.id/works/${this.work.slug}`,
                ogImage: this.work?.img_url,
                ogUrl: `https://digital.sipsedutech.id/${this.work.slug}`,
                twitterTitle: this.work?.meta_title,
                twitterDescription: this.work?.meta_description,
                twitterImage: this.work?.img_url,
                twitterCard: this.work?.meta_description,
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
