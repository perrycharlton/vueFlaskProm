<template lang='pug'>
  .faq.page
    h1
    .msg {{ Title }}

</template>

<script>

export default {
  mounted() {
        this.$store.dispatch('updatePageTitle', "This Page is for FAQ's")
    },
    computed: {
      Title() {
            return this.$store.getters.PageTitle
        },
    }
}
</script>