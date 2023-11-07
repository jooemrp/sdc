<template>
    <footer class="bg-sips-navy">
        <div class="container p-4 mx-auto md:py-8">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div
                    class="flex items-center justify-center my-6 sm:justify-start md:my-0"
                >
                    <a
                        href="https://sipsedutech.id/en/"
                        class="flex items-center sm:mb-0 xl:my-0 xl:ml-0"
                    >
                        <img src="/sips-white.webp" class="" alt="SIPS Logo" />
                    </a>
                </div>

                <div class="flex items-center sm:hidden lg:flex">
                    <ul
                        class="flex-wrap items-center hidden mb-6 text-sm font-medium text-gray-50 dark:text-gray-400 sm:mb-0 xl:flex"
                    >
                        <li class="ml-10 hover:underline">
                            <NuxtLink
                                to="/faqs"
                                aria-label="Frequently Asked Questions"
                                >FAQs</NuxtLink
                            >
                        </li>
                        <li class="ml-10 hover:underline">
                            <NuxtLink
                                to="/works"
                                aria-label="Terms and Conditions"
                                >Works</NuxtLink
                            >
                        </li>
                        <li class="ml-10 hover:underline">
                            <a href="https://sipsedutech.id/en/about"
                                aria-label="About Company"
                                >About</a
                            >
                        </li>
                    </ul>
                </div>

                <div
                    class="flex items-center justify-center sm:justify-end md:col-span-2 lg:col-span-1"
                >
                    <div class="flex space-y-0 md:w-8/12 lg:w-10/12">
                        <div class="relative w-full">
                            <label
                                for="email"
                                class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >Email address</label
                            >
                            <div
                                class="absolute inset-y-0 left-0 pl-3 pointer-events-none top-3"
                            >
                                <svg
                                    class="w-5 h-5 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    ></path>
                                    <path
                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-none rounded-l-lg focus:ring-primary-500 focus:border-primary-500 bg-gray-50"
                                placeholder="Enter your email"
                                type="email"
                                id="email"
                                required="true"
                                v-model="inputEmailNewsletter"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                @click="subscribeNewsletter()"
                                class="w-full px-5 py-3 text-sm font-medium text-center text-white border rounded-none rounded-r-lg cursor-pointer border-primary-600 hover:bg-primary-800 focus:ring-primary-300 bg-sips-orange focus:ring-4"
                                :disabled="isSaving"
                            >
                                {{ isSaving ? 'Loading...' : 'Subscribe' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-center text-gray-50"
                ><a
                    href="https://sipsedutech.id/en/about"
                    class="hover:underline"
                    >PT. SIPS Edutech Indonesia</a
                >
                &nbsp; © &nbsp; 2023
            </span>
        </div>
    </footer>
</template>

<script>
import { useToast } from 'vue-toastification';
const Toast = useToast();

export default {
    name: 'Footer',
    data() {
        return {
            inputEmailNewsletter: '',
            isSaving: false,
        };
    },
    methods: {
        subscribeNewsletter: async function () {
            this.isSaving = true;

            if (this.inputEmailNewsletter == '') {
                Toast.error('Email is required');
                this.isSaving = false;
                return;
            }

            await useFetch('https://api.sipsedutech.id/api/subscribe', {
                method: 'POST',
                body: {
                    email: this.inputEmailNewsletter,
                },
            }).then(
                (res) => {
                    const data = res.data.value;
                    const error = res.error.value;

                    if (error) {
                        Toast.error('Error');
                    } else {
                        this.inputEmailNewsletter = '';
                        Toast.success(data.message);
                    }
                },
                (error) => {
                    Toast.error('Error');
                },
            );

            this.isSaving = false;
            return;
        },
    },
};
</script>

<style scoped></style>
