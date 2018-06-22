<template lang="pug">
    .navbar.navbar-dark.bg-dark.flex-column
        .nav
        router-link.nav-link(to="/" @click.native="selectPage('home')") Home
        template(v-if="currentPage === 'promonitor'")
            router-link.nav-link(to="/courses") Courses
            router-link.nav-link(to="/faq") Students
            router-link.nav-link(to="/about") Help   
        template(v-else-if="currentPage === 'home'")
            router-link.nav-link(to="/promonitor" @click.native="selectPage('promonitor')") Promonitor
            router-link.nav-link(to="/faq") Faq              
            router-link.nav-link(to="/admin") Admin
        template(v-else)
            router-link.nav-link(to="/faq") Faq
        router-link.nav-link(to="/about") About 
</template>
<script>
export default {
    // let messege = 'Start',
    data: () => {
        return {
        currentPage: "home"
        }
    },
    methods: {
        selectPage(page) { 
            console.log(page)
            this.currentPage = page
        }
    }
  
}
</script>
<style lang="scss">

@import "node_modules/bootstrap/scss/bootstrap";
  
   .navbar {
       grid-column: 1;
       border-radius: 10px;
   }
</style>