import Home from '../components/Home.vue'

import Faq from '../components/Faq.vue'
import About from '../components/About.vue'
import About2 from '../components/About2.vue'
import Promonitor from '../../promonitor/routes/index'
// import proRoutes from '../promonitor/routes/index'

import Admin from '../../admin/routes/index'

import store from "../store/Store"

const ifNotAuthenticated = (to, from, next) => {
    console.log(`To: ${to.name}, From: ${from.name}`)

    // If the user has an authentication token the continue to next
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  if(to.name == 'about'){
    next('/home')
    return
  }
  next('/faq')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

export const routes = [
        {
            path: '/',
            name: 'home',
            component: Home,            
        },
        {
            path: '/faq',
            name: 'faq',
            component: Faq,
        },        
        {
            path: '/about',
            name: 'about',
            component: About2,
            // beforeEnter: ifNotAuthenticated,
        },
        // This is the Promonitor Section
        Promonitor,
        // This is the Admin Section
        Admin
    ]