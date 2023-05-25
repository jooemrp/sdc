<template>
	<div>
		<header class="shadow-sm bg-black">
			<nav class="container mx-auto flex xl:justify-between justify-center py-6 text-lg text-slate-100 font-semibold">
				<NuxtLink to="/" aria-label="To homepage">
					<img src="/sips-ico.png" class="w-3/4 hidden xl:block" alt="SIPS Digital Creative">
				</NuxtLink>
				<ul class="flex gap-16 items-center">
					<li><NuxtLink to="/capabilities" aria-label="Temporary disabled until development finish">CAPABILITIES</NuxtLink></li>
					<li><NuxtLink to="#" aria-label="Temporary disabled until development finish">WORK</NuxtLink></li>
					<li><a href="https://sipsedutech.id/en/about" target="_blank" aria-label="About company">ABOUT</a></li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<style scoped>
    /* .router-link-exact-active {
        color: #F36E24;
    } */
</style>