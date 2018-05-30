<template lang='pug'>
  .home.page
    h1 {{ greet }}
    h3 {{ job }}
    form
      input(type='text' v-model='corse.code')
      input(type='text' v-model='credentials.username')
      input(type='password' v-model='credentials.password')
      button.btn btn-primary(@click="login()") Login
</template>

<script>
import {  getLogin } from "../tools/get-proMon-data"
export default {

  data() {
    return {
      job:"Electrician",
      greet:"Welcome Perry ",
      credentials: {
        username: '',
        password: ''
      },
      loggingIn: false,
      error: ''
    }
  },
  methods: {
    
    async login() { 
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      let confirmed = await getLogin(credentials)
      console.log(confirmed)
    }
  }
}
</script>
<style lang='scss' scoped>
.btn {
  cursor: pointer;
  
}

</style>