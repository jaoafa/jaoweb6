<script lang="ts" setup>
/** 現在の西暦 */
const year = useDateFormat(new Date(), 'YYYY')
</script>

<template>
  <footer class="mx-auto box-content max-w-3xl px-6 py-24 text-center text-xs">
    <p class="tracking-wider">&copy; 2016-{{ year }} jao Community</p>
  </footer>
</template>
