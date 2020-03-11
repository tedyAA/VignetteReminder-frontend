<template>
    <div>
        <upper-nav-bar v-bind:style="{'margin-left':'320px'}">
            <li><a @click="contacts">Contact</a></li>
            <li><a @click="profile">Profile</a></li>
            <li><a @click="logOut">Log out</a></li>
        </upper-nav-bar>
        <MainNavBar></MainNavBar>
        <car-info-form></car-info-form>
    </div>
</template>

<script>
    import CarInfoForm from "../components/CarInfoForm";
    import UpperNavBar from "../components/UpperNavBar";
    import MainNavBar from "../components/MainNavBar";

    export default {
        name: "CarInfo",
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
        components: {
            CarInfoForm,
            UpperNavBar,
            MainNavBar
        }
    }
</script>

<style scoped>

</style>