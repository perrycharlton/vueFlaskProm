<template lang="pug">
  div
    .select(@mouseover="showDisplay()" @mouseleave="hideDisplay()")  {{ btnTitle }}
    .container(v-if='display' @mouseover="showDisplay()" @mouseleave="hideDisplay()" @click="hideDisplay()" :class='myClass' ) 
      .items 
        template(v-for="item in items")   
          slot(:item="item" )                     
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["items", "btnTitle", "hideItems", "myClass"],

  methods: {
    changeDisplay() {return this.display = true},
    showDisplay() {
      if (this.hideItems) {
        this.display = true;
      }
    },
    hideDisplay() {
      this.display = false;
    }
  },
  data: function() {
    return { display: false }
  }
};
</script >

<style lang='scss' scoped>
@import "../../scss/custom.scss";

.select {
  position: relative;
  padding: 15px 10px;
  display: block;
  // width: 120px;
  @extend %my-select-btn;
}
// need to change depending on if a select or drop
.select:active {
  @extend %my-select-btn-active;
}
.select:hover {
  @extend %my-select-btn-hover;
}

span {
  vertical-align: baseline;
  background-color: var(--main-bg-color);
}
.container{
  position: absolute;
  padding: 0;
  // z-index: 1;
}
.items {  
  position: relative;
  border-radius: 5px;
  padding: 15px 10px;
  background: rgb(122, 122, 122);
  overflow: auto;
  max-height: 20em;
  margin-top: 1em;
}


.container:before {
  content:"";
  position:relative;
  top:-8px; /* value = - border-top-width - border-bottom-width */
  right:-1em; /* controls horizontal position */
  bottom:auto;
  left:auto;
  border-style: solid;
  border-width:0 30px 30px; /* vary these values to change the angle of the vertex */
  border-color:rgb(122, 122, 122) transparent;  
}

.displayLeft{
  right:16em;
}
.displayLeft::before{
right:-60%;
}

.codeItems {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  padding: 3px;
}

.select:hover ~ .container .items,
.items:hover {
  background: #d5d5d5;
}
.select:hover ~ .container:before  {
  border-color: #d5d5d5 transparent;
}
.container:hover > .items{
  background: #d5d5d5;
}
.container:hover:before {
  border-color: #d5d5d5 transparent;
}


.codeItems:hover {
  background: #f1f1f1;
  box-shadow: 1px 1px 2px 5px rgba(53, 36, 36, 0.616);
  border-radius: 5px;
}
</style>