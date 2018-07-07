<template lang="pug">
  div
    .select(@mouseover="showDisplay()" @mouseleave="hideDisplay()") Select Curricullem Code
    .items(v-if='display' @mouseover="showDisplay()" @mouseleave="hideDisplay()")
      template(v-for="item in items")            
        .codeItems(@click.prevent="selectCode(item.c_ref)" :name="item.c_code") {{item.c_code}} - {{ item.c_title}}              
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["items"],
  methods: {
    selectCode(code) {
      this.$emit('selectCode', code)
      this.display = false
    },
    showDisplay(){
      this.display = true
    },
    hideDisplay(){
      this.display = false
    }
  },
  data(){
    return {
      display: false
    }
  }
};
</script >

<style lang='scss' scoped>
.select {
  position: relative;
  padding: 15px 10px;
  display: inline-block;
  background: rgb(122, 122, 122);
  border-radius: 5px;
}
.items {
  position: absolute;
  border-radius: 5px;
  padding: 15px 10px;
  background: rgb(122, 122, 122);
}
.codeItems {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  padding: 3px;
}
.select:hover ~ .items,
.items:hover {
  background: #d5d5d5;
}
.codeItems:hover {
  background: #f1f1f1;
  border-radius: 5px;
}

</style>