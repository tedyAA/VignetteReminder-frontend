<template>
    <div>
        <upper-nav-bar>
            <li><a class="active" >Remind me</a></li>
            <li><a @click="Login">Log In</a></li>
            <li><a @click="Register">Register</a></li>
        </upper-nav-bar>
        <div class="wrapper">
            <div class="aboutus-secktion paddingTB60">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ">
                            <h1 class="strong mt-5">Who we are and<br>what we do</h1>
                            <p class="lead ">This is the world's leading portal for<br>easy and quick </p>
                        </div>
                        <div class="col-md-6">
                            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
                                Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
                                Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem
                                ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
                        </div>
                    </div>
                    <div class="border"></div>
                    <div class="row">

                        <div class="col-md-6">
                            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
                                Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.
                                Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem
                                ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
                        </div>
                        <div class="col-md-6">
                            <h1 class="strong mt-5">We are who we are<br>and we do what we want to</h1>
                            <p class="lead">Because we can<br>and we are doing it </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import UpperNavBar from "../components/UpperNavBar";

    export default {
        name: "AboutUs",
        components: {
            UpperNavBar
        },
        methods: {
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
    .wrapper {
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
        max-width: 1300px;
        /*width: 150px;*/
        height: 500px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: white;
        opacity: inherit;
        color:black;

    }
    .active{
        background-color: #007bff8a;
    }

</style>