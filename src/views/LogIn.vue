<template>
  <div class = "login">
    <upper-nav-bar>
      <slot>
        <div clas="new">

        </div>
      </slot>
    </upper-nav-bar>

    <log-in-form/>

  </div>
</template>

<script>
  import LogInForm from "../components/LogInForm.vue";
  import UpperNavBar from "../components/UpperNavBar.vue";
  export default {
    name: "LogIn",
    components:{
      LogInForm,
      UpperNavBar
    }
  }

</script>
<style scoped>
  .login{

    background-image: url("ay.jpg");
    background-repeat: no-repeat;
    background-size: cover;

  }.new{

     }

</style>
