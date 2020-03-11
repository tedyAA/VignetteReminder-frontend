<template>
    <ul class="container">
<!--        w-100 d-flex justify-content-between-->
        <li><a class="active" @click="home">Home</a></li>
        <li><a @click="contacts">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a @click="profile">Profile</a></li>

    </ul>
</template>

<script>
    export default {
        name: "UpperMainNavBar",
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
        /*margin: 0px;*/
        list-style-type: none;
        overflow: hidden;
        background-color: #438acf;
        width: 76.5%;
        /*margin-left:320px;*/

    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: #000000;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
    }

    li a:hover {
        background-color: #009edf;
        color: #000;
    }

    .active {
        color: #009edf;
        background-color: #009edf;
    }
</style>