<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

// const navigation = [
//   { name: 'Features', href: '#features' },
//   { name: 'Commands', href: '#commands'}
// ]
</script>

<template>
  <header class="fixed w-full z-10 border-b-4 border-accent">
    <Disclosure as="nav" class="bg-primary shadow-sm" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="flex-shrink-0">
                <h1 class="sr-only">Anya-Chan</h1>
                <h1 class="text-2xl font-bold leading-tight text-accent">
                  Anya-Chan
                </h1>
              </router-link>
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'text-white border-b-2' : 'duration-200 text-white hover:text-white hover:opacity-80', 'inline-flex items-center px-1 pt-1 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
              <router-link v-for="item in navigation" :key="item.name" :to="{path: '/', hash: item.href}" class="inline-flex items-center px-1 pt-1 text-sm font-medium duration-200 text-white hover:text-white hover:opacity-80">{{ item.name }}</router-link>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <!-- <DisclosureButton class="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton> -->
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-white text-indigo-700 m-2 rounded-md' : 'duration-200 text-white hover:bg-white hover:bg-opacity-10 m-2 rounded-md', 'block pl-3 pr-4 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>