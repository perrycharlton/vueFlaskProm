<template lang="pug">
    .container
        .form-group.form-inline
            label(for='username') User Name:
            input.form-control(ref='username' autocomplete='username' type='text')
        .form-group.form-inline
            label(for='current-password') Password:
            input.form-control(ref='password' autocomplete='current-password' type='password')
        
</template>

<style lang='scss' scoped>
.container {
    display: grid;
    grid-gap: 2em;
}
    .form-group{
    display: grid;
    grid-column: 1;
    grid-template-columns: 4fr 6fr 1fr;
    grid-gap: 10px;  
    label{
        color: white;
      justify-self: right;
      font-size: 1.5em;
      height: 32px;

    }    
    input{
      justify-self: left;
      padding: 10px 5px;
      border-radius: 5px;
    }
}

</style>