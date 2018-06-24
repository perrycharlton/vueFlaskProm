import Users from '../components/Users.vue'
import Admin from '../components/Admin.vue'

export default {
        // This is the Promonitor Section
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
        {
            path: 'users',
            name: 'users',
            component: Users
        },
       
    ]
}