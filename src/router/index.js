
import Start from '../pages/Start.vue'
// import loginForm  from "../components/loginForm.vue";
import Faq from '../pages/Faq.vue'
import Courses from '../promonitor/components/Courses.vue'
import Promonitor from '../promonitor/components/loginForm.vue'
import About from '../pages/About.vue'
import Admin from '../pages/Admin.vue'
import store from "../store/Store";



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
            component: Start,
            
        },
        {
            path: '/faq',
            name: 'faq',
            component: Faq,
        },
        {
            path: '/promonitor',
            name: 'promonitor',
            component: Promonitor,
            // beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/courses',
            name: 'courses',
            component: Courses,
            // beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            beforeEnter: ifNotAuthenticated,
        },
         {
            path: '/admin',
            name: 'admin',
            component: Admin,
            // beforeEnter: ifNotAuthenticated,
        },
    //     {
    //        path: '/login',
    //        name: 'login',
    //        component: loginForm,
    //        // beforeEnter: ifNotAuthenticated,
    //    }
    ]