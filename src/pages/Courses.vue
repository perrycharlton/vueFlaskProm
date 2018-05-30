<template lang="pug">
    .courses.page 
        .title {{title}}
        section.courses        
            p {{preview}}
        section.promon
            ProMon
</template>

<script>


import  ProMon from "../components/ProMon.vue";

export default {
    data() {
        return {
            title: "Hello from Perry",
            preview: "Some random text",
        }
    },
    
    components: {
        ProMon
    },
    computed: {
        beforeCreate() {
            console.log('This gets created first')
        }
    }
}
</script >

 <style lang='scss' scoped>
 
.title {
    display: flex;
    justify-content: center;
    align-self: center;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid rgb(97, 87, 185);
    box-shadow: 0 2px 2px rgb(93, 89, 148);
}
 div {
    justify-content: center;
    align-self: center;
    color: red;
} 
</style>
