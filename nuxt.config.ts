import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  },
  ssr: false,
  typescript: {
    shim: false
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  hooks: {
  },

})


