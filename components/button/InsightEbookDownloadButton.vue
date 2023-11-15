<template>
    <!-- Modal toggle -->
    <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        class="block rounded-lg bg-amber-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
        type="button"
    >
        Download E-book
    </button>

    <!-- Main modal -->
    <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
        <div class="relative max-h-full w-full max-w-md p-4">
            <!-- Modal content -->
            <div class="relative rounded-md bg-[#31446e] shadow">
                <!-- Modal header -->
                <div
                    class="flex items-center justify-between rounded-t border-b p-4 md:p-5"
                >
                    <h3
                        class="items-center justify-center text-center text-xl font-semibold"
                    >
                        <img
                            src="/sips-logo-white.png"
                            class="h-8 w-8"
                            alt="SIPS Digital Creative"
                            data-aos="flip-left"
                        />
                    </h3>
                    <button
                        type="button"
                        class="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                        id="close-authentication-modal-btn"
                        data-modal-hide="authentication-modal"
                    >
                        <svg
                            class="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5">
                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                v-model="input.name"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="Nama Lengkap"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                v-model="input.email"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                placeholder="E-mail Perusahaan"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                v-model="input.company"
                                placeholder="Nama Perusahaan"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                v-model="input.phone"
                                placeholder="Nomor HP"
                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            @click.prevent="submitForm"
                            :disabled="isSaving"
                            class="w-full rounded-lg bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            {{ isSaving ? 'LOADING...' : 'DOWNLOAD SEKARANG' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { initFlowbite, Modal } from 'flowbite';
import { useToast } from 'vue-toastification';

const Toast = useToast();

export default {
    props: ['slug', 'link'],
    data() {
        return {
            isSaving: false,
            input: {
                name: '',
                email: '',
                company: '',
                phone: '',
            },
        };
    },
    async mounted() {
        setTimeout(() => initFlowbite(), 1500);
    },
    methods: {
        submitForm: async function () {
            this.isSaving = true;

            await useFetch(
                'https://api.sipsedutech.id/api/content/download-ebook',
                {
                    method: 'POST',
                    body: {
                        slug: this.slug,
                        name: this.input.name,
                        email: this.input.email,
                        company: this.input.company,
                        phone: this.input.phone,
                    },
                },
            ).then(
                (res) => {
                    const data = res.data.value;
                    const error = res.error.value;

                    if (error) {
                        Toast.error(
                            error.statusCode == 406
                                ? error.data.error.message
                                : 'Error',
                        );
                    } else {
                        this.closeModal();

                        if (data.status_code == 200) {
                            // TO DO: Redirect to thank you page
                            this.$router.push(
                                `/thankyou?linkToShare=${this.link}&email=${this.input.email}`,
                            );
                        } else {
                            Toast.success(data.message);
                        }
                    }
                },
                (error) => {
                    Toast.error('Error');
                },
            );

            this.isSaving = false;
            return;
        },
        closeModal: function () {
            // const $targetEl = document.getElementById('authentication-modal');
            // const options = {
            //     onHide: () => {
            //         console.log('modal is hidden');
            //     },
            // };
            // const modal = new Modal($targetEl, options);

            // modal.hide();

            var elem = document.getElementById(
                'close-authentication-modal-btn',
            );
            elem.click();
        },
    },
};
</script>
