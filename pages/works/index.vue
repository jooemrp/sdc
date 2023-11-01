<template>
    <div
        id="h-50"
        class="flex items-center pb-20 bg-gradient-to-br from-blue-900 to-orange-700 pt-28"
    >
        <div class="container p-5 mx-auto text-white xl:p-0">
            <h1 class="max-w-4xl text-5xl font-bold xl:text-7xl">
                See How We Drive Success for Our Clients
            </h1>
            <p class="max-w-5xl py-8 xl:py-12 xl:text-2xl xl:leading-normal">
                Explore our success stories and see firsthand how we've helped
                our clients thrive. From boosting online presence to creating
                effective marketing strategies, we've partnered with various
                healthcare and pharmaceutical companies to deliver measurable
                results. Get inspired by their journeys and see what we can do
                for your business.
            </p>
        </div>
    </div>

  <div class="container w-4/5 mx-auto mt-20">
    <div class="grid grid-cols-1 gap-6 my-10 lg:grid-cols-2">
      <div v-for="w in works">
        <WorkCard :work="w" />
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Our Works',
    data() {
        return {
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
                    content: 'Pharma Marketing Case Studies | Our Works - SIPS Digital Creative ',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'At SIPS Digital Creative, we specialize in custom solutions that turn your pharma goals into realities. Explore our services for precision marketing success',
                },
            ],
            link: [
                {
                    hid:'canonical',
                    rel:'canonical',
                    href:'https://digital.sipsedutech.id/works'
                },
            ]
        });

        await nextTick(async () => {
            await this.getList();
        });
    },
    methods: {
        getList: async function () {
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
