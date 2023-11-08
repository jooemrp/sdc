<template>
    <section
        class="flex items-center bg-gradient-to-br from-blue-900 to-orange-700 pb-20 pt-28"
    >
        <div class="container mx-auto p-5 text-white xl:p-0">
            <h1
                class="max-w-4xl text-5xl font-bold xl:text-7xl"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                See How We Drive Success for Our Clients
            </h1>
            <p
                class="max-w-5xl py-8 xl:py-12 xl:text-2xl xl:leading-normal"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                Explore our success stories and see firsthand how we've helped
                our clients thrive. From boosting online presence to creating
                effective marketing strategies, we've partnered with various
                healthcare and pharmaceutical companies to deliver measurable
                results. Get inspired by their journeys and see what we can do
                for your business.
            </p>
        </div>
    </section>

    <section class="container mx-auto w-4/5 py-10 md:py-14">
        <h2
            class="mb-5 text-center text-4xl font-bold leading-normal text-sips-orange md:mb-10 xl:text-5xl"
        >
            Updates
        </h2>
        <div
            class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"
            v-if="!contentIsLoading"
        >
            <div v-for="content in contents">
                <CardContentCard :content="content" />
            </div>
        </div>
        <div class="flex justify-center" v-else>
            <SharedLoader />
        </div>
    </section>

    <section class="bg-slate-100">
        <div class="container mx-auto w-4/5 py-10 md:py-14">
            <h2
                class="mb-5 text-center text-4xl font-bold leading-normal text-sips-navy md:mb-10 xl:text-5xl"
            >
                Case Study
            </h2>
            <div
                class="grid grid-cols-1 gap-6 lg:grid-cols-2"
                v-if="!workIsLoading"
            >
                <div v-for="w in works">
                    <CardWorkCard :work="w" />
                </div>
            </div>
            <div class="flex justify-center" v-else>
                <SharedLoader />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Our Works',
    data() {
        return {
            contentIsLoading: true,
            contents: [],
            workIsLoading: true,
            works: [],
        };
    },
    async mounted() {
        useHead({
            titleTemplate: (titleChunk) => {
                return titleChunk ? `Our Work | ${titleChunk}` : `Our Work`;
            },
            meta: [
                {
                    hid: 'title',
                    name: 'title',
                    content:
                        'Pharma Marketing Case Studies | Our Works - SIPS Digital Creative ',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'At SIPS Digital Creative, we specialize in custom solutions that turn your pharma goals into realities. Explore our services for precision marketing success',
                },
            ],
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: 'https://digital.sipsedutech.id/works',
                },
            ],
        });

        await nextTick(async () => {
            await this.getContent();
            await this.getList();
        });
    },
    methods: {
        getContent: async function (contentType = 'update') {
            this.contentIsLoading = true;

            await fetch(
                `https://api.sipsedutech.id/api/content?type=${contentType}&per_page=3`,
            )
                .then((response) => response.json())
                .then((data) => {
                    this.contents = data.data;
                    this.contentIsLoading = false;
                });
        },
        getList: async function () {
            this.workIsLoading = true;

            await useFetch(`https://api.sipsedutech.id/api/works`).then(
                (res) => {
                    console.log(res);
                    if (res.data.value) {
                        this.works = res.data.value.data;
                    } else {
                        console.log('a');
                    }
                },
                (error) => {
                    console.log(error);
                },
            );

            this.workIsLoading = false;
        },
    },
};
</script>

<style scoped>
#h-50 {
    min-height: 60vh;
}

#h-25 {
    min-height: 30vh;
}
</style>
