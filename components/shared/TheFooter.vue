<template>
	<footer class="bg-sips-navy">
		<div class="container p-4 mx-auto md:py-8">
			<div class="sm:flex sm:items-center sm:justify-between">
				<a href="https://sipsedutech.id/en/" class="flex items-center my-12 xl:my-0 xl:ml-0 sm:mb-0">
					<img src="/sips-white.webp" class="" alt="SIPS Logo" />
				</a>
				<ul class="flex-wrap items-center hidden mb-6 text-sm font-medium xl:flex text-gray-50 sm:mb-0 dark:text-gray-400">
					<li class="ml-10 hover:underline">
						<NuxtLink to="/terms" aria-label="Terms and Conditions">Terms and Conditions</NuxtLink>
					</li>
					<li class="ml-10 hover:underline">
						<NuxtLink to="/privacy" aria-label="About Privacy Policy">Privacy Policy</NuxtLink>
					</li>
					<li class="ml-10 hover:underline">
						<NuxtLink to="/faqs" aria-label="Frequently Asked Questions">FAQs</NuxtLink>
					</li>
				</ul>
				<form action="#">
					<div class="items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
						<div class="relative w-full">
							<label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
							</div>
							<input class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="true">
						</div>
						<div>
							<button type="submit" class="w-full px-5 py-3 text-sm font-medium text-center text-white border rounded-lg cursor-pointer bg-sips-orange border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">Subscribe</button>
						</div>
					</div>
				</form>
			</div>
			<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
			<span class="block text-sm text-center text-gray-50"><a href="https://sipsedutech.id/en/about" class="hover:underline">PT. SIPS Edutech Indonesia</a> &nbsp; © &nbsp; 2023 </span>
		</div>
	</footer>

</template>

<style scoped>

</style>