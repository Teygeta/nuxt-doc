<template>
  <div class="border-l-4 opacity-60 pl-2">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
