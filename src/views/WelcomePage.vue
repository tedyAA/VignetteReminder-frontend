<template>
    <div class="WelcomeForm">
        <upper-nav-bar>
            <li><a class="active" >Remind me</a></li>
            <li><a @click="aboutus">About us</a></li>
        </upper-nav-bar>
        <h3>Welcome to our webpage</h3>
        <h1>you drive, we remind</h1>
        <h3>get started</h3>

        <button class="btn btn-primary" @click="Login">Log In</button>
        <button class="btn btn-primary" @click="Register">Register</button>

    </div>
</template>

<script>

    import UpperNavBar from "../components/UpperNavBar";


    export default {
        components: {

            UpperNavBar,
        },
        methods: {
            aboutus() {
                this.$router.push('/about')
            },
            Login() {
                this.$router.push('/log')
            },
            Register() {
                this.$router.push('/register')
            },

        },
    }
</script>

<style scoped>

    h3 {
        margin-top: 60px;
        color: darkblue;
        font-family: Courier New;
        font-style: italic;
        font-weight: bolder;
        font-size: 40px;

    }

    h1 {
        margin-top: 60px;
        color: darkblue;
        font-family: Courier New;
        font-style: italic;
        font-weight: bolder;
        font-size: 60px;

    }

    .btn {
        position: relative;
        transition: .5s ease;
        top: 120px;
        border-radius: 8px;
        border: none;
        background: rgba(175, 218, 235, 0.34);
        background: #1161ee;
        width: 150px;
        height: 50px;
        margin-left:10px;
    }
    .active{
        background-color: #007bff8a;
    }
</style>