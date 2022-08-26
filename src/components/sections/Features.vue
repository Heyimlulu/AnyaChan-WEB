<template>
    <div id="Features" class="bg-secondary py-24 relative">
        <div class="absolute top-0 w-full" style="overflow: hidden;">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style="fill: #1d1d1e; width: 100%; height: 150px;"
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>

        <h2 class="text-center text-3xl tracking-tight font-bold text-white sm:text-4xl">Bot Features</h2>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none mx-72">
          <div class="transition-all duration-200 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-md overflow-hidden bg-primary">
            <div class="flex-shrink-0 p-6">
              <LightningBoltIcon class="h-24 w-full fill-accent" />
            </div>
            <div class="flex-1 p-6 flex flex-col justify-between text-center">
              <div class="flex-1">
                <div class="block mt-2">
                  <p class="text-xl font-semibold text-white">
                    Slash Commands
                  </p>
                  <p class="mt-3 text-base text-gray-300">
                    Anya-Chan support the new Slash Commands system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="transition-all duration-200 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-md overflow-hidden bg-primary">
            <div class="flex-shrink-0 p-6">
              <ClockIcon class="h-24 w-full fill-accent" />
            </div>
            <div class="flex-1 p-6 flex flex-col justify-between text-center">
              <div class="flex-1">
                <div class="block mt-2">
                  <p class="text-xl font-semibold text-white">
                    High Availability - 24/7
                  </p>
                  <p class="mt-3 text-base text-gray-300">
                    Anya-Chan is available 24/7 and will always be there for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="transition-all duration-200 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-md overflow-hidden bg-primary">
            <div class="flex-shrink-0 p-6">
              <ShieldCheckIcon class="h-24 w-full fill-accent" />
            </div>
            <div class="flex-1 p-6 flex flex-col justify-between text-center">
              <div class="flex-1">
                <div class="block mt-2">
                  <p class="text-xl font-semibold text-white">
                    Frequent Updates
                  </p>
                  <p class="mt-3 text-base text-gray-300">
                    Anya-Chan will always be updated with the latest features and commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 w-full" style="overflow: hidden;">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style="fill: #1d1d1e; width: 100%; height: 50px; transform: rotate(180deg);"
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
    </div>
</template>

<script setup>
import { LightningBoltIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/vue/solid'
</script>