<template>
    <div id="h-50" class="flex items-center bg-gradient-to-br from-blue-900 to-orange-700">
    <div class="container mx-auto text-white xl:p-0 p-5">
        <h1 class="xl:text-7xl text-5xl font-bold max-w-4xl">See How We Drive Success for Our Clients</h1>
      <p class="xl:text-2xl xl:py-12 py-8 xl:leading-normal max-w-5xl">Explore our success stories and see firsthand how we've helped our clients thrive. From boosting online presence to creating effective marketing strategies, we've partnered with various healthcare and pharmaceutical companies to deliver measurable results. Get inspired by their journeys and see what we can do for your business.</p>
    </div>
  </div>
<div class="mx-auto w-4/5">
    <div class="grid grid-cols-3 gap-5 my-10">
        <div v-for="w in works.data">
            <WorkCard :work="w" />
        </div>
    </div>
</div>
</template>

<script setup>
    const { data: works } = await useFetch('https://api.sipsedutech.id/api/works')

    definePageMeta ({
        layout: 'works'
    })
</script>

<style scoped>
#h-50 {
  min-height: 60vh;
}
#h-25 {
  min-height: 30vh;
}
</style>