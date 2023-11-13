<template>
    <div id="h-50" class="flex items-center">
        <div class="mx-auto w-2/4 justify-center text-center">
            <img src="~/assets/tick.svg" class="mx-auto mb-12" />
            <div class="mb-10 text-6xl font-bold">
                <span
                    class="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"
                >
                    Terima Kasih!
                </span>
            </div>
            <div class="mb-10">
                <p class="text-3xl leading-relaxed">
                    File Anda telah terkirim ke [nama email], cek inbox dan
                    selamat menambah insight digital marketing Anda.
                </p>
            </div>
            <!-- <div class="mb-10">
                <p class="text-3xl leading-relaxed">Bagikan ke teman Anda.</p>
            </div>
            <div class="mx-auto mb-10">
                X X X
                <SharedSocialShareButton class="mt-4 md:mt-5 lg:mt-7" :url="currentURL" :text="`Baca artikel`" />
            </div> -->
            <h3
                class="mb-8 mt-5 animate-pulse pt-5 text-xl font-bold text-sips-green hover:underline xl:text-3xl"
            >
                <NuxtLink to="/works" aria-label="To Works page">
                    Kembali ke Insight >>
                </NuxtLink>
            </h3>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Thank you for downloading the e-book, see you!',
    ogTitle: 'Thank you for downloading the e-book, see you!',
    description:
        'SIPS Digital Creative: Precision Digital Marketing Solutions for the Pharmaceutical Industry',
    ogDescription:
        'SIPS Digital Creative: Precision Digital Marketing Solutions for the Pharmaceutical Industry',
    canonical: 'https://digital.sipsedutech.id/services',
    robots: 'noindex',
});
</script>

<style scoped>
#h-50 {
    min-height: 80vh;
}
/* #h-25 {
    min-height: 30vh;
} */
</style>
