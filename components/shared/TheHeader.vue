<template>
	<div>
		<header>
			<nav class="fixed top-0 left-0 z-20 w-full bg-black shadow-sm">
				<div class="container flex flex-wrap items-center justify-between p-5 mx-auto md:font-semibold md:text-lg">
					<NuxtLink to="/" aria-label="To homepage">
						<img src="/sips-ico.png" class="w-2/4 ml-5 xl:w-3/4 md:w-2/4 xl:ml-0" alt="SIPS Digital Creative">
						<!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SIPS Digital Creative</span> -->
					</NuxtLink>
					<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400" aria-controls="navbar-default" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
					<div class="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul class="flex flex-col p-4 mt-4 font-medium text-orange-500 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:font-semibold md:text-slate-100 md:bg-black">
							<li>
								<NuxtLink to="/" aria-label="Home Page" class="block py-2 pl-3 pr-4 text-gray-900 rounded my-link md:text-white md:bg-transparent md:p-0" aria-current="page">HOME</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/services" aria-label="List of company services" class="block py-2 pl-3 pr-4 text-gray-900 rounded my-link md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sips-orange md:p-0">SERVICES</NuxtLink>
							</li>
							<li>
								<a href="https://sipsedutech.id/en/about" target="_blank" aria-label="About company" class="block py-2 pl-3 pr-4 text-gray-900 rounded my-link md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sips-orange md:p-0">ABOUT</a>
							</li>
							<li>
								<NuxtLink to="/works" class="block py-2 pl-3 pr-4 text-gray-900 rounded my-link md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sips-orange md:p-0">WORKS</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/insights" class="block py-2 pl-3 pr-4 text-gray-900 rounded my-link md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sips-orange md:p-0">INSIGHTS</NuxtLink>
							</li>
							<!-- <li>
								<NuxtLink to="/capabilities" class="block py-2 pl-3 pr-4 text-gray-900 rounded my-link hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CAPABILITIES</NuxtLink>
							</li> -->
							
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</div>
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