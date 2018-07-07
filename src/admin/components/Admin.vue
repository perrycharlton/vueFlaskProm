<template lang="pug">
    .form
        form
            template(v-if="!Status")
                basicLogin(ref='child')
                // emailLogin(ref='child')
                .space
                button.btn.btn-primary(@click.prevent="login()") Login
            template(v-if="Status")
                button.btn.btn-primary(@click="logOut()") Logout
            button.btn.btn-primary(@click="goHome") Home
        div.course {{ Status }}
        div Errors: {{ Errors }}
        div {{ User.username }}
        router-view
</template>

<script>

import { adminLogOut, adminLogIn } from "../external/get-admin-data"
import basicLogin from "../../slots/BasicLogin"
import { mapState, mapGetters } from 'vuex'
// import emailLogin from "../slots/EmailLogin"

export default {
    name: 'admin',
    components: {  
        basicLogin
        // emailLogin
    },
    computed: {
        ...mapState('admin', {
            User: 'User',
            Status: 'Status'
        }),
        ...mapGetters('admin', {
            Errors: 'Errors'
        })
    },

    mounted() {
        this.$store.dispatch('main/updatePageTitle', "This is the Admin Page")
        this.$store.dispatch('main/updateImage', "https://picsum.photos/1000/1000/?image=1057")
    },
    methods: {
        goHome() { this.$router.push('/')},

        login() { 
            // console.log('login')
            const credentials = {
                // email: this.$refs.child.$refs.email.value,
                username: this.$refs.child.$refs.username.value,
                password: this.$refs.child.$refs.password.value
            }
            this.$store.dispatch('admin/AdminLogin', credentials)
        },


        async logOut() {
            this.$store.dispatch('admin/AdminLogout') 
            },
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