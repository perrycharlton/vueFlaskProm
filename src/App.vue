<template lang='pug'>
  .pageTop
    myHeader
    .mainContainer
      home
</template>

<script>
import home from './pages/Home.vue'
import myHeader from './components/Header.vue'

export default {
  components: {  
    home, 
    myHeader
  }
}
</script>

<style lang="scss">
 body {
  background: rgb(206, 147, 147);
  font-family: Arial, Helvetica, sans-serif;
}
html, body {
  height: calc(100% - 50px);
}
.pageTop{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 20px 1fr 20px;
  .mainContainer {
    grid-column:2;
  }
}
</style>