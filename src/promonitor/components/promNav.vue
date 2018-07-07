<template lang="pug">
    div
        template(v-if="Status")
            h2 Promonitor 
            .navbar.navbar-dark.bg-dark.flex-column
                router-link.nav-link(to="/promonitor/courses") Courses
                router-link.nav-link(:to="{name: 'students'}") Students
</template>
<script>
import { mapState } from 'vuex'
export default {
    data: () => {
        return {
        authenticated: false
        }
    },
    computed: {
        ...mapState ('promonitor', {
            Status: 'Status',
            User: 'User'
        })
    }
}
</script>