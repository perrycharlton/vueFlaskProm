<template lang='pug'>
  .faq.page
    .list-title Text icons
      List(:items="listItems")          
        div(slot-scope="{item}") {{item.text}}
          i(:class="item.icon")


            
</template>

<script>
import List from "../../slots/List.vue";
export default {
  components: {
    List
  },

  mounted() {
    this.$store.dispatch("main/updatePageTitle", "This Page is for FAQ's");
  },
  data() {
    return {
      listItems: [
        { text: "First item", icon: "fa fa-user" },
        { text: "Second item", icon: "fa fa-copy" },
        { text: "Third item", icon: "fa fa-cut" }
      ]
    };
  }
};
</script>
<style lang="scss">
$primary-color: #66615b;
.list-item1 {
  height: 50px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  color: $primary-color;
}

.list-item2 {
  @extend .list-item1;
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease-out;
    background-color: $primary-color;
    color: white;
    cursor: pointer;
  }
}
.list-separator {
  margin-top: 50px;
}
.list-title {
  grid-column: 2;
  color: $primary-color;
  font-size: 18px;
  padding-left: 20px;
  margin-bottom: 10px;
}
</style>