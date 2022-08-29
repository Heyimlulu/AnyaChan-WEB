<script setup>
useHead({
  title: 'Anya-Chan | Page not found',
  meta: [
    {
      name: 'description',
      content: '404'
    }
  ]
})
</script>

<script>
  export default {
    data() {
      return {
        number: 0
      }
    },
    mounted() {
      this.number = Math.floor(Math.random() * 6) + 1
    }
  }
</script>

<style>
  html, body {
    height: 100%;
  }
</style>

<template>
  <div class="h-screen py-16 sm:py-24 flex flex-col bg-primary">
    <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 flex justify-center">
          <span class="sr-only">Anya Forger</span>
          <img class="h-48 w-auto" :src="`/assets/404/${number}.png`" alt="Anya Forger" />
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-base font-semibold text-accent">404</p>
          <h1 class="mt-2 text-4xl font-bold text-white tracking-tight sm:text-5xl sm:tracking-tight">Page not found.</h1>
          <p class="mt-2 text-base text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6">
            <a href="/" class="text-base font-medium text-accent hover:text-accent/90">Go back home<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
