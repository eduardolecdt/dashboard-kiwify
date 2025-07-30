export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  components: true,
  css: ['~/assets/css/index.css'],
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-29'
})