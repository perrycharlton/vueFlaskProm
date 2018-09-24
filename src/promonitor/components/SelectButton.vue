<template lang="pug">
  selectButtonVue(:items='items' :btnTitle='btnTitle' )
    template(slot-scope='{item}')
      slot(:item="item")
      
</template>
<script>
// import { mapState } from "vuex";
import selectButtonVue from "../slots/selectButton.vue";
export default {
  props: ["items", "btnTitle", "codeType", "hideitems"],
  components: {
    selectButtonVue
  },
};
</script >

</style>