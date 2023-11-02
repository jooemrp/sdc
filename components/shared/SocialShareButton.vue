<template>
    <div class="sharing-buttons flex flex-wrap">
        <a
            class="ease mb-1 mr-2 inline-flex items-center rounded-full border-2 border-blue-600 bg-blue-600 p-2 text-white transition duration-200 hover:border-blue-700 hover:bg-blue-700 md:p-3"
            target="_blank"
            rel="noopener"
            :href="links.facebook"
            aria-label="Share on Facebook"
        >
            <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-3 w-3 md:h-4 md:w-4"
            >
                <title>Facebook</title>
                <path
                    d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z"
                ></path>
            </svg>
        </a>
        <a
            class="ease mb-1 mr-2 inline-flex items-center rounded-full border-2 border-sky-400 bg-sky-400 p-2 text-white transition duration-200 hover:border-sky-500 hover:bg-sky-500 md:p-3"
            target="_blank"
            rel="noopener"
            :href="links.twitter"
            aria-label="Share on Twitter"
        >
            <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-3 w-3 md:h-4 md:w-4"
            >
                <title>Twitter</title>
                <path
                    d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z"
                ></path>
            </svg>
        </a>
        <a
            class="ease mb-1 mr-2 inline-flex items-center rounded-full border-2 border-blue-800 bg-blue-800 p-2 text-white transition duration-200 hover:border-blue-900 hover:bg-blue-900 md:p-3"
            target="_blank"
            rel="noopener"
            :href="links.linkedin"
            aria-label="Share on Linkedin"
        >
            <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-3 w-3 md:h-4 md:w-4"
            >
                <title>Linkedin</title>
                <path
                    d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z"
                ></path>
            </svg>
        </a>
        <a
            class="ease mb-1 mr-2 inline-flex items-center rounded-full border-2 border-green-400 bg-green-400 p-2 text-white transition duration-200 hover:border-green-500 hover:bg-green-500 md:p-3"
            target="_blank"
            rel="noopener"
            :href="links.whatsapp"
            aria-label="Share on Whatsapp"
            draggable="false"
        >
            <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-3 w-3 md:h-4 md:w-4"
            >
                <title>Whatsapp</title>
                <path
                    d="M413 97A222 222 0 0 0 64 365L31 480l118-31a224 224 0 0 0 330-195c0-59-25-115-67-157zM256 439c-33 0-66-9-94-26l-7-4-70 18 19-68-4-7a185 185 0 0 1 287-229c34 36 56 82 55 131 1 102-84 185-186 185zm101-138c-5-3-33-17-38-18-5-2-9-3-12 2l-18 22c-3 4-6 4-12 2-32-17-54-30-75-66-6-10 5-10 16-31 2-4 1-7-1-10l-17-41c-4-10-9-9-12-9h-11c-4 0-9 1-15 7-5 5-19 19-19 46s20 54 23 57c2 4 39 60 94 84 36 15 49 17 67 14 11-2 33-14 37-27s5-24 4-26c-2-2-5-4-11-6z"
                ></path>
            </svg>
        </a>
        <a
            class="ease mb-1 mr-2 inline-flex items-center rounded-full border-2 border-sky-500 bg-sky-500 p-2 text-white transition duration-200 hover:border-sky-600 hover:bg-sky-600 md:p-3"
            target="_blank"
            rel="noopener"
            :href="links.telegram"
            aria-label="Share on Telegram"
            draggable="false"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                class="h-3 w-3 md:h-4 md:w-4"
                viewBox="0,0,256,256"
            >
                <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                >
                    <g transform="scale(5.12,5.12)">
                        <path
                            d="M44.37695,5.98633c-0.48705,0.02137 -0.96114,0.15692 -1.38867,0.32813c-0.42317,0.17006 -2.8594,1.20989 -6.45703,2.74805c-3.59763,1.53816 -8.27429,3.54117 -12.91016,5.52734c-9.27174,3.97235 -18.38281,7.88086 -18.38281,7.88086l0.06641,-0.02539c0,0 -0.5499,0.18381 -1.10742,0.57227c-0.27876,0.19423 -0.57866,0.44498 -0.82422,0.81055c-0.24556,0.36557 -0.42507,0.88366 -0.35742,1.43164c0.23762,1.92475 2.23242,2.4707 2.23242,2.4707l0.00781,0.00391l8.90234,3.04688c0.22697,0.75718 2.70012,9.01167 3.24414,10.75977c0.30045,0.96647 0.58167,1.52398 0.875,1.9043c0.14679,0.19032 0.30062,0.3376 0.4707,0.44531c0.06758,0.04279 0.13865,0.0749 0.20898,0.10352c0.0015,0.00066 0.00241,-0.00066 0.00391,0c0.00864,0.00381 0.01677,0.00415 0.02539,0.00781l-0.02344,-0.00586c0.01634,0.0066 0.03247,0.01771 0.04883,0.02344c0.03174,0.01112 0.05119,0.01074 0.0918,0.01953c1.01954,0.35598 1.86328,-0.30469 1.86328,-0.30469l0.03516,-0.02734l5.46875,-5.07227l8.875,6.91992l0.11133,0.05078c1.55345,0.68975 2.95832,0.30493 3.73633,-0.32812c0.77801,-0.63306 1.08398,-1.44922 1.08398,-1.44922l0.0332,-0.08594l6.52148,-33.99023c0.16687,-0.76044 0.19058,-1.41775 0.0332,-2.01172c-0.15738,-0.59397 -0.53974,-1.1103 -1.01953,-1.39648c-0.47979,-0.28619 -0.9817,-0.37879 -1.46875,-0.35742zM44.42969,8.01953c0.1978,-0.00916 0.34441,0.01345 0.39062,0.04102c0.04621,0.02756 0.06696,0.02394 0.11133,0.19141c0.04437,0.16747 0.0684,0.52021 -0.05273,1.07227l-0.00391,0.01172l-6.48437,33.79297c-0.01535,0.03402 -0.15047,0.34662 -0.45898,0.59766c-0.31473,0.25609 -0.66477,0.45599 -1.59375,0.06641l-9.70508,-7.56836l-0.27344,-0.21484l-0.00586,0.00586l-2.90234,-2.17773l16.31055,-19.18945c0.25603,-0.30045 0.31139,-0.72339 0.1413,-1.0796c-0.17009,-0.35622 -0.5338,-0.57906 -0.92841,-0.56883c-0.18875,0.0049 -0.37226,0.06314 -0.5293,0.16797l-23.60156,15.73438l-8.91602,-3.05273c0,0 -0.88536,-0.49268 -0.92773,-0.83594c-0.00235,-0.01902 -0.0128,-0.0018 0.0332,-0.07031c0.04601,-0.06849 0.16165,-0.18413 0.30664,-0.28516c0.28998,-0.20204 0.62109,-0.32422 0.62109,-0.32422l0.0332,-0.01172l0.0332,-0.01367c0,0 9.11155,-3.90871 18.38281,-7.88086c4.63563,-1.98607 9.31146,-3.98761 12.9082,-5.52539c3.59582,-1.53738 6.19406,-2.64398 6.41406,-2.73242c0.25046,-0.1003 0.49946,-0.14123 0.69727,-0.15039zM33.61328,18.79297l-12.36914,14.55273l-0.00586,0.00586c-0.01931,0.02325 -0.03756,0.04736 -0.05469,0.07227c-0.01962,0.02706 -0.03787,0.05509 -0.05469,0.08398c-0.06949,0.11795 -0.11403,0.24891 -0.13086,0.38477c-0.00001,0.0026 -0.00001,0.00521 0,0.00781l-1.61133,7.24609c-0.02679,-0.07829 -0.04555,-0.10693 -0.07422,-0.19922v-0.00195c-0.51179,-1.64446 -2.84514,-9.42921 -3.16797,-10.50586zM22.64063,35.73047l2.22266,1.66797l-3.26562,3.02734z"
                        ></path>
                    </g>
                </g>
            </svg>
        </a>
        <a
            class="ease mb-1 mr-2 inline-flex items-center rounded-full border-2 border-amber-500 bg-amber-500 p-2 text-white transition duration-200 hover:border-amber-600 hover:bg-amber-600 md:p-3"
            target="_blank"
            rel="noopener"
            :href="links.mail"
            aria-label="Share by Email"
            draggable="false"
        >
            <svg
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-3 w-3 md:h-4 md:w-4"
            >
                <title>Email</title>
                <path
                    d="M464 64a48 48 0 0 1 29 86L275 314c-11 8-27 8-38 0L19 150a48 48 0 0 1 29-86h416zM218 339c22 17 54 17 76 0l218-163v208c0 35-29 64-64 64H64c-35 0-64-29-64-64V176l218 163z"
                ></path>
            </svg>
        </a>

        <button
            @click="copyLinkToClipboard"
            class="ease mb-1 mr-1 inline-flex items-center rounded-full border-2 border-gray-500 bg-gray-500 p-2 text-white transition duration-200 hover:border-gray-600 hover:bg-gray-600 md:p-3"
            aria-label="Copy Link to Clipboard"
        >
            <svg
                style="color: white"
                class="h-3 w-3 md:h-4 md:w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4H10C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2H8Z"
                    fill="white"
                ></path>
                <path
                    d="M3 5C3 3.89543 3.89543 3 5 3C5 4.65685 6.34315 6 8 6H10C11.6569 6 13 4.65685 13 3C14.1046 3 15 3.89543 15 5V11H10.4142L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13H15V16C15 17.1046 14.1046 18 13 18H5C3.89543 18 3 17.1046 3 16V5Z"
                    fill="white"
                ></path>
                <path
                    d="M15 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H15V11Z"
                    fill="white"
                ></path>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

const route = useRoute();
let { url, text } = defineProps(['url', 'text']);
const Toast = useToast();

if (!url) {
    const currentURL = route.fullPath;
    url = `${window.location.origin}${currentURL}`;
}

let links = {
    whatsapp: `whatsapp://send?text=${text} ${url}`,
    telegram: `https://telegram.me/share/url?url=${url}&text=${text}`,
    linkedin: `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
    facebook: `http://www.facebook.com/sharer.php?u=${url}&quote=${text}`,
    twitter: `http://twitter.com/share?url=${text} ${url}`,
    mail: `mailto:?subject=${text}&body=${text} ${url}`,
};

function copyLinkToClipboard() {
    // Create a hidden input element to copy the link to the clipboard
    const input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    Toast.success('Link copied to clipboard');
}
</script>
