import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/css/app.css'

createApp(App).use(router).use(VueCollapsiblePanel).mount('#app')