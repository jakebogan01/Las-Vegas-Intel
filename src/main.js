import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCollapsiblePanel from '@dafcoe/vue-collapsible-panel'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import './assets/css/app.css'

createApp(App).use(router).use(VueCollapsiblePanel).mount('#app')