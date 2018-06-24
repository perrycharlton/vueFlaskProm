<template lang="pug">
    div(id="Users")
        button(@click="peopleData()") Get Users
        button(@click="peopleAll()") Get All
        button(@click="filterUsers('female')") Get Females
        button(@click="filterUsers('male')") Get Males
        button(@click="sortUsers('name.first')" :active='isActive') sort users
        button(@click="goHome") Home
        div.course
            .users(v-if="posts && posts.length")
                .user(v-for="post of posts") 
                    p {{ post.name.first}} {{ post.name.last }}                
                    img.thumbnail(:src='post.picture.medium')
    
</template>

<script>
// let isActive = true

export default {
    name: 'users',
    data() {     
        return {
            isActive: true,
            posts: [],

        }
    },
    methods: {
        goHome() { this.$router.push('/')},
        async peopleData() { this.posts = await this.$store.dispatch('getData')},
        
        async filterUsers(type) { this.posts = await this.$store.dispatch('userFilter', type)},

        async peopleAll() { this.posts = await this.$store.dispatch('resetCurrentState')},

        async sortUsers(object) { 
            let reverse = this.isActive
            this.posts = await this.$store.dispatch('sortUsersFirstName', {object, reverse})
            this.isActive = !this.isActive
            }
    },
    
}
</script >
<style lang='scss' scoped>
div.courses{
    padding: 1px;

    .users {
        background-color: lightcoral;
        padding: 1em;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-self:center;
        user{    
            justify-self:center;
       
        }

    }
}
</style>