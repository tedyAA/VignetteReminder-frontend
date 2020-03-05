<template>
    <div>
        <main-nav-bar></main-nav-bar>
        <upper-main-nav-bar></upper-main-nav-bar>
        <add></add>

    </div>
</template>

<script>
    import MainNavBar from "../components/MainNavBar.vue";
    import Add from "../components/Add.vue";
    import UpperMainNavBar from "../components/UpperMainNavBar";
    export default {
        components:{
            MainNavBar,
            Add,
            UpperMainNavBar
        }
    }
</script>

<style scoped>

</style>