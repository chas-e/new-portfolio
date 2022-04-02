import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.config.errorHandler = (err) => {
    console.error(err)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
