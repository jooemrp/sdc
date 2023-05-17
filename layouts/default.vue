<template>
	<div>
	<TheHeader/>
        <div class="mx-auto">
            <slot />
        </div>
	<TheFooter/>
	</div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #F36E24;
    }
</style>