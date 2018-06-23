<template lang='pug'>
  .page
    .menuTop
      sideNavBar
    transition(name='router-anim')
    keep-alive('courses')               
    router-view.veiws(@on-page-title-change="titleChange")     
</template>
<script>

import sideNavBar from '../components/SideNavBar.vue'


export default {
  components:{ sideNavBar },
  methods: {    
    titleChange (v) {
      console.log(v, 'this title')
      this.$emit('title-change', v)
    }
  }
}
</script>
<style lang='scss' scoped>

.page { 
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 6fr 1fr;
  padding-bottom: 2em;
}
.views {
  grid-column: 2/3;
  border-color:gray;
  // grid-row: 2/3;
}
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 1s;
  display: none;

}

.router-anim-leave-active {
  animation: going 1s;
  // display: hidden;
}

@keyframes going {
  from {  
    opacity: 1;
   
  }
  to {
    opacity: 0;
    display: none;
    transform: translateX(50%);
  }
}
@keyframes coming {
  from {
    opacity: 0;
    display: none;
    transform: translateX(-50%);
}
  to {
   opacity: 1;
    // transform: translateX(0%);
  }
  
}

</style>