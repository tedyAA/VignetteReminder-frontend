<template>
  <div class = "login">
    <log-in-form/>
  </div>
</template>

<script>
  import LogInForm from "../components/LogInForm.vue";
  export default {
    name: "LogIn",
    components:{
      LogInForm
    }
  }

</script>
<style scoped>
  .login{

    background-image: url("ay.jpg");
    background-repeat: no-repeat;
    background-size: cover;

  }
</style>
