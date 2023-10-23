import { Title } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "nuxt-gtag",
    '@nuxtjs/tailwindcss'
  ],
  site: {
    url: 'https:/digital.sipsedutech.id',
  },
  gtag: {
    id: 'G-0PQMW7HK6J',
    config: {
      page_title: "SIPS Digital Creative"
    }

  },
  image: {
    dir: "assets/images",
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "SIPS Digital Creative",
      meta: [
        { name: "description", content: "Digital Marketing for healthcare" },
      ],
      link: [
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        // },
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css?family=Poppins",
        // },
        {
          rel: "icon",
          href: "/sips-ico.png",
        },
      ],
    },
  },
});
