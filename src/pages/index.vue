<script setup>
useHead({
  title: 'Anya-Chan | Discord Bot',
  description: 'Homepage'
})
</script>

<script>
import Home from '../components/sections/Home.vue'
import Features from '../components/sections/Features.vue'
import Commands from '../components/sections/Commands.vue'

export default {
  components: {
    Home: Home,
    Features: Features,
    Commands: Commands
  }
}
</script>

<template>
  <div>
    <Home />
    <Features />
    <Commands />
  </div>
</template>
