<template lang='pug'>
    .about.page
        h1 This is the about page
        p Aute reprehenderit minim commodo cupidatat sit commodo ut ipsum mollit aute culpa.
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch('updatePageTitle', "This Page is for About")
    }    
}
</script>
