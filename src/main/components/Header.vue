<template lang='pug'>
    .header
        h1 {{ PageHeader }}
        h3 Status: {{ Status }}
        div(:class="LoggedIn")
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState ('main', {
            PageHeader: 'PageTitle',
        }),
        ...mapState ('admin', {
            User: 'User',
            LoggedIn: state => { 
                return {active: state.Status}
            }
        }),
        ...mapState('promonitor', {
            Status: 'Status'
        })
    }
}
</script>
<style lang="scss" scoped>
.header {
    grid-column: 1 / 3;
    align-self: center;
    justify-self: center;
    font-size: 2em;
    .active {
        background-color: rgb(25, 43, 94);
        color: rgb(246, 246, 246);
    }
    h1{
        padding-top: 10px;
    }
  }
</style>
