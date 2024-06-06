// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true , 
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "FT Yoga",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.ico" }]
    },
    
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "@nuxt/image", 'nuxt-swiper', '@morev/vue-transitions/nuxt'],
  css: [
    '~/assets/scss/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variebles.scss";
            @import "@/assets/scss/animation.scss";
          `
        }
      }
    }
  }
})