<template lang="pug">
    .form
        form
            basicLogin(ref='child')
            // emailLogin(ref='child')
            .space
            button.btn.btn-primary(@click.prevent="login()") Login
            button.btn.btn-primary(@click="logOut()") Logout
            button.btn.btn-primary(@click="goHome") Home
        div.course {{ Status }}
        div {{ User }}
        router-view
</template>

<script>

import { adminLogOut, adminLogIn } from "../external/get-admin-data"
import basicLogin from "../../slots/BasicLogin"
// import emailLogin from "../slots/EmailLogin"

export default {
    name: 'admin',
    components: {  
        basicLogin
        // emailLogin
    },
    data() {     
        return {
            credentials: {
                username: '',
                password: ''
            },
            status: "",
            authenticated: false
        }
    },
    computed: {
        User() {
            return this.$store.getters.currentState.username
        },
        Status() {
            return this.$store.getters.authStatus
        }

    },
    mounted() {
        this.$store.dispatch('updatePageTitle', "This is the Admin Page")
    },
    methods: {
        goHome() { this.$router.push('/')},

        async login() { 
            console.log('login')
            const credentials = {
                // email: this.$refs.child.$refs.email.value,
                username: this.$refs.child.$refs.username.value,
                password: this.$refs.child.$refs.password.value
            }
            this.$store.dispatch('AdminLogin', credentials)
        },


        async logOut() { 

            let r = await adminLogOut()
            console.log(r)
            this.status = r.status
            // this.authenticated = false
            if (r.status === 'logged out') {
                this.$router.push('/')
            } 
            },

        async sortUsers(object) { 
            let reverse = this.isActive
            this.posts = await this.$store.dispatch('sortUsersFirstName', {object, reverse})
            this.isActive = !this.isActive
            }
    },
    
}
</script >
<style lang='scss' scoped>
form {
  display: grid;
  grid-gap: .25em;
  grid-template-columns: 60% 10% 10% 10%;
  
  button, .space {
    // grid-column: 2;
    grid-row: 2;
    // align-self: center;
  }
}
</style>