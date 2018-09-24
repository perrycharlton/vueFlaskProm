<template lang="pug">
  form
    basicLogin(ref='child')
    .btn.crs(@click.prevent="login()") 
      span Login
</template>
<script>
import basicLogin from "../../slots/BasicLogin";
export default {
  components: {
    basicLogin
  },
  data() {
    return {};
  },
  methods: {
    login() {
      // if login screen shown then get login
      let username = this.$refs.child.$refs.username.value;
      let password = this.$refs.child.$refs.password.value;
      if (username.length < 1 || password.length < 1) {
        this.$store.dispatch(
          "promonitor/UpdateMessage",
          "Please ensure that the user name and password are not blank"
        );
      } else {
        const credentials = {
          username: this.$refs.child.$refs.username.value,
          password: this.$refs.child.$refs.password.value
        };
        this.$store.dispatch("promonitor/PromonitorLogin", credentials);
        //   some kind of animation here??
    
      }
    }
  }
};
</script>
<style lang="scss" scoped>

@import '../../scss/custom.scss';

form {
  display: grid;
  grid-template-columns: repeat(auto, 4);

}
.btn {
  grid-column: 2;
  align-self: end;
  display: grid;
  @extend %my-select-btn;
}
.btn:active{
  @extend %my-select-btn-active
}
.btn:hover{
 @extend %my-select-btn-hover

}
span{
  align-self: center;
}
</style>