import { Title } from "./.nuxt/components.d";
import tailwindTypography from '@tailwindcss/typography';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-simple-sitemap",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "@nuxtseo/module",
    "@nuxt/image",
    "@zadigetvoltaire/nuxt-gtm"
  ],
  gtm: {
    id: 'GTM-5MLCR7TM',
    enabled: true,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    devtools: true,
  },
  site: {
    url: 'https://digital.sipsedutech.id',
  },
  sitemap: {
    include: ['/', '/services', '/works/**', '/insights/**', '/faqs'],
    exclude: ['/thankyou']
  },
  gtag: {
    id: 'G-0PQMW7HK6J',
    config: {
      page_title: "SIPS Digital Creative"
    }
  },
  routeRules: {
    '/works/**': { prerender: true},
    '/insights/**': { prerender: true },
    '/thankyou' : {prerender: false}
  },
  robots: {
  //  UserAgent: '*',
   Disallow: '/thankyou',
  //  Allow: ''
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/works/*',
        '/insights/*',
        '/sitemap.xml'
      ]
    }
  },
  image: {
    // dir: "assets/images",
    inject: true,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  css: [
    '@/assets/css/tailwind.css',
  ],
  app: {
    head: {
      title: "Digital Marketing for Pharmaceutical",
      ogSiteName: 'SIPS Digital Creative',
      titleTemplate: "%s",
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // meta: [
      //   { name: "google-site-verification", content: "exnpYh7ierXa8KgWCehxk2fqgOjGsepiWrPZ5JCw24c" },
      // ],
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
    { src: "~/plugins/aos", ssr: false, mode: "client" },
    { src: "~/plugins/vue-gtm.clients.ts", ssr: false, mode: "client" }
  ],
  build: {
    transpile: ['vue-toastification']
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    }
  },
});
