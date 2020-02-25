<template>
    <div>
        <main-nav-bar></main-nav-bar>
        <upper-nav-bar></upper-nav-bar>
        <add></add>

    </div>
</template>

<script>
    import MainNavBar from "../components/MainNavBar.vue";
    import Add from "../components/Add.vue";
    import UpperNavBar from "../components/UpperNavBar";
    export default {
        components:{
            MainNavBar,
            Add,
            UpperNavBar
        }
    }
</script>

<style scoped>

</style>