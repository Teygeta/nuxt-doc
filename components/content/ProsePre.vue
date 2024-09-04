<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

defineProps({
  code: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: null,
  },
})

const { copy, copied } = useClipboard()
</script>

<template>
  <div class="relative">
    <div class="absolute text-xs right-2 top-1">
      <div v-if="!copied" class="cursor-pointer opacity-50" :size="16" @click="copy(code)">
        Copy
      </div>
      <div v-else class="opacity-50">
        Copied!
      </div>
    </div>
    <pre class="border border-neutral-800 bg-neutral-900 font-[500] leading-normal font-mono" :class="$props.class"><slot /></pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
