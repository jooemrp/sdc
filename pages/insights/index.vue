<template>
    <div
        class="flex justify-center pt-24 pb-24 mx-auto bg-gradient-to-r from-sips-green to-green-500"
    >
        <div class="container text-center">
            <h1
                class="mb-5 text-4xl font-bold text-white mx-14 xl:text-6xl xl:leading-snug"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                Streamline Your Decisions and Stay Ahead with Our Insightful
                Resources
            </h1>
            <p
                class="w-4/5 mx-auto mt-10 mb-5 text-white xl:leading-relaxed xl:text-2xl"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                Explore our valuable resources and expert perspectives to make
                your decisions more informed and your industry insights more
                cutting-edge. Explore now and empower your journey to success
            </p>
        </div>
    </div>

    <section class="justify-center py-10 mx-5 md:mx-0 md:py-10">
        <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-2 md:flex md:justify-center">
                <div v-for="item in contentItems">
                    <div
                        tabindex="0"
                        @click="
                            changeContent(item.title);
                            toggleContent(item, $event);
                        "
                        :class="{ contentActive: item.clicked }"
                        class="max-w-md p-2 mx-1 my-1 text-center text-black border-b-4 rounded-sm cursor-pointer content-item bg-slate-100 hover:border-b-4 hover:border-sips-orange hover:bg-slate-200 md:w-52 md:p-4"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>

            <div v-if="contents.length > 0">
                <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
                    <div v-for="content in contents">
                        <CardContentCard :content="content" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="w-full mx-1 my-20 text-center">
                    {{ contentIsLoading ? 'Loading...' : 'No content yet.' }}
                </div>
            </div>

            <div class="flex justify-center" v-if="nextUrl != null">
                <button
                    class="p-3 text-gray-900 rounded-full text-md mt-7 bg-slate-200 hover:bg-slate-300"
                    @click="moreContent()"
                >
                    {{ showMoreIsLoading ? 'Loading...' : 'Show more' }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Insight',
    data() {
        return {
            contents: [],
            contentItems: [
                {
                    name: 'Articles',
                    title: 'article',
                    clicked: true,
                },
                {
                    name: 'Resources',
                    title: 'resource',
                    clicked: false,
                },
                // {
                //     name: 'Updates',
                //     title: 'update',
                //     clicked: false,
                // },
            ],
            contentIsLoading: true,
            nextUrl: null,
            showMoreIsLoading: false,
        };
    },
    async mounted() {
        // useHead({
        //     titleTemplate: (titleChunk) => {
        //         return titleChunk ? `Insight | ${titleChunk} - Pharma Trends & Resources: Your Decision-Making Toolkit` : `Insight`;
        //     },
        //     meta: [
        //         {
        //             hid: 'title',
        //             name: 'title',
        //             content:
        //                 'Insights | SIPS Digital Creative - Pharma Trends & Resources: Your Decision-Making Toolkit',
        //         },
        //         {
        //             hid: 'description',
        //             name: 'description',
        //             content:
        //                 'Stay informed with the latest trends and resources in pharmaceuticals. Enhance your decision-making capabilities with our exclusive toolkit',
        //         },
        //     ],
        //     link: [
        //         {
        //             hid: 'canonical',
        //             rel: 'canonical',
        //             href: 'https://digital.sipsedutech.id/insights',
        //         },
        //     ],
        // });
        useSeoMeta({
            title: 'Pharma Trends & Resources: Your Decision-Making Toolkit',
            ogTitle: 'Pharma Trends & Resources: Your Decision-Making Toolkit',
            description: 'Stay informed with the latest trends and resources in pharmaceuticals. Enhance your decision-making capabilities with our exclusive toolkit',
            ogDescription: 'Stay informed with the latest trends and resources in pharmaceuticals. Enhance your decision-making capabilities with our exclusive toolkit',
            canonical: 'https://digital.sipsedutech.id/insights',
            ogImage: '/insights-sips-digital.webp',
            ogUrl: 'https://digital.sipsedutech.id/',
            twitterTitle: 'Pharma Trends & Resources: Your Decision-Making Toolkit',
            twitterDescription: 'Stay informed with the latest trends and resources in pharmaceuticals. Enhance your decision-making capabilities with our exclusive toolkit',
            twitterImage: '/insights-sips-digital.webp',
            twitterCard: "Explore our valuable resources and expert perspectives to make your decisions more informed and your industry insights more cutting-edge. Explore now and empower your journey to success",
            ogLocale: 'id'
        });
        useHead ({
            htmlAttrs: {
                lang: 'id'
            }
        });

        await nextTick(async () => {
            this.changeContent('article');
        });
    },
    methods: {
        changeContent: async function (contentType = 'article') {
            this.contentIsLoading = true;

            await fetch(
                `https://api.sipsedutech.id/api/content?type=${contentType}&per_page=6`,
            )
                .then((response) => response.json())
                .then((data) => {
                    this.contents = data.data;
                    this.nextUrl = data.links.next;
                    this.contentIsLoading = false;
                });
        },
        toggleContent(item, e) {
            if (e.ctrlKey) {
                item.clicked = !item.clicked;
            } else {
                this.contentItems.forEach(function (entry) {
                    entry.clicked = false;
                });
                item.clicked = true;
            }
        },
        moreContent: async function () {
            this.showMoreIsLoading = true;
            await fetch(this.nextUrl)
                .then((response) => response.json())
                .then((data) => {
                    this.contents = this.contents.concat(data.data);
                    this.nextUrl = data.links.next;
                });
            this.showMoreIsLoading = false;
        },
    },
};
</script>

<style scoped>
.contentActive {
    background-color: rgb(226 232 240);
    border-bottom-width: 4px;
    border-color: rgb(243 109 37);
}
</style>
