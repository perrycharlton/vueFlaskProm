<template lang='pug'>
    .title
      h1 {{ PageTitle }}

</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState("main", {
    PageTitle: "PageTitle"
  })
};
</script>
<style lang="scss" scoped>
div.title{
  text-align: center;
}
h1 {
  padding:5px 12px;

  // display: flex;
  // text-transform: uppercase;
  width: 100%;
  font-size: 25.5uw;
  margin-bottom: 0.2em;
  // align-items: center;

  // align-self: start;
  
  background: black;
  color: white;
  mix-blend-mode: multiply;
  border-radius: 5px;
}
// h1::before,
// h1::after {
//   flex: 1;
//   color: white;
//   font-size: 25.5uw;
// }
// h1::before {
//   content: open-quote;
//   text-align: right;
// }
// h1::after {
//   content: close-quote;
// }
</style>