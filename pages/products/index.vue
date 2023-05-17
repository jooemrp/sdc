<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products.data">
               <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductCard from '~~/components/ProductCard.vue';

    definePageMeta({
        layout: 'products'
    })

    // fetch sejawat events
    // const { data: products } = await useFetch('https://fakestoreapi.com/products')
    const { data: products } = await useFetch('https://sejawat.co.id/api/v1/event/upcoming')
    // const { data: product } = await useFetch(uri, { headers: { Accept: 'application/json', AppAuthorization: 'base64:RnGryzX7OKJ5blMAZBdd6Ol71Jh9AZWudSjJ8pzHIT0='} })
</script>

<style scoped>

</style>