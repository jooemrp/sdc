<template>
    <div
        :class="contents.length > 1 ? 'mx-10 md:mx-0' : 'mx-none'"
        class="grid-cols-1 rounded-2xl bg-slate-50 shadow-lg md:grid-cols-4 lg:grid"
    >
        <div class="p-5">
            <div v-for="item in contentItems">
                <div
                    tabindex="0"
                    id="content-article"
                    @click="
                        changeContent(item.title);
                        toggleContent(item, $event);
                    "
                    :class="{ contentActive: item.clicked }"
                    class="content-item mx-auto my-1 cursor-pointer snap-start rounded-sm p-4 text-black hover:border-r-4 hover:border-sips-orange hover:bg-slate-100"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>

        <div class="col-span-1 p-5 md:col-span-3">
            <div v-if="contents.length > 0">
                <div
                    class="whitespace-no-wrap flex w-full snap-x overflow-x-auto scroll-smooth"
                >
                    <div v-for="content in contents" class="snap-start">
                        <CardContentCard :content="content" />
                    </div>
                </div>
            </div>
            <div v-else>
                <h2>
                    {{ contentIsLoading ? 'Loading...' : 'No content yet.' }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VerticalInsights',
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
                    content:
                        'Pharmaceutical Marketing Agency | SIPS Digital Creative',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Overwhelmed by pharma marketing complexities? Time to simplify your approach. Discover streamlined solutions to unlock your success. Get started now!',
                },
            ],
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: 'https://digital.sipsedutech.id/',
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
.contentActive {
    /* bg-slate-100 border-r-4 border-sips-orange */
    background-color: rgb(241 245 249);
    border-right-width: 4px;
    border-color: rgb(243 109 37);
}
</style>
