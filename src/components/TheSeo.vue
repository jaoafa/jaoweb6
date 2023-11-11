<script lang="ts" setup>
type TheSeoSlots = {
  default?: (props: object) => unknown
}

const config = useRuntimeConfig()
const site = useSiteConfig()

defineSlots<TheSeoSlots>()
defineOgImage({
  component: 'DefaultTemplate',
})

useHead({
  htmlAttrs: {
    prefix: 'og: https://ogp.me/ns#',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#a83d3d',
    },
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  meta: [
    { name: 'apple-mobile-web-app-title', content: site.name },
    { name: 'application-name', content: site.name },
    { name: 'msapplication-Config', content: '/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#ffb41d' },
    { name: 'theme-color', content: '#ffb41d' },
  ],
  noscript: [
    {
      key: 'gtm',
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.public.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    },
  ],
  script: [
    {
      key: 'gtm',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${config.public.gtmId}');`,
    },
  ],
  title: site.name,
})
useServerSeoMeta({
  ogType: 'website',
  twitterCard: 'summary',
})
useSchemaOrg([
  defineOrganization({
    logo: '/logo.png',
  }),
])
</script>

<template>
  <slot />
</template>
