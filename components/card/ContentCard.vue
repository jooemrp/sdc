<template>
    <NuxtLink :to="`/insights/${content?.slug}`">
        <div class="flex-none max-w-md m-1 overflow-hidden rounded shadow-md">
            <NuxtPicture 
                :src="content?.thumbnail ?? 'https://placehold.co/600x400'"
                :imgAttrs="{class:'w-full min-w-[200px]'}"
                :alt="content?.title"/>
            <div class="px-6 py-4">
                <div class="mb-2 font-bold text-md">{{ content?.title }}</div>
                <p class="text-sm text-gray-700">
                    {{ truncateString(removeTags(content?.body), 100) }}
                </p>
            </div>
            <!-- <div class="px-6 pt-4 pb-2">
            <span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#photography</span>
            <span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#travel</span>
            <span class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">#winter</span>
        </div> -->
        </div>
    </NuxtLink>
</template>

<script setup>
const { content } = defineProps(['content']);
import { truncateString } from '@/utils/helpers';
</script>
