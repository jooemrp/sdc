<template>
	<div>
		<header class="shadow-sm bg-black">
			<nav class="container mx-auto p-4 flex justify-between py-6 text-lg text-slate-100 font-semibold">
				<NuxtLink to="/">SIPS Digital Creative</NuxtLink>
				<ul class="flex gap-16">
					<li><NuxtLink to="/capabilities">CAPABILITIES</NuxtLink></li>
					<li><NuxtLink to="/work">WORK</NuxtLink></li>
					<li><NuxtLink to="/about">ABOUT US</NuxtLink></li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #F36E24;
    }
</style>