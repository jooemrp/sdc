<template>
    <div
        class="flex items-center bg-gradient-to-br from-blue-900 to-orange-700 py-10 md:px-0 md:py-20 xl:px-20"
    >
        <div
            class="container mx-auto flex items-center justify-center p-1 text-white md:px-3"
        >
            <h1 class="text-center text-3xl font-bold md:text-5xl lg:text-6xl">
                Frequently Asked Questions
            </h1>
        </div>
    </div>

    <div class="container mx-auto w-4/5 items-center xl:w-3/5">
        <div class="my-10 grid grid-cols-1 gap-6">
            <div id="accordion-collapse" data-accordion="collapse">
                <div v-for="(faqItem, index) in faqs">
                    <h2 :id="`accordion-collapse-heading-${index}`">
                        <button
                            type="button"
                            :class="
                                index === 0
                                    ? itemClass.heading.first
                                    : index == faqs.length - 1
                                    ? itemClass.heading.last
                                    : itemClass.heading.middle
                            "
                            :data-accordion-target="`#accordion-collapse-body-${index}`"
                            :aria-expanded="index === 0 ? 'true' : 'false'"
                            :aria-controls="`accordion-collapse-body-`"
                        >
                            <span>{{ faqItem.question }}</span>
                            <svg
                                data-accordion-icon
                                class="h-3 w-3 shrink-0 rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        :id="`accordion-collapse-body-${index}`"
                        class="hidden"
                        :aria-labelledby="`accordion-collapse-heading-${index}`"
                    >
                        <div
                            :class="
                                index === 0
                                    ? itemClass.body.first
                                    : index == faqs.length - 1
                                    ? itemClass.body.last
                                    : itemClass.body.middle
                            "
                        >
                            <p class="mb-2 text-gray-500 dark:text-gray-400">
                                {{ faqItem.answer }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { initFlowbite } from 'flowbite';

export default {
    name: 'Frequenty Asked Questions',
    data() {
        return {
            faqs: [
                {
                    question: 'What is SIPS Digital Creative?',
                    answer: `SIPS Digital Creative is a specialized digital
                            marketing agency that caters to the pharmaceutical
                            and healthcare industry. We offer tailored marketing
                            solutions and services to help pharmaceutical
                            companies, clinics, and healthcare providers achieve
                            their digital marketing goals.`,
                },
                {
                    question: 'What services do you provide?',
                    answer: `We provide a range of services, including HCPs
                            (Healthcare Professionals) engagement, brand
                            awareness, market research, comprehensive digital
                            marketing support, technology enhancement, digital
                            content management, and more. Our services are
                            designed to address the unique needs of the
                            pharmaceutical and healthcare sectors.`,
                },
                {
                    question:
                        'How can SIPS Digital Creative benefit my pharmaceutical company or healthcare practice?',
                    answer: `Our services are tailored to improve your digital
                            marketing strategies, boost brand visibility, engage
                            with HCPs, and enhance your overall online presence.
                            We help you reach your target audience more
                            effectively and achieve your specific marketing
                            goals.`,
                },
                {
                    question:
                        'Do you have experience working with pharmaceutical companies and healthcare providers?',
                    answer: `Yes, we have a track record of successful
                            collaborations with pharmaceutical companies,
                            clinics, hospitals, and healthcare professionals.
                            Our experience in the industry equips us to
                            understand the unique challenges and opportunities
                            in the healthcare and pharmaceutical sectors.`,
                },
                {
                    question:
                        'How do you measure the success of your digital marketing campaigns?',
                    answer: `We employ various key performance indicators (KPIs)
                            and analytics tools to measure the success of our
                            campaigns. These metrics include website traffic,
                            engagement rates, conversion rates, lead generation,
                            and more, tailored to your specific campaign goals.`,
                },
                {
                    question:
                        'Can you create custom solutions for my unique needs?',
                    answer: `Absolutely. We believe in a personalized approach to
                            digital marketing. Our team will work closely with
                            you to understand your specific needs, challenges,
                            and goals, and then create a custom solution that
                            addresses those unique requirements.`,
                },
                {
                    question:
                        'What types of resources or insights do you offer in the "Insight" section of your platform?',
                    answer: `Our "Insight" section provides valuable resources,
                            articles, eBooks, white papers, templates, and
                            industry trends to help you stay informed and make
                            informed decisions in the pharmaceutical and
                            healthcare fields.`,
                },
                {
                    question: 'How can I get started with your services?',
                    answer: `To get started with our services, simply contact us
                            through our website or reach out to our team. We'll
                            schedule a consultation to discuss your needs and
                            tailor a strategy that aligns with your goals.`,
                },
                {
                    question:
                        'What kind of clients have you worked with in the past?',
                    answer: `We have a diverse portfolio of clients, including
                            pharmaceutical companies, clinics, healthcare
                            providers, hospitals, and more. Our experience spans
                            both established organizations and those looking to
                            make their mark in the industry.`,
                },
                {
                    question:
                        'Is there a minimum contract period for your services?',
                    answer: `We offer flexible contract options to suit your
                            needs. Whether you need a short-term campaign or a
                            long-term partnership, we can create a contract that
                            aligns with your objectives.`,
                },
            ],
            itemClass: {
                heading: {
                    first: 'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
                    middle: 'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
                    last: 'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
                },
                body: {
                    first: 'p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900',
                    middle: 'p-5 border border-b-0 border-gray-200 dark:border-gray-700',
                    last: 'p-5 border border-t-0 border-gray-200 dark:border-gray-700',
                },
            },
        };
    },
    async mounted() {
        this.setMeta();

        setTimeout(() => {
            initFlowbite();
            console.log('initFlowbite');
        }, 1500);
    },
    methods: {
        setMeta() {
            useHead({
                titleTemplate: (titleChunk) => {
                    return titleChunk
                        ? `Frequenty Asked Questions | ${titleChunk}`
                        : `Frequenty Asked Questions`;
                },
                meta: [
                    {
                        hid: 'title',
                        name: 'title',
                        content: 'Frequenty Asked Questions',
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Frequenty Asked Questions',
                    },
                ],
                link: [
                    {
                        hid: 'canonical',
                        rel: 'canonical',
                        href: 'https://digital.sipsedutech.id/faqs',
                    },
                ],
            });
        },
    },
};
</script>
