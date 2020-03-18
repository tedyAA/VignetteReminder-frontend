<template>
  <div id="app">
    <HelloWorld/>
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
    },
    created() {
      this.$store.dispatch('auth/tryAutoLogin');
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;


    background-image: url("./views/ay.jpg");
    background-repeat: repeat;
    background-size: 100% 100%;
    height: 100vh;
    margin: 0px auto 0;
    position: relative;
  }


</style>
