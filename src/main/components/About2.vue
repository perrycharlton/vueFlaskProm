<template lang='pug'>
    .container
        h1 Hello
</template>
<script>

export default {
    mounted() {
        this.$store.dispatch('main/updatePageTitle', "Welcome to the About page.")
        this.$store.dispatch('main/updateImage', "https://picsum.photos/1000/1000/?image=986")
    },
}
</script>
<style lang="scss" scoped>
.container{
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  display: grid;
  background-color: #0003;
  border-radius: 5px;
  padding: 10px;
}
</style>