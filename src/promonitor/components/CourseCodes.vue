<template lang="pug">
  selectButtonVue(:items='area_codes' :btnTitle='btnTitle')
    .codeItems(slot-scope='{item}' @click="selectCode(item.c_ref)" :name="item.c_code") {{item.c_code}} - {{ item.c_title}}         
</template>
<script>

import { mapState } from "vuex";
import selectButtonVue from '../slots/selectButton.vue';
export default {
  data(){
    return {
      btnTitle: 'Select Course Code'
    }
  },
  components: {
        selectButtonVue
    },
  methods: {
    selectCode (code) {
      console.log(code)
      // uodate the status to diplay the button
      this.$store.dispatch('promonitor/course_code_status', 'true')
      // this.display = false
      // axois call to get course codes or check 
    }
  },
  mounted() {
    console.log("checking codes");
    let code = "area_codes"
    if (this.$store.getters['promonitor/' + code] == undefined || this.$store.getters['promonitor/' + code].length === 0){
      if (localStorage.getItem(code) == undefined) {
        this.$store.dispatch('promonitor/get_codes', code )
      } else {
        let data = JSON.parse(localStorage.getItem(code))
        this.$store.dispatch('promonitor/saveCodes', {data, code})
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