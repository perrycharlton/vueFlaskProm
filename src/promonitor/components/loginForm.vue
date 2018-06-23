<template lang="pug">
.form
    form
      basicLogin
      button.btn.btn-primary.crs(@click.prevent="login()") Login


</template>
<script>
import { getLogin, AuthLogout } from "../external/get-proMon-data"
// import  DisplayCourses  from "../components/DisplayCourses.vue";
import basicLogin from "../../slots/BasicLogin"
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
      // DisplayCourses,
      basicLogin
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
  },
  mounted() {
        this.$emit("on-page-title-change", "Welcome to Promonitor, Please log in")
  }
}
</script>
<style lang="scss" scoped>
form {
  display: grid;
  grid-gap: .25em;
  grid-template-columns: 60% 10% 10%;
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


