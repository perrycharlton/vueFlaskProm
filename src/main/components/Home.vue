<template lang='pug'> 
  h1 Welcome to my Home Page           
  
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('main/updatePageTitle', "Welcome to the Home page.")
        this.$store.dispatch('main/updateImage', "https://picsum.photos/1000/1000/?image=1058")
    },
}


</script>
<style lang='scss' scoped>

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