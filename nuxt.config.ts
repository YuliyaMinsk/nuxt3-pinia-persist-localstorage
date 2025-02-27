// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  pages: true,
  components: true,
  devtools: { enabled: true },

  
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  
  pinia: {
    storesDirs: ['./stores/**'],
  },
  
  piniaPluginPersistedstate: {
    storage: 'localStorage',
    debug: true,
  },

  compatibilityDate: '2024-11-01',
})
