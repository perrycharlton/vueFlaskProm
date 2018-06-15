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
        message:
        { 
            type: String,
            default: 'Start'
        }
    },
    data() {
        return {
            messege: this.msg.length > 0 ? this.msg : this.message
        }
    }
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
