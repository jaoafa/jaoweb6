<script lang="ts" setup>
// Icons
import { siDiscord } from 'simple-icons'
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
    <main class="mx-auto box-content max-w-3xl px-6">
      <div class="flex flex-col items-center gap-16">
        <div
          class="flex w-full flex-col items-center gap-5 rounded-lg bg-primary px-8 py-12 shadow-2xl md:py-16"
        >
          <div class="flex w-full max-w-md items-center justify-center">
            <img
              src="/logo-light.svg"
              alt=""
              width="120"
              height="25"
              class="block w-full"
            />
          </div>
          <p
            class="text-center text-sm font-bold dark:text-gray-800 sm:text-base md:text-xl"
          >
            ここで爆発します、あなたの可能性が。
          </p>
        </div>

        <div class="flex flex-col items-center gap-6 text-center text-sm">
          <p>
            jao Community Server
            は、やべーやつらが生息し独特で最高にイカしたコミュニティです。
          </p>
          <p>
            主に Discord
            サーバで活動を行なっています。通話をしながらゲームをしたり、様々な話題についてチャットをしたり、時には実際に会って街を歩いたりと、コミュニティ参加者同士の交流が盛んに行われています。
          </p>
        </div>

        <div class="flex items-center">
          <NuxtLink
            to="https://discord.gg/jaoafa"
            class="flex items-center gap-3 rounded-lg bg-[#5865F2] px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-[#5865F2]/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current"
            >
              <path :d="siDiscord.path" />
            </svg>
            <span>Discord サーバに参加する</span>
          </NuxtLink>
        </div>
      </div>
    </main>
    <TheFooter />
  </Body>
</template>
