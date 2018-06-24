<template lang='pug'>
  h2 Need to put some content in here    
</template>
<script>

export default {
  mounted() {
        this.$store.dispatch('updatePageTitle', "This Page is for Home")
    }
    
}
</script>