<template lang="pug">
    div
        template(v-if="authenticated")
            router-link.nav-link(to="/promonitor/courses") Courses
            router-link.nav-link(:to="{name: 'students'}") Students
        // router-link.nav-link(to="/promonitor/about") Help   
</template>
<script>

export default {
    data: () => {
        return {
        authenticated: false
        }
    }
}
</script>