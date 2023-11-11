<script lang="ts" setup>
// Fonts
import '@fontsource/zen-kaku-gothic-new/400.css'
import '@fontsource/zen-kaku-gothic-new/700.css'
import '@fontsource/zen-old-mincho/400.css'
import '@fontsource/zen-old-mincho/700.css'
</script>

<template>
  <TheSeo />
  <Body class="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
    <NuxtLoadingIndicator :height="2" color="#ffb41d" />
    <TheHeader />
    <TheFooter />
  </Body>
</template>
