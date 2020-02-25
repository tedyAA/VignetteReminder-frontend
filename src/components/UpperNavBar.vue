<template>
    <div>
      <div class="container">
          <ul>
              <li><a class="active" href="#home">Home</a></li>
              <li><a href="#news">Dashboard</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About Us</a></li>
          </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UpperNavBar"
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color:#438acf;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 15px 99px;
        text-decoration: none;
    }

    li a:hover {
        background-color:#009edf ;
    }.container{
        /*margin-left: 320px;*/

         }
</style>