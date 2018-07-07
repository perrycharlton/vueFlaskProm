<template lang="pug">
  selectButtonVue(:items='CourseCodes' v-on:selectCode="selectCode($event)")             
</template>
<script>

import { mapState } from "vuex";
import selectButtonVue from '../slots/selectButton.vue';
export default {
  components: {
        selectButtonVue
    },
  computed: mapState("promonitor", {
    CourseCodes: "CourseCodes"
  }),
  methods: {
    selectCode: (code) => {
      console.log(code)
      // axois call to get course codes or check 
    }
  },
  mounted() {
    console.log("checking codes");
 
    if (this.$store.getters['promonitor/CourseCodes'] == undefined){
      // console.log('the stor is empty', this.$store.getters['promonitor/CourseCodes'])
      if (localStorage.getItem("C_Codes") == undefined) {
        this.$store.dispatch('promonitor/get_codes')
      } else {
        let codes = JSON.parse(localStorage.getItem("C_Codes"))
        this.$store.dispatch('promonitor/saveCourseCodes',codes)
        let User = this.$store.getters['promonitor/User']
        this.$store.dispatch('promonitor/UpdateMessage', `${User.first_name}, please select the area you are interested in!`)
      }
    }
  }
};
</script >

<style lang='scss' scoped>
.select {
  position: relative;
    padding: 15px 10px;
    display: inline-block;
    background: rgb(122, 122, 122);
    border-radius: 5px;
}
.items{
  position: absolute;
  display: none; // HIDE
  border-radius: 5px;
  padding: 15px 10px;
  background: rgb(122, 122, 122);
}
.codeItems {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer; 
  padding: 3px;
}
.select:hover ~ .items, .items:hover{
    background: #d5d5d5;
    display: block; // HIDE
  }
  .codeItems:hover{
    background: #f1f1f1;
    border-radius: 5px;
  }

</style>