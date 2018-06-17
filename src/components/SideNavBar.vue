<template lang="pug">

div(id="navMenu")
    .navbar.navbar-dark.bg-dark.flex-column
        .nav
        router-link.nav-link(to="/" ) Home
        router-link.nav-link(to="/courses") Courses
        router-link.nav-link(to="/faq" @click.native="click-event") Faq
        router-link.nav-link(to="/about" @click="click-event") About   
        router-link.nav-link(to="/admin" @click.native="click-event") Admin                   
    
</template>
<script>
export default {
    model: {
        event: 'clickEvent'
    }, 
    methods: {
        clickEvent: (e) => {
            console.log('event clicked')
            this.$emit('clickEvent', 'Admin Home Page')
        } 

    }
   
}
</script>

<style lang="scss">

@import "node_modules/bootstrap/scss/bootstrap";
  
   .navbar {
       grid-column: 1;
       border-radius: 10px;
   }

  

//   .views {
//     grid-column: 2/3;
//     border-color:gray;
//     // grid-row: 2/3;
//   }







</style>