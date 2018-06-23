<template lang="pug">
    div.dropdown(id="DisplayCourses") 
        button.btn.btn-secondary.dropdown-toggle(
            v-if="courses.length"
            type='button'
            id="dropdownMenuButton" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
            )  {{ text }}
            .dropdown-menu.courses(v-if="courses" aria-labelledby="dropdownMenuButton")
                .course(v-for="course in courses") 
                    a.dropdown-item(href='' :name="course.c_code" :tooltip="course.c_title") {{course.c_code}} - {{ course.c_title}}              
</template>

<script>

export default {  
    props:['courses', 'text'],
    data() {  
        return {
           
        }
    },
    methods: {

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