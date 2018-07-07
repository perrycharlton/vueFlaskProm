<template lang='pug'>
    .content(:style=`backgroungImage`)
        .container
            h1.capture {{ PageTitle }}
</template>
<script>
import { mapState } from "vuex";
export default {
    mounted() {
        this.$store.dispatch('main/updatePageTitle', "Welcome to the About page.")
        this.$store.dispatch('main/updateImage', "https://picsum.photos/1000/1000/?image=986")
    },
    computed: mapState("main", {
    PageTitle: "PageTitle",
    Image: "Image",
    backgroungImage() {
        return `background-image:url(${this.Image});`
    }
  }),
}
</script>
<style lang="scss" scoped>

.content {
  height: 100vh;
//   background-image: url(https://picsum.photos/1000/1000/?image=986);
  background-color: rgba(167, 166, 166, 0.616);
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
//   place-items: center;
}
.container{
    grid-column: 2;
    align-items: start;
}
h1{
    display: flex;
    text-transform: uppercase;
    width: 100%;
    font-size: 2.5em;
    margin-bottom: .2em;
    align-items: center;
    text-align: center;
    background: black;
    color: white;
    mix-blend-mode: multiply;
    border-radius: 5px;
}
h1::before, h1::after{
    flex: 1;
    color: white;
    font-size: 2em;
}
h1::before{
content:open-quote;
}
h1::after{
content:close-quote;
}

</style>