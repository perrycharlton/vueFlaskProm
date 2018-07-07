<template lang="pug">
    div
        .form-group.form-inline
            label(for='username') User Name:
            input.form-control(ref='username' autocomplete='username' type='text')
        .form-group.form-inline
            label(for='current-password') Password:
            input.form-control(ref='password' autocomplete='current-password' type='password')
        
</template>

<style lang='scss' scoped>
    .form-group{
    display: grid;
    grid-column: 1;
    grid-template-columns: 4fr 6fr 1fr;
    grid-gap: 1em;  
    label{
      justify-self: right;
    }    
    input{
      justify-self: left;
    }
}

</style>