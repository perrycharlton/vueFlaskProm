<template lang="pug">
.container
  .form
    .title
      h2 {{ Message}}
    template(v-if="login_status")
      Menu.login
    template(v-else)
      Login.login

  template(v-if="student_group_status")
    StudentsHeader.studentsHeader(:title='groupTitle' :student_count='studentCount')
    Students.students(:items='StudentDetails')
      .codeItems(slot-scope='{item}' @click="selectStudent(item.href)") 
        template(v-if="item.photo")
          img(:src="'data:image/jpeg;base64,' + item.photo")
          .name {{ item.name}} 
        .overlay
          .label ID: 
            .id {{ item.id }}
          .label Mobile: 
            .mobile {{item.mobile}}
          .label Address: 
          template(v-for="i in item.address")
            .address {{ i }}

</template>
<script>
import {
  getLogin,
  AuthLogout,
  checkSession
} from "../external/get-proMon-data";
import Menu from "../components/Menu.vue";
import Students from "../components/Students.vue";
import StudentsHeader from "../slots/studentsHeader.vue";

import Login from "../components/Login.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    Login,
    Menu,
    Students,
    StudentsHeader
  },
 
  methods: {
    selectStudent(code) {
      console.log(code);
    },
    async authLoginOut() {
      this.cr = await AuthLogout();
      console.log(this.cr);
    }
  },
  computed: {
    ...mapState("promonitor", {
      groupTitle: (state) => state.current_course_code,
      studentCount: (state) => state.students.length
      }),
    ...mapState("promonitor", [    
      "Status",
      "User",
      "students",
      "Message",
      "student_group_status",
      "login_status"
    ]),
    ...mapGetters("promonitor", [
      "StudentDetails"
    ])
  },


  mounted() {
    this.$store.dispatch(
      "main/updateImage",
      "https://picsum.photos/1000/1000/?image=569"
    );
    console.log("checking Loggin");
    if (this.$store.getters["promonitor/login_status"]) {
      this.$store.dispatch("main/updatePageTitle",`Welcome ${this.User.first_name} to Promonitor`);
      this.$store.dispatch("promonitor/UpdateMessage",
        `Ok ${this.User.first_name}, now please select the Area you are interested in!`);
    } else {
      this.$store.dispatch("promonitor/UpdateStatus", "false");
      this.$store.dispatch("main/updatePageTitle", "Welcome to Promonitor, please log in");
    }
  }
};
</script>
<style lang="scss" scoped>

.container{
  grid-gap: 1em;

}

.form {
  background-color: rgba(80, 60, 60, 0.561);
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-template-rows: 80px 90px 20px ;
  box-shadow:  2px 4px 2px rgba(29, 29, 29, 0.384);

  display: grid;  
  border-radius: 10px; 
  padding: 10px;
}
.title {
  text-align: center;
  grid-column: 1 / end;
}
h2 {
  place-self: center;  
  white-space: pre-line;
}
.studentsHeader{
  grid-row: 2;
  margin-top: 20px;
}
.students {
  padding: 0 0 20px 0;
  background-color: rgba(71, 53, 53, 0.724);
  color: white;
  font-size: 1em;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  .codeItems{
    min-height: 200px;
    position: relative;
    place-items:center;
    display: grid;
    // transition: all .2s ease-in-out;
    // &:hover{
    //   animation: grow 2s;
    // }
    animation: show_background 2s 0.5s forwards;
    img{
      align-self: end;
      border-radius:50%;
    }
  }  
  .codeItems:nth-child(odd) {
    border-radius: 5px;
    background-color: #7a484888;
    color: rgb(255, 255, 255);
  }
  .codeItems:nth-child(even) {
    border-radius: 5px;
    background-color: #cf7c7c88;
    color: #000;
  }
  .address, .label, .id, .mobile{
    display: inline-block;
  }
  .label{
    font-weight: bold;
  }
  .id, .mobile {
    font-weight: normal;
  }

  .overlay{
    position: absolute;
    opacity: 0;
    display: inline;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    padding: 5% 0 0 5%;
    background-color: #1d14149d;
    color: white;
    animation:hide_details 2s forwards;
  }  
  .address{
    padding-left: 2%;
    display: block;
  }
  .codeItems:hover{
    // animation: grow 2s forwards;
  }
  .codeItems:hover .overlay{
    animation:show_details 2s forwards;
  }
  .codeItems:hover img, .codeItems:hover .name{
    animation:hide_background 2s 2s forwards;
  }
  .overlay .codeItems{
    animation: show_background 2s 0.5s forwards;
  }
}
.login {
  grid-row: 2;
  grid-column: 1 / -1;
}

@keyframes grow {
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.0);
  }

}
@keyframes show_details {
  from {
    opacity: 0;
  }
  to {
    opacity: 1.0;
  }
}
@keyframes hide_details {
  from {
    opacity: 1.0;
  }
  to {
    opacity: 0;
  }
}
@keyframes hide_background {
  from {
    opacity: 1.0;
  }
  to {
    opacity: 0.2;
  }
}
@keyframes show_background {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>


