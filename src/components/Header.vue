<template lang='pug'>
    .header
        h1 {{ messege }}
</template>

<script>
import Vue from "vue";

export default {
    // let messege = 'Start',
    props:{
        msg: String,
        message: String   
    },
    data() { 
        return {
            messege: this.msg
        }        
    },
    watch: {
    // whenever question changes, this function will run
    msg (v, n) {
    //   console.log('This is the watch header change', v, n)
      this.messege = v
    }
  },
}
</script>
<style lang="scss" scoped>
.header {
    grid-column: 1 / 3;
    align-self: center;
    justify-self: center;
    font-size: 2em;
    h1{
        padding-top: 10px;
    }
  }
</style>
