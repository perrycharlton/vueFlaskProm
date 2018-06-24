import Courses from '../components/Courses.vue'
import Students from '../components/Students.vue'
import Promonitor from '../components/loginForm.vue'

export default {
        // This is the Promonitor Section
        path: '/promonitor',
        name: 'promonitor',
        component: Promonitor,
        children: [
        {
            path: 'courses',
            name: 'courses',
            component: Courses
        },
        {
            path: 'students',
            name: 'students',
            component: Students
        },
    ]
}