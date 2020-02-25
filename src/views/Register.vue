<template>
    <div class="RegisterForm">
        <upper-nav-bar></upper-nav-bar>
        <register-form></register-form>
    </div>
</template>

<script>
    import RegisterForm from "../components/RegisterForm.vue";
    import UpperNavBar from "../components/UpperNavBar";
    export default {
        components:{
            RegisterForm,
            UpperNavBar
        }
    }
</script>

<style scoped>

</style>