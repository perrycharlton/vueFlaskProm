<template lang='pug'>
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

</style>