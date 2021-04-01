import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import Destinations from '../views/Destinations.vue'
import Pricing_Table from '../views/Pricing_Table.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    props: true
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: Privacy,
    props: true
  },
  {
    path: '/Terms',
    name: 'Terms',
    component: Terms,
    props: true
  },
  {
    path: '/Destinations',
    name: 'Destinations',
    component: Destinations,
    props: true
  },
  {
    path: '/Pricing',
    name: 'Pricing',
    component: Pricing_Table,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router