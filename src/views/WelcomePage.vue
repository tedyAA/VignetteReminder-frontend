<template>
    <div class="WelcomeForm">
        <upper-nav-bar>
<!--            <ul class="navbar-right">-->
<!--            <li><a href="#"> Sign Up</a></li>-->
<!--            <li><a href="#">Login</a></li>-->
<!--        </ul>-->
            <p>helloo</p>
        </upper-nav-bar>
        <welcome-form></welcome-form>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <news-window></news-window>
                </div>
                <div class="col-lg-6">
                    <package-window></package-window>
                </div>
            </div>
        </div>
<!--        <button class="move1" @click="logIn">Log in</button>-->
<!--        <button class="move1" @click="reg">Register</button>-->
    </div>
</template>

<script>
    import WelcomeForm from "../components/WelcomeForm.vue";
    import UpperNavBar from "../components/UpperNavBar";
    import NewsWindow from "../components/NewsWindow";
    import PackageWindow from "../components/PackageWindow";

    export default {
        components: {
            WelcomeForm,
            UpperNavBar,
            NewsWindow,
            PackageWindow
        },
        methods: {
            logIn() {
                this.$router.push('/')
            },
            reg() {
                this.$router.push('/register')
            }
        }
    }
</script>

<style>

    body {
        background-image: url("ay.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .move1 {
        background: #00CED1;
        color: #ffffff !important;
        display: inline-block;
        font-size: 15px;
        font-weight: 500;
        width: 120px;
        height: 70px;
        line-height: 0.8;
        padding: 18px 30px;
        text-transform: capitalize;
        border-radius: 1px;
        letter-spacing: 0.5px;
        border: 0px !important;
        cursor: pointer;
        border-radius: 100px;

    } .navbar-right {

           display: inline-block;
           margin-left: 800px;
       }
</style>