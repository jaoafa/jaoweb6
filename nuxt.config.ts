// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s',
    },
  },
  css: ['@/assets/css/tailwind.css'],
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtseo/module',
    '@vueuse/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      gtmId: 'GTM-58VVRGD',
    },
  },
  site: {
    defaultLocale: 'ja',
    description:
      'ここで爆発します、あなたの可能性が。jao Community Server は、やべーやつらが生息し独特で最高にイカしたコミュニティです。',
    identity: {
      type: 'Organization',
    },
    name: 'jao Community Server',
    trailingSlash: true,
    twitter: '@jaoafa',
    url: 'https://jaoafa.com',
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
