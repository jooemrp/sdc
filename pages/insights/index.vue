<template>
    <div
        class="flex justify-center pt-24 pb-24 mx-auto bg-gradient-to-r from-sips-green to-green-500"
    >
        <div class="container text-center">
            <h1
                class="mx-5 mb-5 text-5xl font-bold text-white xl:text-6xl xl:leading-snug"
            >
                Streamline Your Decisions and Stay Ahead with Our Insightful
                Resources
            </h1>
            <p
                class="w-3/4 mx-auto mt-10 mb-5 text-2xl leading-relaxed text-white"
            >
                Explore our valuable resources and expert perspectives to make
                your decisions more informed and your industry insights more
                cutting-edge. Explore now and empower your journey to success
            </p>
        </div>
    </div>

    <section class="py-8 mx-auto md:py-10">
        <div class="justify-center mx-5 md:mx-24">
            <div class="grid grid-cols-3 gap-4">
                <div v-for="item in contentItems">
                    <div
                        tabindex="0"
                        @click="
                            changeContent(item.title);
                            toggleContent(item, $event);
                        "
                        :class="{ contentActive: item.clicked }"
                        class="p-4 mx-1 my-1 text-center text-black border-b-4 rounded-sm cursor-pointer content-item bg-slate-100 hover:border-b-4 hover:border-sips-orange hover:bg-slate-200"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>

            <div v-if="contents.length > 0">
                <div class="grid grid-cols-3 gap-4 mt-4">
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

            <div class="flex justify-center">
                <button
                    class="hover:bg- mt-12 rounded-xl bg-slate-500 px-5 py-3 text-xl xl:px-12"
                >
                    <NuxtLink
                        to="/insights"
                        aria-label="Home Page"
                        class="my-link block rounded py-2 pl-3 pr-4 text-gray-900 md:bg-transparent md:p-0 md:text-white"
                        aria-current="page"
                        >More</NuxtLink
                    >
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
                {
                    name: 'Updates',
                    title: 'update',
                    clicked: false,
                },
            ],
            contentIsLoading: true,
            nextUrl: '',
        };
    },
    async mounted() {
        useHead({
            titleTemplate: (titleChunk) => {
                return titleChunk ? `Insight | ${titleChunk}` : `Insight`;
            },
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: 'Insights | SIPS Digital Creative - Pharma Trends & Resources: Your Decision-Making Toolkit',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Stay informed with the latest trends and resources in pharmaceuticals. Enhance your decision-making capabilities with our exclusive toolkit',
                },
            ],
        });

        await nextTick(async () => {
            this.changeContent('article');
        });
    },
    methods: {
        changeContent: async function (contentType = 'article') {
            this.contentIsLoading = true;

            await fetch(
                `https://api.sipsedutech.id/api/content?type=${contentType}&per_page=9`,
            )
                .then((response) => response.json())
                .then((data) => {
                    this.contents = data.data;
                    this.nextUrl = res.data.this.contentIsLoading = false;
                });

            // await useFetch(`https://api.sipsedutech.id/api/content`, {
            //     query: {
            //         type: contentType,
            //         per_page: 9,
            //     },
            // }).then(
            //     (res) => {
            //         console.log(res);
            //         if (res.data.value) {
            //             this.contents = res.data.value.data;
            //         }
            //         this.contentIsLoading = false;
            //     },
            //     (error) => {
            //         console.log(error);
            //     },
            // );
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
        moreContent: async function (nextUrl) {
            await fetch(nextUrl)
                .then((response) => response.json())
                .then((data) => {
                    this.contents = merge(this.content, data.data);
                });
        },
    },
};
</script>

<style scoped>
/* #h-50 {
  min-height: 80vh;
}
#h-25 {
  min-height: 30vh;
} */
.contentActive {
    /* bg-slate-100 border-r-4 border-sips-orange */
    background-color: rgb(226 232 240);
    border-bottom-width: 4px;
    border-color: rgb(243 109 37);
}
</style>
