<template lang="pug">
.form
    form
      .form-group.form-inline
        label(for='username') User Name:
        input.form-control(id='username' autocomplete='username' type='text' v-model='credentials.username')
      .form-group.form-inline
        label(for='current-password') Password:
        input.form-control(id='current-password' autocomplete='current-password' type='password' v-model='credentials.password')
      button.btn.btn-primary.crs(@click.prevent="login()") Login
    DisplayCourses(:courses='courses' :text='text')

</template>
<script>
import { getLogin, AuthLogout } from "../tools/get-proMon-data"
import  DisplayCourses  from "../components/DisplayCourses.vue";
export default {
    props: [
        // 'courses'
    ],
  data() {
        return {
        credentials: {
            username: '',
            password: ''
        },
        loggingIn: false,
        error: '',        
        courses: '',
        text: '',
    }
  },
  components: {
      DisplayCourses
    },
  methods: {    
    async login() { 
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      this.courses = await getLogin(credentials)
      this.text = 'Courses'
      console.log(this.courses)
    },
    async authLoginOut() { 
      this.cr = await AuthLogout()
      console.log(this.cr)
    }
  }
}
</script>
<style lang="scss" scoped>
form {
  display: grid;
  grid-gap: .25em;
  grid-template-columns: 60% 10% 10%;
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
  button {
    // grid-column: 3;
    grid-row: 4;
  }
  .crc{
      grid-column: 2
  }
  .crs{
      grid-column: 3
  }
  

}
</style>


