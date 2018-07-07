<template lang='pug'>
    h1 {{ PageTitle }}

</template>
<script>
import { mapState } from "vuex";
export default {
    computed: mapState("main", {
    PageTitle: "PageTitle"
  })
}
</script>
<style lang="scss" scoped>
h1{
    // grid-row: 1;
    // grid-column: 2;
    
    display: flex;
    text-transform: uppercase;
    width: 100%;
    font-size: 25.5uw;
    margin-bottom: .2em;
    align-items: center;

    // align-self: start;
    // text-align: center;
    background: black;
    color: white;
    mix-blend-mode: multiply;
    border-radius: 5px;
}
h1::before, h1::after{
    flex: 1;
    color: white;
    font-size: 25.5uw;
}
h1::before{
content:open-quote;
text-align: right;
}
h1::after{
content:close-quote;
}

</style>