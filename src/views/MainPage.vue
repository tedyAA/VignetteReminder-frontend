<template>
  <div class="MainNavBar">
    <main-nav-bar></main-nav-bar>
    <upper-nav-bar></upper-nav-bar>
      <car-card></car-card>
      <div class="nav">

      <ul>
        <li><a href="#about">Vehicles</a></li>
      </ul>
      </div>

<!--    <car-window></car-window>-->


  </div>
</template>

<script>
   import MainNavBar from "../components/MainNavBar.vue";
   import UpperNavBar from "../components/UpperNavBar";
   // import CarWindow from "../components/CarWindow";
   import CarCard from "../components/CarCard";

  export default {
    components:{
      MainNavBar,
      UpperNavBar,
      CarCard
      // CarWindow

    }
  }

</script>
<style scoped>
  body{

    background-image: url("ay.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  
  }.nav{
       /*margin-left: 150px;*/
     }

  </style>

