<script setup lang="ts">
import { ref } from 'vue'
import {
  Bars2Icon,
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const sidebarOpen = ref(false)

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const router = useRouter()
</script>

<template>
  <div>
    <HeadlessTransitionRoot as="template" :show="sidebarOpen">
      <HeadlessDialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <HeadlessTransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 flex">
          <HeadlessTransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <HeadlessDialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <HeadlessTransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </HeadlessTransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              ok
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>

    <header class="md:hidden bg-transparent flex justify-between items-center p-2">
      <div>
        <NuxtLink to="/" class="font-semibold text-2xl">
          Documentation
        </NuxtLink>
      </div>
      <button
        type="button"
        @click="() => sidebarOpen = !sidebarOpen"
      >
        <span class="sr-only">Open sidebar</span>
        <XMarkIcon v-if="sidebarOpen" class="size-6 text-white" aria-hidden="true" />
        <Bars2Icon v-else class="size-6 text-white" aria-hidden="true" />
      </button>
    </header>

    <div class="max-w-5xl mt-20 mx-auto">
      <!-- Static sidebar for desktop -->
      <aside class="hidden md:fixed md:flex flex-col ml-4">
        <NuxtLink to="/" class="font-semibold text-2xl mb-5">
          Documentation
        </NuxtLink>

        <nav class="text-sm space-y-4">
          <section v-for="(item, index) in navigation" :key="index">
            <h2 v-if="item._path !== '/'" class="mb-2">
              {{ item.title }}
            </h2>
            <ul class="space-y-1">
              <li
                v-for="(c, _index) in item.children"
                :key="_index"
              >
                <NuxtLink
                  :to="c._path"
                  :class="{
                    'text-blue-400': c._path === router.currentRoute.value.path,
                  }"
                >
                  {{ c.title }}
                </NuxtLink>
              </li>
            </ul>
          </section>
        </nav>
      </aside>

      <main class="md:ml-52 px-4 z-10">
        <ContentDoc class="prose-edit" />
      </main>
    </div>
  </div>
</template>
