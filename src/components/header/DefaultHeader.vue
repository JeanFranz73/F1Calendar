<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

import { MoonIcon, SunIcon, Bars3Icon } from '@heroicons/vue/20/solid'
import { useConfigStore } from '@/stores/config.store'

const navigation = [
  { name: 'Dash', href: '/' },
  { name: 'Teams', href: '4386753' },
  { name: 'Drivers', href: '4386753' },
  { name: 'Calendar', href: '4386753' },
]
</script>

<template>
  <Disclosure as="nav" v-slot="{ open }"
              class="bg-white dark:bg-gray-800 shadow-sm dark:shadow-none dark:border-b border-gray-500 mb-5">
    <div class="mx-auto max-w-7xl px-2">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-stretch justify-start">
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 dark:hover:text-white dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                active-class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <div title="Change theme">
          <moon-icon
            v-if="useConfigStore().isDarkTheme"
            @click="useConfigStore().toggleTheme()"
            class="h-5 w-5 fill-slate-400"/>
          <sun-icon
            v-else
            @click="useConfigStore().toggleTheme()"
            class="h-5 w-5 fill-slate-400"/>
        </div>
      </div>
    </div>
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                          :class="[item.current ? 'bg-gray-900 text-white'
                                     : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                   'block rounded-md px-3 py-2 text-base font-medium']"
                          :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
