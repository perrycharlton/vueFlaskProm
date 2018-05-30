<template lang='pug'>
  .faq.page
    h1
    .msg {{ message}}

</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {message: "This Page is for FAQ's - Welcome Perry "}
  }   
    
}
</script>