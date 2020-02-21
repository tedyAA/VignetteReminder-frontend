<template>
  <div class="MainNavBar">
    <main-nav-bar></main-nav-bar>
<!--    <car-window></car-window>-->


  </div>
</template>

<script>
   import MainNavBar from "../components/MainNavBar.vue";
   // import CarWindow from "../components/CarWindow";

  export default {
    components:{
      MainNavBar,
      // CarWindow

    }
  }

</script>
<style scoped>
  body{

    background-image: url("ay.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  
  }
  </style>

