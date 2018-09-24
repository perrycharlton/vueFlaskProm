<template lang='pug'>
  // .backImg(:style=`backgroungImage`)
  .content
    pageTitle.pageTitle
    router-view.view

</template>
<script>
import pageTitle from "../../slots/PageTitle.vue";
export default {
    components: {
        pageTitle
    },
}
</script>
<style lang="scss" scoped>

.content {
  display: grid;
  // grid-row-gap: .2em;
  grid-template-columns: 0.5fr 5fr 0.5fr;
  grid-template-rows: fit-content(600px) minmax(150px, auto);
}

.pageTitle {
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
}
.view{
  grid-column: 2 / span 1;
  // grid-row: 2 / span 1;
  // display: grid;
  background-color: rgba(65, 50, 50, 0.342);

  border-radius: 5px;
  padding: 0;
}

</style>