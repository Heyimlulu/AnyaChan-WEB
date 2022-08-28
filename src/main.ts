import { createApp } from 'vue'
import './index.css'
import './tailwind.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth' }
    }

    // Go to the top of the page if no hash
    return { x: 0, y: 0 }
  }
})

app.use(router)
app.use(head)
app.mount(document.body)
