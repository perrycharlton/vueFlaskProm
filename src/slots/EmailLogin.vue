<template lang="pug">
    div
        .form-group.form-inline
            label(for='email') Email:
            input.form-control(id='email' ref='email' autocomplete='Email' type='email')
        .form-group.form-inline
            label(for='current-password') Password:
            input.form-control(id='current-password' ref='password' autocomplete='current-password' type='password')
        // .space
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