<template lang="pug">
    .form
        form
            .form-group.form-inline
                label(for='username') User Name:
                input.form-control(id='username' autocomplete='username' type='text' v-model='credentials.username')
            .form-group.form-inline
                label(for='current-password') Password:
                input.form-control(id='current-password' autocomplete='current-password' type='password' v-model='credentials.password')
            .space
            button.btn.btn-primary(@click.prevent="login()") Login
            button.btn.btn-primary(@click="logOut()") Logout
            button.btn.btn-primary(@click="goHome") Home
        div.course {{ status }}

    
</template>

<script>
// let isActive = true
import { adminLogOut, adminLogIn } from "../tools/get-proMon-data"

export default {
    name: 'courses',
    data() {     
        return {
            credentials: {
                username: '',
                password: ''
            },
            isActive: true,
            posts: [],
            status: ""
        }
    },
    methods: {
        goHome() { this.$router.push('/')},
        async login() { 
            const credentials = {
                username: this.credentials.username,
                password: this.credentials.password
            }
            let r = await adminLogIn(credentials)
            console.log(r)
            this.status = r.status
            if (r.status === 'logged out') {
                this.$router.push('/')
            } 
            },
        
        async filterUsers(type) { this.posts = await this.$store.dispatch('userFilter', type)},

        async logOut() { 

            let r = await adminLogOut()
            console.log(r)
            this.status = r.status
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
  .form-group{
    display: grid;
    grid-column: 1;
    grid-template-columns: 3fr 6fr 2fr;
    grid-gap: 1em;
    
    label{
      justify-self: right;
    }    
    input{
      justify-self: left;
    }
  }
  button, .space {
    // grid-column: 3;
    grid-row: 4;
  }
}
</style>