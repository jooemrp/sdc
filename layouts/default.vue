<template>
    <SharedTheHeader />
    <div class="mx-auto">
        <slot />
    </div>
    <SharedTheFooter />
</template>

<style scoped>
.router-link-exact-active {
    color: #F36E24;
}
</style>