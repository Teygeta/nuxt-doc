<script setup lang="ts">
import { ref } from 'vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const sidebarOpen = ref(false)

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const router = useRouter()
</script>

<template>
  <div>
    <div
      class="fixed h-[350px] -z-10 inset-0 w-full [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    />

    <HeadlessTransitionRoot as="template" :show="sidebarOpen">
      <HeadlessDialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <HeadlessTransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 backdrop-blur-sm" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 flex">
          <HeadlessTransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <HeadlessDialogPanel class="relative flex flex-1 w-full max-w-xs mr-16 bg-black">
              <HeadlessTransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 flex justify-center w-16 pt-5 left-full ">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </HeadlessTransitionChild>
              <nav class="m-5 space-y-6 text-sm">
                <NuxtLink to="/" class="mb-5 text-2xl font-semibold">
                  Documentation
                </NuxtLink>
                <section v-for="(item, index) in navigation" :key="index">
                  <NuxtLink
                    v-if="!item.children && item._path !== '/'"
                    :to="item._path"
                    class="hover:underline"
                    :class="item._path === router.currentRoute.value.path ? 'text-blue-400' : 'text-neutral-500'"
                  >
                    {{ item.title }}
                  </NuxtLink>
                  <h2 v-else-if="item._path !== '/'" class="mb-4">
                    {{ item.title }}
                  </h2>
                  <ul class="space-y-3">
                    <li
                      v-for="(c, _index) in item.children"
                      :key="_index"
                    >
                      <NuxtLink
                        :to="c._path"
                        class="hover:underline"
                        :class="c._path === router.currentRoute.value.path ? 'text-blue-400' : 'text-neutral-500'"
                      >
                        {{ c.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </section>
                <section>
                  <h2 class="my-4">
                    Links
                  </h2>
                  <ul class="space-y-3">
                    <li>
                      <a target="_blank" to="https://github.com/Teygeta/nuxt-doc" class="hover:underline text-neutral-500">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a target="_blank" to="https://x.com/vitto_gi_" class="hover:underline text-neutral-500">
                        X
                      </a>
                    </li>
                  </ul>
                </section>
              </nav>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>

    <header class="flex items-center justify-between p-2 bg-transparent md:hidden">
      <NuxtLink to="/" class="text-2xl font-semibold">
        Documentation
      </NuxtLink>
      <button
        type="button"
        @click="() => sidebarOpen = !sidebarOpen"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="text-white size-6" aria-hidden="true" />
      </button>
    </header>

    <div class="max-w-5xl mx-auto mt-20">
      <!-- Static sidebar for desktop -->
      <aside class="flex-col hidden ml-4 md:fixed md:flex">
        <NuxtLink to="/" class="mb-5 text-2xl font-semibold">
          Documentation
        </NuxtLink>

        <nav class="space-y-4 text-sm">
          <section v-for="(item, index) in navigation" :key="index">
            <NuxtLink
              v-if="!item.children && item._path !== '/'"
              :to="item._path"
              class="hover:underline"
              :class="{
                'text-blue-400': item._path === router.currentRoute.value.path,
              }"
            />
            <h2 v-else-if="item._path !== '/'" class="mb-2">
              {{ item.title }}
            </h2>
            <ul class="space-y-1">
              <li
                v-for="(c, _index) in item.children"
                :key="_index"
              >
                <NuxtLink
                  :to="c._path"
                  class="hover:underline"
                  :class="c._path === router.currentRoute.value.path ? 'text-blue-400' : 'text-neutral-500'"
                >
                  {{ c.title }}
                </NuxtLink>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="mt-4 mb-2">
              Links
            </h2>
            <ul class="space-y-1">
              <li>
                <a target="_blank" to="https://github.com/Teygeta/nuxt-doc" class="hover:underline text-neutral-500">
                  GitHub
                </a>
              </li>
              <li>
                <a target="_blank" to="https://x.com/vitto_gi_" class="hover:underline text-neutral-500">
                  X
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </aside>

      <main class="px-4 md:ml-52">
        <ContentDoc class="prose-edit" />
      </main>
    </div>
  </div>
</template>
