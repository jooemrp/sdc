<template>
    <NuxtLink :to="`/works/${work.id}`">
        <div :class="`max-w-md mx-auto rounded-md shadow-lg overflow-hidden md:max-w-2xl mb-3 ` + (work.color ? `bg-${work.color}` : 'bg-' + getRandomColor())">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover md:w-48" :src="work.img_url ?? 'https://placehold.co/400'" :alt="work.title">
                </div>
                <div class="p-8 h-48 md:pt-12 flex flex-col justify-center">
                    <div class="uppercase tracking-wide text-sm text-white font-semibold">{{ work.title }}</div>
                    <p class="mt-2 text-slate-100 text-sm">{{ work.preview ?? truncateString(work.challenge, 100) }}</p>
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