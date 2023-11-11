// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  srcDir: 'src/',
  stylelint: {
    lintOnStart: false,
  },
  typescript: {
    shim: false,
    strict: true,
  },
})
