<template lang="pug">   
  //- .container   
  .header  
    h3 {{ title }}
    h4 Students: {{ student_count }}
    // student options 
    .student_menu
      //- label show pictures
      //-   input(type='checkbox' @click='imagesToggle') 
      //- label show Info
      //-   input(type='checkbox' @click="studentInfo()") 
      //- label show Info 2
      //-   input(type='checkbox' @click="student_info()")            
</template>
<script>
import { get, post } from "../external/get-proMon-data";
export default {
  props: ["title", "student_count"],
  methods: {
    imagesToggle() {
      // get student information - one action the data will identify which info
      this.$store.dispatch("promonitor/student_img")

    },
    student_info() {
      this.$store.dispatch("promonitor/student_info");
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  background-color: green;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
</style>

