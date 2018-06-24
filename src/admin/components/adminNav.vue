<template lang="pug">
    div
        template(v-if="Status")
            router-link.nav-link(to="/home") Home
            router-link.nav-link(to="/admin/users") Users
            // router-link.nav-link(:to="{name: 'students'}") Students
        // router-link.nav-link(to="/promonitor/about") Help   
</template>
<script>

export default {
    computed: {
        Status() {
            return this.$store.getters.authStatus
        }
    }
}
</script>