import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

if (import.meta.env.VITE_APP_MODE === 'development') {
  console.log('Running in development mode')
} else if (import.meta.env.VITE_APP_MODE === 'test') {
  console.log('Running in test mode')
} else if (import.meta.env.VITE_APP_MODE === 'production') {
  console.log('Running in production mode')
}

console.log(import.meta.env.VITE_APP_API_URL)
console.log(import.meta.env.VITE_APP_MODE)
