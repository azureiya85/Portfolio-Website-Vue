// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
   fonts: {
    families: [
      { name: 'Host Grotesk', provider: 'google' },
      { name: 'Satoshi', provider: 'fontshare' } 
    ]
  },

  css: ['~/assets/css/main.css'],

  // Define app-wide head metadata 
  app: {
    head: {
      title: 'ryhze - Web Developer & Graphic Designer',
      meta: [
        { name: 'description', content: 'Portfolio of ryhze, a full-stack web developer and graphic designer.' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
