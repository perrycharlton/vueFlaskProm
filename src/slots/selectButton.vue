<template lang="pug">
  div
    .select.push_button.blue(@mouseover="showDisplay()" @mouseleave="hideDisplay()") {{ btnTitle }}
    .items(v-if='display' @mouseover="showDisplay()" @mouseleave="hideDisplay()" @click="hideDisplay()")    
      template(v-for="item in items")   
        slot(:item="item" )                     
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["items", "btnTitle"],
  methods: {
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
:root{
  --btnColor: rgba(51, 138, 70, 0.24);
}



.push_button {
	position: relative;
	width:220px;
	height:40px;
	text-align:center;
	color:#FFF;
	text-decoration:none;
	line-height:43px;
	font-family:'Oswald', Helvetica;
	display: block;
	margin: 30px;
}
.push_button:before {
	background:#f0f0f0;	
	border-radius:5px;
	box-shadow:0 1px 2px rgba(0, 0, 0, .5) inset, 0 1px 0 #FFF;
	position: absolute;
	content: "";
	left: -6px; right: -6px;
	top: -6px; bottom: -10px;
	z-index: -1;
}

.push_button:active:before{
	top: -11px;
	bottom: -5px;
	content: "";
}

.red {
	text-shadow:-1px -1px 0 #A84155;
	background: #D25068;
	border:1px solid #D25068;
	
	background-image:linear-gradient(to bottom, #F66C7B, #D25068);

	border-radius:5px;
	
	box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #AD4257, 0 4px 2px rgba(0, 0, 0, .5);
}

.red:hover {
	background: #F66C7B;
	background-image:linear-gradient(to top, #D25068, #F66C7B);
}

.blue {
	text-shadow:-1px -1px 0 #2C7982;
	background: #3EACBA;
	border:1px solid #379AA4;
	background-image:linear-gradient(to top, #48C6D4, #3EACBA);
	
	border-radius:5px;
	
	box-shadow:0 1px 0 rgba(255, 255, 255, .5) inset, 0 -1px 0 rgba(255, 255, 255, .1) inset, 0 4px 0 #338A94, 0 4px 2px rgba(0, 0, 0, .5);
}

.blue:hover {
	background: #48C6D4;
	background-image:linear-gradient(to top, #3EACBA, #48C6D4);
}
</style>