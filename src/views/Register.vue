<template>
    <div class="RegisterForm">
        <upper-nav-bar>
            <li><a @click="logIn">Log In</a></li>
            <li><a @click="about">About us</a></li>
        </upper-nav-bar>
        <register-form></register-form>
    </div>
</template>

<script>
    import RegisterForm from "../components/RegisterForm.vue";
    import UpperNavBar from "../components/UpperNavBar";
    export default {
        methods: {
            home() {
                this.$router.push('/welcome')
            },
            logIn() {
                this.$router.push('/')
            },
            about() {
                this.$router.push('/about')
            },

        },
        components:{
            RegisterForm,
            UpperNavBar
        }
    }

</script>

<style scoped>

</style>