import { Title } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],

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
      title: "SIPS Digital Creative",
      meta: [
        { name: "description", content: "Digital Marketing for healthcare" },
      ],
      link: [
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        // },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins",
        },
        {
          rel: "icon",
          href: "/sips-ico.png",
        },
      ],
    },
  },
});
