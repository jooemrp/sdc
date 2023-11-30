<template>
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
</template>

<script setup>
const { content } = defineProps(["content"]);
import { truncateString } from "@/utils/helpers";
</script>
