<template lang="pug">   
  div   
    //- .header  
    //-   h3 {{ title }}
    //-   h4 {{ `Students: ${items.length}` }}
    //-   // student options 
    //-   .student_menu
    //-     label show pictures
    //-       input(type='checkbox' @click='imagesToggle') 
    //-     label show Info
    //-       input(type='checkbox' @click="studentInfo()") 
    //-     label show Info 2
    //-       input(type='checkbox' @click="student_info()") 
      
    template(v-for="item in items")
      slot(:item="item" )               
</template>
<script>
import { get, post } from "../external/get-proMon-data";
export default {
  props: ["items"],
};
</script>
<style lang="scss" scoped>
</style>

