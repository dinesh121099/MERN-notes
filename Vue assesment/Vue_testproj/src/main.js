import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Lifecycle from './Lifecycle.vue'
import ReactiveStateManagement from './ReactiveStateManagement.vue'
import ParentComp from './ParentComp.vue';
import { createPinia } from 'pinia';
import CounterStore from './CounterStore.vue'


const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)

app.mount('#app')
