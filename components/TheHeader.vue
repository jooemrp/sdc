<template>
	<div>
		<header class="bg-black shadow-sm">
			<nav class="container flex justify-center py-6 mx-auto text-lg font-semibold xl:justify-between text-slate-100">
				<NuxtLink to="/" aria-label="To homepage">
					<img src="/sips-ico.png" class="w-1/3 ml-5 xl:w-2/4 md:w-2/4 xl:ml-0" alt="SIPS Digital Creative">
				</NuxtLink>
				<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 mr-5 text-sm text-gray-500 rounded-lg shadow xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white" aria-controls="navbar-sticky" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
					</svg>
				</button>
				<div class="items-center justify-end hidden w-full xl:flex" id="navbar-sticky">
					<ul class="flex items-center gap-16">
						<!-- <li><NuxtLink to="/capabilities" aria-label="Temporary disabled until development finish">CAPABILITIES</NuxtLink></li> -->
						<li><NuxtLink to="/" aria-label="Home Page">HOME</NuxtLink></li>
						<li><NuxtLink to="/services" aria-label="List of company services">SERVICES</NuxtLink></li>
						<!-- <li><NuxtLink to="#" aria-label="Temporary disabled until development finish">WORK</NuxtLink></li> -->
						<li><a href="https://sipsedutech.id/en/about" target="_blank" aria-label="About company">ABOUT</a></li>
					</ul>
				</div>
			</nav>
		</header>
	</div>
</template>

<style scoped>
    /* .router-link-exact-active {
        color: #F36E24;
    } */
</style>