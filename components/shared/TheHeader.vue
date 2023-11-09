<template>
    <div>
        <header>
            <nav class="fixed top-0 left-0 z-20 w-full bg-black shadow-sm">
                <div
                    class="container flex flex-wrap items-center justify-between p-5 mx-auto md:text-lg md:font-semibold"
                >
                    <NuxtLink to="/" aria-label="To homepage">
                        <img
                            src="/sips-ico.png"
                            class="w-2/4 ml-5 md:w-2/4 xl:ml-0 xl:w-3/4"
                            alt="SIPS Digital Creative"
                            data-aos="flip-left"
                        />
                        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SIPS Digital Creative</span> -->
                    </NuxtLink>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        id="hamburger-button"
                        class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        class="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul
                            class="flex flex-col p-4 mt-4 font-medium text-orange-500 md:mt-0 md:flex-row md:space-x-8 md:bg-black md:p-0 md:font-semibold md:text-slate-100"
                        >
                            <li @click="closeNavbar()">
                                <NuxtLink
                                    to="/"
                                    aria-label="Home Page"
                                    class="block py-2 pl-3 pr-4 text-gray-200 rounded my-link md:bg-transparent md:p-0 md:text-white"
                                    aria-current="page"
                                    >HOME</NuxtLink
                                >
                            </li>
                            <li @click="closeNavbar()">
                                <NuxtLink
                                    to="/services"
                                    aria-label="List of company services"
                                    class="block py-2 pl-3 pr-4 text-gray-200 rounded my-link hover:bg-gray-100 md:border-0 md:p-0 md:text-white md:hover:bg-transparent md:hover:text-sips-orange"
                                    >SERVICES</NuxtLink
                                >
                            </li>
                            <li @click="closeNavbar()">
                                <NuxtLink
                                    to="/works"
                                    class="block py-2 pl-3 pr-4 text-gray-200 rounded my-link hover:bg-gray-100 md:border-0 md:p-0 md:text-white md:hover:bg-transparent md:hover:text-sips-orange"
                                    >WORKS</NuxtLink
                                >
                            </li>
                            <li @click="closeNavbar()">
                                <NuxtLink
                                    to="/insights"
                                    class="block py-2 pl-3 pr-4 text-gray-200 rounded my-link hover:bg-gray-100 md:border-0 md:p-0 md:text-white md:hover:bg-transparent md:hover:text-sips-orange"
                                    >INSIGHTS</NuxtLink
                                >
                            </li>
                            <li @click="closeNavbar()">
                                <a
                                    href="https://sipsedutech.id/en/about"
                                    target="_blank"
                                    aria-label="About company"
                                    class="block py-2 pl-3 pr-4 text-gray-200 rounded my-link hover:bg-gray-100 md:border-0 md:p-0 md:text-white md:hover:bg-transparent md:hover:text-sips-orange"
                                    >ABOUT</a
                                >
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

    <div class="h-[91px] xl:h-[101px]"></div>
</template>

<style scoped>
.my-link.router-link-exact-active,
.my-link.router-link-active {
    color: #f36e24;
}

@media (max-width: 768px) {
    .my-link.router-link-exact-active,
    .my-link.router-link-active {
        color: white;
        background-color: #f36e24;
    }
}
</style>

<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

function closeNavbar() {
    var elem = document.getElementById('hamburger-button');
    elem.click();
}

// initialize components based on data attribute selectors
onMounted(() => {
    setTimeout(() => {
        initFlowbite();
        console.log('initFlowbite');
    }, 3000);
});
</script>
