<template lang="pug">
    div(id="ProMon")
        button(@click="proMonData()") Get Users
        button(@click="getCourses()") Courses
        button(@click="getCourse()") Students
        input(type='text' @keyup="searchCourseCode($event.target.value)")
        div
            div(v-if="posts && posts.length")
                div(v-for="post of posts") 
                    p {{ post}}                
                    // img.thumbnail(:src='post.picture.medium')
    
</template>

<script>
// let isActive = true
import { updateCourseCodes, testData, getCourse, getCourses } from "../external/get-proMon-data"

export default {
    // name: 'proMon',
    data() {     
        return {
            isActive: true,
            posts: []
        }
    },
    methods: {
        async getCourse() { this.posts = await getCourse({code:'EA1032'})},
        async getCourses() { this.posts = await getCourses({code:'EA1032'})},
        async proMonData() { this.posts = await testData()},
        async searchCourseCode(data) { 
            let courseCode = {"prefixText":data,"count":30}
            this.posts = await updateCourseCodes(courseCode)
            },
        // async filterUsers(type) { this.posts = await this.$store.dispatch('userFilter', type)}
    },
    
}
</script >
<style lang='scss' scoped>
div.courses{
    padding: 1px;

    // .users {
    //     background-color: lightcoral;
    //     padding: 1em;
    //     display: grid;
    //     grid-gap: 1rem;
    //     grid-template-columns: 1fr 1fr 1fr 1fr;
    //     justify-self:center;
    //     user{    
    //         justify-self:center;
       
    //     }

    // }
}
</style>