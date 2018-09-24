<template lang='pug'>
  .backImg(:style=`backgroungImage`)
    .page
      topNavBar.topNavBar
      start.start
    

</template>

<script>
import start from './main/pages/Start.vue'
import topNavBar from './main/components/TopNav.vue'
import { mapState } from "vuex";
export default {
  components: {  
    start, 
    topNavBar
  },
  computed: mapState("main", {
    Image: "Image",
    backgroungImage() {
        return `background-image:url(${this.Image});`
    }
  })
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,600');

*, *::before, *::after {
  box-sizing: border-box;
}
body, html {
  height: 100%;
}
body {
	margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 1em;
	// background: rgb(255, 255, 255);
	// font-family: 'Work Sans', sans-serif;
	font-weight: 400;
}
.page{
  display: grid;
}
.backImg{
  background:  no-repeat center center fixed;
  //  background-attachment: fixed;
  // background-color: grey;
    // background-size: 100%;
  min-height: 100%;
  // max-width: 100vw;
  // background-color: rgba(167, 166, 166, 0.616);
  background-blend-mode: multiply;
  background-size: cover;

}

</style>