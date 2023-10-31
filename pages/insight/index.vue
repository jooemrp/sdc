<template>
    <div
        class="mx-auto flex justify-center bg-gradient-to-r from-sips-green to-green-500 pb-24 pt-24"
    >
        <div class="container text-center">
            <h1
                class="mx-5 mb-5 text-5xl font-bold text-white xl:text-6xl xl:leading-snug"
            >
                Streamline Your Decisions and Stay Ahead with Our Insightful
                Resources
            </h1>
            <p
                class="mx-auto mb-5 mt-10 w-3/4 text-2xl leading-relaxed text-white"
            >
                Explore our valuable resources and expert perspectives to make
                your decisions more informed and your industry insights more
                cutting-edge. Explore now and empower your journey to success
            </p>
        </div>
    </div>

    <section class="mx-auto py-8 md:py-10">
        <div class="mx-5 justify-center md:mx-24">
            <div class="grid grid-cols-3 gap-4 text-center">
                <div v-for="item in contentItems">
                    <div
                        tabindex="0"
                        @click="
                            changeContent(item.title);
                            toggleContent(item, $event);
                        "
                        :class="{ contentActive: item.clicked }"
                        class="content-item mx-auto my-1 cursor-pointer rounded-sm border-b-4 bg-slate-100 p-4 text-black hover:border-b-4 hover:border-sips-orange hover:bg-slate-200"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <!-- 
        <!-- <div class="mx-32 grid grid-cols-3 gap-4 text-center md:mx-40">
            <div v-if="contents.length > 0">
                <div v-for="content in contents">
                    <CardContentCard :content="content" />
                </div>
            </div>
            <div v-else>
                <h2>
                    {{ contentIsLoading ? 'Loading...' : 'No content yet.' }}
                </h2>
            </div>
        </div> -->
        -->
    </section>
</template>

<script>
export default {
    name: 'Home',
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
        };
    },
    async mounted() {
        useHead({
            titleTemplate: (titleChunk) => {
                return titleChunk ? `${titleChunk}` : `Home`;
            },
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content: 'Home',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Experience Digital Precision in Your Pharmaceutical Marketing Strategy',
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
            await useFetch(`https://api.sipsedutech.id/api/content`, {
                query: {
                    type: contentType,
                    per_page: 5,
                },
            }).then(
                (res) => {
                    console.log(res);
                    if (res.data.value) {
                        this.contents = res.data.value.data;
                    }
                    this.contentIsLoading = false;
                },
                (error) => {
                    console.log(error);
                },
            );
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
