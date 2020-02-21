<template>
  <div id="app">
    <HelloWorld/>
<!--    <MainNavBar/>-->
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  // import MainNavBar from './components/MainNavBar.vue'
  export default {
    name: 'app',
    components: {
      // NavBar,
      HelloWorld,
      // MainNavBar
    },
    data() {
      return {
        msg: 'Welcome!'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    height: 100vh;
    background: repeat;
  }
  /*body {*/

  /*  background: linear-gradient(white, cadetblue) 500px;*/

  /*}*/

</style>
