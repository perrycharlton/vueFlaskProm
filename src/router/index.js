
import Home from '../pages/Home.vue'
import Faq from '../pages/Faq.vue'
import Courses from '../pages/Courses.vue'
import About from '../pages/About.vue'

export const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/faq',
            name: 'faq',
            component: Faq
        },
        {
            path: '/courses',
            name: 'courses',
            component: Courses
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]