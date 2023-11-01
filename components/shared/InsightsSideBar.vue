<template>
	<div>

	</div>

    <div class="h-[91px] xl:h-[101px]"></div>
</template>

<style scoped>
.my-link.router-link-exact-active, .my-link.router-link-active {
	color: #F36E24;
}

@media (max-width: 768px) {
.my-link.router-link-exact-active, .my-link.router-link-active {
    color: white; 
	background-color: #F36E24;
  }
}

</style>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
})
</script>