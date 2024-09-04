<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    class="border-b !text-[#5EA2F4] border-neutral-300 dark:border-neutral-700 hover:opacity-80 transition-opacity"
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
