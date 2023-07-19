<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, BadgeCheckIcon } from "@heroicons/vue/solid";
</script>

<script>
import { ref } from "vue";
import { commandsList } from "../../models/commandsList";
import axios from "axios";

export default {
  name: "Commands",
  data() {
    return {
      commands: [],
      botstats: null,
    };
  },
  mounted() {
    this.commands = ref(commandsList);
    this.botstats = [
      {
        name: "Total Servers",
        value: "^400",
      },
      {
        name: "Total Users",
        value: "^1000",
      },
      {
        name: "Total Commands",
        value: "54",
      },
      {
        name: "Verified",
        icon: BadgeCheckIcon,
      },
    ];
  },
};
</script>

<template>
  <section id="commands" class="bg-primary py-24">
    <div class="px-12 xl:px-[400px] text-center">
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <div
          v-for="s in botstats"
          :key="s.name"
          class="px-4 py-5 rounded-lg overflow-hidden sm:p-6"
        >
          <dt class="text-xl font-medium text-gray-300 truncate">
            {{ s.name }}
          </dt>
          <dd class="mt-1 text-5xl tracking-tight font-semibold text-accent">
            <component v-if="s.icon" :is="s.icon" class="h-16 w-16 mx-auto" />
            <span v-else>{{ s.value }}</span>
          </dd>
        </div>
      </dl>
    </div>

    <div class="w-full px-4 pt-16">
      <h2 class="text-4xl text-center font-semibold text-white mb-8">
        All Command
      </h2>
      <div class="mx-auto w-full max-w-xl rounded-2xl bg-secondary p-8">
        <Disclosure
          v-for="category of commands"
          :key="category.name"
          as="div"
          class="first-of-type:mt-0 mt-2"
          v-slot="{ open }"
        >
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-accent p-4 text-left text-sm font-medium text-black hover:bg-accent/60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span>{{ category.title }}</span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-black"
            />
          </DisclosureButton>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="transition duration-200 ease-out"
            leave-from-class="transform opacity-100"
            leave-to-class="transform opacity-0"
          >
            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-300">
              <div
                v-for="command of category.commands"
                :key="command.name"
                class="my-2"
              >
                <div class="text-sm text-gray-300 my-0.5">
                  <span class="text-white font-semibold"
                    >/{{ command.name }}</span
                  >
                  <span class="mx-2"> - </span>
                  <span>{{ command.description }}</span>
                </div>
                <div class="flex items-center">
                  <span class="text-sm text-gray-300 mr-2">Usage:</span>
                  <span class="text-analoggreen font-semibold"
                    >/{{ command.name }}</span
                  >
                  <span
                    class="text-sm text-gray-300 mx-2"
                    v-for="opt of command.options"
                    :key="opt.name"
                  >
                    <span
                      :class="
                        opt.required
                          ? 'text-accent font-semibold'
                          : 'text-white'
                      "
                    >
                      <span class="text-analogteal">[</span>
                      {{ opt.name }}
                      <span class="text-analogteal">]</span>
                    </span>
                  </span>
                </div>
              </div>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </section>
</template>
