<template>
    <div>
        <main-nav-bar></main-nav-bar>
        <upper-nav-bar v-bind:style="{'margin-left':'320px'}">
            <li><a @click="contacts">Contact</a></li>
            <li><a @click="profile">Profile</a></li>
            <li><a @click="logOut">Log out</a></li>
        </upper-nav-bar>

        <add></add>

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
                this.$router.push('/')
            },
            contacts() {
                this.$router.push('/contacts')
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

</style>