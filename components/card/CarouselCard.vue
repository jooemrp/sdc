<template>
  <Carousel :items-to-show="1" :wrap-around="true" :autoplay="5000" :transition="3000">
    <Slide v-for="slide in 2" :key="slide">
      <div class="mx-5" v-for="content in contents">
        <NuxtLink :to="`/insights/${content?.slug}`">
          <div class="flex-none max-w-md m-1 overflow-hidden rounded shadow-md">
            <NuxtPicture
              :src="content?.thumbnail ?? 'https://placehold.co/600x400'"
              :imgAttrs="{ class: 'w-full min-w-[200px]' }"
              :alt="content?.title"
            />
            <div class="px-6 py-4">
              <div class="mb-2 font-bold text-md">{{ content?.title }}</div>
              <p class="text-sm text-gray-700">
                {{ truncateString(removeTags(content?.body), 100) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import ContentCard from "./ContentCard.vue";

export default defineComponent({
  name: "WrapAround",
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
      workIsLoading: true,
      works: [],
    };
  },
  async mounted() {
    await nextTick(async () => {
      await this.getContent();
      await this.getList();
    });
  },
  methods: {
    getContent: async function (contentType = "update") {
      this.contentIsLoading = true;

      await fetch(`https://api.sipsedutech.id/api/content?type=${contentType}&per_page=3`)
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
          if (res.data.value) {
            this.works = res.data.value.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );

      this.workIsLoading = false;
    },
  },
});
</script>
