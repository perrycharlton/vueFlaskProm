<template lang="pug">
    .courses.page 
        DisplayCourses(:courses='courses' :text="c_text")
        h1 Select the curriculum
        DisplayCourses(:courses='data' :text="d_text")
        section.promon
            ProMon
</template>

<script>

import { getLogin } from "../tools/get-proMon-data"
import  ProMon from "../components/ProMon.vue";
import  DisplayCourses  from "../components/DisplayCourses.vue";
export default {
    data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      courseCode:'EA1032',
      loggingIn: false,
      error: '',
      
      courses: '',
      data: [
        {
        c_ref: 'Hello ref',
        c_code: 'perrys code'
      },
      
      {
        c_ref: 'Goodbye ref',
        c_code: 'Claire code'
      }
      ],
      d_text: 'Select Curriculum',
      c_text: 'Select Course Code',
    }
  },
  components: {
        DisplayCourses,
        ProMon
    },
  methods: {    
    async login() { 
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password,
        courseCode: this.courseCode
      }
      this.courses = await getLogin(credentials)
    }
  }

}
</script >

 <style lang='scss' scoped>


</style>
