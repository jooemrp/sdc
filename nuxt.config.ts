import { Title } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-simple-sitemap",
    "nuxt-gtag",
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots'
  ],
  site: {
    url: 'https://digital.sipsedutech.id',
  },
  robot: {
    UserAgent: '*',
    Disallow: ''
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
        { name: "google-site-verification", content: "exnpYh7ierXa8KgWCehxk2fqgOjGsepiWrPZ5JCw24c" },
      ],
      link: [
        {
          rel: "icon",
          href: "/sips-ico.ico",
        },
      ],
    },
  },
  plugins: [
    { src: "~/plugins/vue-toastificaton.js", mode: "client" },
  ],
});
