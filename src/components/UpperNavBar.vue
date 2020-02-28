<template>
    <!--    <div>-->
    <!--        <div class="container">-->
    <!--            <ul>-->
    <!--                <li class="link"><a class="active" @click="home">Home</a></li>-->
    <!--                <li class="link"><a @click="logIn">Log In</a></li>-->
    <!--                <li class="link"><a @click="home">Contact</a></li>-->
    <!--                <li class="link"><a @click="home">About Us</a></li>-->
    <!--            </ul>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <link rel="stylesheet" type="text/css" href="css/style.css">-->
    <!--    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">-->
    <ul>
        <li><a class="active" @click="home">Home</a></li>
        <li><a @click="contacts">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a @click="profile">Profile</a></li>


    </ul>
</template>

<script>
    export default {
        name: "UpperNavBar",
        methods: {
            home() {
                this.$router.push('/welcome')
            },
            logIn() {
                this.$router.push('/')
            },
            contacts() {
                this.$router.push('/contacts')
            },
            profile() {
                this.$router.push('/profile')
            }
        }
    }

</script>

<style scoped>

    ul {
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        overflow: hidden;
        background-color: #438acf;;

    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: #fff;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
    }

    li a:hover {
        background-color: #f2f2f2;
        color: #000;
    }

    .active {
        color: #fff;
        background-color: #009edf;
    }


</style>