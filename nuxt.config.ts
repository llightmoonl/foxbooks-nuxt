export default defineNuxtConfig({
  devtools: {enabled: true},

  modules: [
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],

  fonts: {
    families: [
      {name: 'Inter', provider: 'google'},
      {name: 'Abril Fatface', provider: 'google'},
    ]
  },

  css: [
    '~/assets/styles/globals.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/_vars.scss" as *;`
        }
      }
    }
  },

  compatibilityDate: '2025-02-11'
})