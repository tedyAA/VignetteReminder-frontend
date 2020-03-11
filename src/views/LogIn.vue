<template>
    <div class="login">
        <upper-nav-bar>
            <li><a @click="logIn">Log In</a></li>
            <li><a @click="register">Register</a></li>
            <li><a @click="register">About us</a></li>
        </upper-nav-bar>
        <log-in-form/>

    </div>
</template>

<script>
    import LogInForm from "../components/LogInForm.vue";
    import UpperNavBar from "../components/UpperNavBar.vue";

    export default {
        name: "LogIn",
        methods: {
            home() {
                this.$router.push('/welcome')
            },
            logIn() {
                this.$router.push('/')
            },
            register() {
                this.$router.push('/register')
            },

        },
        components: {
            LogInForm,
            UpperNavBar
        }
    }

</script>
<style scoped>
    .login {

        background-image: url("ay.jpg");
        background-repeat: no-repeat;
        background-size: cover;

    }

</style>
