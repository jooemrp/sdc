<template>
    <NuxtLink :to="`/insights/${content?.slug}`">
        <div class="m-1 max-w-md flex-none overflow-hidden rounded shadow-md">
            <img
                class="w-full min-w-[200px]"
                src="https://placehold.co/600x400"
                alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
                <div class="text-md mb-2 font-bold">{{ content?.title }}</div>
                <p class="text-sm text-gray-700">
                    {{ truncateString(removeTags(content?.body), 100) }}
                </p>
            </div>
            <!-- <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> -->
        </div>
    </NuxtLink>
</template>

<script setup>
const { content } = defineProps(['content']);
import { truncateString } from '@/utils/helpers';
</script>
