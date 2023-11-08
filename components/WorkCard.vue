<template>
    <NuxtLink :to="`/works/${work.slug}`">
        <div :class="`max-w-md mx-auto rounded-md shadow-lg overflow-hidden md:max-w-2xl mb-3 ` + (work.color ? `bg-${work.color}` : 'bg-' + getRandomColor())">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <NuxtImg class="object-cover w-full h-48 md:w-48" :src="work.img_url ?? 'https://placehold.co/400'" :alt="work.title"/>
                </div>
                <div class="flex flex-col justify-center h-48 p-8 md:pt-12">
                    <div class="text-sm font-semibold tracking-wide text-white uppercase">{{ work.title }}</div>
                    <p class="mt-2 text-sm text-slate-100">{{ work.preview ?? truncateString(work.challenge, 100) }}</p>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { getRandomColor, truncateString } from "@/utils/helpers";
const { work } = defineProps(['work'])

</script>

<style scoped>
.thumbnail {
    max-height: 350px;
    /* max-width: 70%; */
    margin: 0 auto;
}
</style>