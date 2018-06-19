
import Home from '../pages/Home.vue'
import  loginForm  from "../components/loginForm.vue";
import Faq from '../pages/Faq.vue'
import Courses from '../pages/Courses.vue'
import About from '../pages/About.vue'
import Admin from '../pages/Admin.vue'
import navMenu from '../components/SideNavBar.vue'
import store from "../store/Store";



const ifNotAuthenticated = (to, from, next) => {
    console.log(`To: ${to.name}, From: ${from.name}`)

    // If the user has an authentication token the continue to next
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  if(to.name == 'about'){
    next('/login')
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
            component: loginForm,
            
        },
        {
            path: '/faq',
            name: 'faq',
            component: Faq,
        },
        {
            path: '/courses',
            name: 'courses',
            component: Courses,
            beforeEnter: ifNotAuthenticated,
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
        {
           path: '/login',
           name: 'login',
           component: loginForm,
           // beforeEnter: ifNotAuthenticated,
       }
    ]