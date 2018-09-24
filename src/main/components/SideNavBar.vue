<template lang="pug">
    div
        .navbar.navbar-dark.bg-dark.flex-column
            .nav
            router-link.nav-link(to="/" @click.native="selectPage('home')") Home     
            template(v-if="currentPage === 'home'")
                router-link.nav-link(to="/promonitor" @click.native="selectPage('promonitor')") Promonitor                       
                router-link.nav-link(to="/admin" @click.native="selectPage('admin')") Admin            
            router-link.nav-link(to="/faq") Faq
            router-link.nav-link(to="/about") About 
        template(v-if="currentPage != 'home'")
            template(v-if="currentPage === 'promonitor'")
                Promonitor
            template(v-else-if="currentPage === 'admin'")
                Admin
</template>
<script>
import Promonitor from '../../promonitor/components/promNav.vue'
import Admin from '../../admin/components/adminNav.vue'
export default {
    components:{ Promonitor, Admin },
    data: () => {
        return {
        currentPage: "home"
        }
    },
    watch: {
        userauth (v) {
            console.log(v)
            this.userauth = v
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
<style lang="scss" scoped>

// @import "node_modules/bootstrap/scss/bootstrap";
  
   .navbar {
       grid-column: 1;
       border-radius: 10px;
   }
</style>