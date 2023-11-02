<template>
    <footer class="bg-sips-navy">
        <div class="container mx-auto p-4 md:py-8">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div
                    class="my-6 flex items-center justify-center sm:justify-start md:my-0"
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
                        class="mb-6 hidden flex-wrap items-center text-sm font-medium text-gray-50 dark:text-gray-400 sm:mb-0 xl:flex"
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
                                to="/terms"
                                aria-label="Terms and Conditions"
                                >Terms and Conditions</NuxtLink
                            >
                        </li>
                        <li class="ml-10 hover:underline">
                            <NuxtLink
                                to="/privacy"
                                aria-label="About Privacy Policy"
                                >Privacy Policy</NuxtLink
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
                                class="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                                >Email address</label
                            >
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 top-3 pl-3"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-500"
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
                                class="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none rounded-l-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900"
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
                                class="border-primary-600 hover:bg-primary-800 focus:ring-primary-300 w-full cursor-pointer rounded-none rounded-r-lg border bg-sips-orange px-5 py-3 text-center text-sm font-medium text-white focus:ring-4"
                                :disabled="isSaving"
                            >
                                {{ isSaving ? 'Loading...' : 'Subscribe' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-center text-sm text-gray-50"
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
