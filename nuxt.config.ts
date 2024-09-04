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
