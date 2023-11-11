<script lang="ts" setup>
// Icons
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const site = useSiteConfig()

/** 現在のカラーモード */
const mode = useColorMode()
/** カラーモードを変更する */
const toggleMode = (): void => {
  if (mode.value === 'dark') {
    mode.value = 'light'
  } else {
    mode.value = 'dark'
  }
}
</script>

<template>
  <header
    :class="[
      'mx-auto box-content flex max-w-3xl items-center justify-between',
      'px-6 pb-16 pt-10 sm:pt-16',
    ]"
  >
    <SiteLink
      :title="site.name"
      to="/"
      class="w-48"
      aria-label="トップページへ移動する"
    >
      <img
        src="/logo-light.svg"
        alt=""
        width="120"
        height="25"
        class="block w-full dark:hidden"
      />
      <img
        src="/logo-dark.svg"
        alt=""
        width="120"
        height="25"
        class="hidden w-full dark:block"
      />
    </SiteLink>

    <button
      class="rounded-lg p-2 transition-colors hover:bg-gray-200 hover:dark:bg-gray-900"
      @click="() => toggleMode()"
    >
      <span class="sr-only">カラーモードを切り替える</span>
      <SunIcon
        :class="[mode === 'dark' ? 'hidden' : 'block']"
        class="h-5 w-5"
        aria-hidden="true"
      />
      <MoonIcon
        :class="[mode === 'dark' ? 'block' : 'hidden']"
        class="h-5 w-5"
        aria-hidden="true"
      />
    </button>
  </header>
</template>
