// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
  ],

  headlessui: {
    prefix: 'Headless',
  },

  app: {
    rootId: 'app',
    head: {
      title: 'The Easiest Documentation Template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'This template is designed to help you create the most effective documentation for your projects' },
        { name: 'format-detection', content: 'telephone=no' },
        { key: 'og:image', property: 'og:image', content: '/og-image.webp' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
  },

  compatibilityDate: '2024-09-04',

  devtools: { enabled: true },
})
