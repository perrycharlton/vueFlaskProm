<template lang="pug">
.form
  template(v-if="Status === 'success'")
    h2 {{ Message}}
    DisplayCourses
  template(v-else-if="Status != 'success'")
    form
      basicLogin(ref='child')
      button.btn.btn-primary.crs(@click.prevent="login()") Login
  router-view
</template>
<script>
import {
  getLogin,
  AuthLogout,
  checkSession
} from "../external/get-proMon-data";
import DisplayCourses from "../components/DisplayCourses.vue";
import basicLogin from "../../slots/BasicLogin";
import { mapState } from "vuex";
export default {
   components: {
    basicLogin,
    DisplayCourses
  },
  methods: {
    login() {
      // if login screen shown then get login
      const credentials = {
        // email: this.$refs.child.$refs.email.value,
        username: this.$refs.child.$refs.username.value,
        password: this.$refs.child.$refs.password.value
      };
      this.$store.dispatch("promonitor/PromonitorLogin", credentials);      
    },
    async authLoginOut() {
      this.cr = await AuthLogout();
      console.log(this.cr);
    }
  },
  computed: mapState("promonitor", {
    Status: "Status",
    User: "User",
    Message: "Message"
  }),
  mounted() {
    this.$store.dispatch('main/updateImage', "https://picsum.photos/1000/1000/?image=569")
    console.log("checking Loggin");
    // console.log(this.$store.getters['promonitor/User'].username);
    if (this.$store.getters['promonitor/User'].username == undefined){
      // console.log("Undifined this should get the data from the local store");
      // next check if the local store has the information
      if (sessionStorage.getItem("user") == undefined) {
        //  console.log("this says the localstore user is undifined");
         this.$store.dispatch('promonitor/UpdateStatus', "false")
         this.$store.dispatch("main/updatePageTitle","Welcome to Promonitor, Please log in");
      } else {
        let user = JSON.parse(sessionStorage.getItem("user"))
        // console.log(user)
        this.$store.dispatch('promonitor/UpdateUser', user)
        this.$store.dispatch("main/updatePageTitle", `Welcome ${this.User.first_name} to Promonitor`);
      }
      
    }else{
      this.$store.dispatch("main/updatePageTitle", `Welcome ${this.User.first_name} to Promonitor`);
    }
  }
};

</script>
<style lang="scss" scoped>

form {
  font-family: 'Ubuntu', sans-serif;
  font-size: 1em;
  padding: 10px 0;
}
</style>


