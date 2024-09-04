<script setup lang="ts">
// Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId())
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
