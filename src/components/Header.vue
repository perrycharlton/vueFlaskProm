<template lang='pug'>
    .header
        h1 {{ PageHeader }}
</template>

<script>
export default {
    computed: {
        PageHeader() {
            return this.$store.getters.getPageTitle
        }
    },
}
</script>
<style lang="scss" scoped>
.header {
    grid-column: 1 / 3;
    align-self: center;
    justify-self: center;
    font-size: 2em;
    h1{
        padding-top: 10px;
    }
  }
</style>
