<template>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <MainNavBar></MainNavBar>
            <div class="col-8 col-lg-10 px-0">
                <upper-nav-bar>
                    <li><a @click="contacts">Contact</a></li>
                    <li><a @click="profile">Profile</a></li>
                    <li><a @click="news">News</a></li>
                    <li class="out"><a @click="logOut">Log out</a></li>
                </upper-nav-bar>
                <add></add>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNavBar from "../components/MainNavBar.vue";
    import Add from "../components/Add.vue";
    import UpperNavBar from "../components/UpperNavBar";

    export default {
        methods: {
            profile() {
                this.$router.push('/profile')
            },
            logOut() {
                this.$router.push('/log')
            },
            contacts() {
                this.$router.push('/contacts')
            },
            news() {
                this.$router.push('/news')
            },

        },
        components:{
            MainNavBar,
            Add,
            UpperNavBar

        }
    }
</script>

<style scoped>
    .out{
        position: absolute;
        right: 0;
        /*background-color: #009edf;*/
    }
</style>