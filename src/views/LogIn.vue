<template>
    <div class="login">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <upper-nav-bar>
            <li><a class="active" >Remind me</a></li>
            <li><a @click="register">Register</a></li>
            <li><a @click="about">About us</a></li>
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
            register() {
                this.$router.push('/register')
            },
            about() {
                this.$router.push('/about')
            },

        },
        components: {
            LogInForm,
            UpperNavBar
        }
    }

</script>
<style scoped>
.active{
    background-color: #007bff8a;
}
</style>
