<template lang="pug">
.menuContainer
  template(v-if="myGroups_status")
    SelectButton.selectButton(:items='myGroups' btnTitle='My Groups' codeType='myGroups' :hideItems="hideItems" )
      .codeItems(slot-scope='{item}' @click="getStudents({'href':item.href, 'title': item.title})") {{ item.title}}
    SelectButton.selectButton(:items='area_codes' :btnTitle="btnText" :codeType='area_codes' :hideItems="area_codes_status" ref='changeDisplay'
      @click.native="get_code({'code':'college_codes'})" )
      .codeItems(slot-scope='{item}' @click="selectCode({'href':item.href, 'code':'course_codes'})") {{ item.title}}
  template(v-if="course_codes_status")
    SelectButton.selectButton(:items='course_codes' btnTitle='Get Course' :codeType='course_codes' :hideItems="hideItems" myClass='displayLeft')
      .codeItems(slot-scope='{item}' @click="getStudents({'href':item.href, 'title': item.title})") {{ item.title}}

</template>
<script>
import SelectButton from "../slots/selectButton.vue";

import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    SelectButton
  },
  data: () => {
    return {
      hideItems: true,
    };
  },
  methods: {
    getStudents(data){
      this.$store.dispatch("promonitor/getStudents", data.href);
      this.$store.dispatch('promonitor/current_course_code', data.title)
      this.$store.dispatch("promonitor/UpdateMessage",`Ok ${this.User.first_name}, we are just getting the students on that course!`);
    },
    selectCode(data) {      
      this.$store.dispatch("promonitor/get_codes", data);
      this.$store.dispatch("promonitor/UpdateMessage",`Ok ${this.User.first_name}, we are nearly there, now the Course you are interested in!`);        
       
    },
    get_code(code) {
      console.log(code);      
      if (this.login_status) {
        // console.log(this.login_status);
        this.$store.dispatch("promonitor/get_codes", code);
        this.$refs.changeDisplay.changeDisplay()
      }
    },
  },
  mounted () {
    this.$store.dispatch('promonitor/btnText', 'Get Codes')
  },

  computed: {    
    ...mapState("promonitor", [
      "Status",
      "User",
      "area_codes",
      "course_codes",
      "course_codes_status",
      "area_codes_status",
      "myGroups",
      "myGroups_status",
      "login_status",
      "btnText"
    ])
  }
};
</script>
 <style lang="scss" scoped>
.menuContainer {
  grid-column: 1 / end;
  font-size: 1em;
  padding: 10px 10px;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 150px);

  .selectButton {
    place-self: center;

  }
}
</style>


