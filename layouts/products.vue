<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 flex justify-between">
				<NuxtLink to="/products" class="font-bold">Products</NuxtLink>
				<ul class="flex gap-4">
					<li><NuxtLink to="/">Beranda</NuxtLink></li>
					<li><NuxtLink to="/about">Tentang</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
					<li><NuxtLink to="/services">Layanan</NuxtLink></li>
					<li><NuxtLink to="/contact">Kontak</NuxtLink></li>
				</ul>
			</nav>
		</header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-center border-t-2">
            <ul class="flex gap-4">
				<li><NuxtLink to="/">Beranda</NuxtLink></li>
				<li><NuxtLink to="/about">Tentang</NuxtLink></li>
			</ul>
        </footer>
	</div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #F36E24;
    }
</style>