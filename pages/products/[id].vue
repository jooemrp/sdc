<template>
    <div>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://sejawat.co.id/api/v1/event/' + id
   
    //fetch single post
    // const { data: product } = await useFetch(uri, { key: id })
    const { data: product } = await useFetch(uri, { headers: { Accept: 'application/json', AppAuthorization: 'base64:RnGryzX7OKJ5blMAZBdd6Ol71Jh9AZWudSjJ8pzHIT0='} })

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>