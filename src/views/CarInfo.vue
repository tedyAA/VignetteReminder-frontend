<template>
    <div class="container-fluid h-100">
        <div class="row h-100">
                <MainNavBar></MainNavBar>
            <div class="col-8 col-lg-9 px-0">
                <upper-nav-bar>
                    <li><a @click="contacts">Contact</a></li>
                    <li><a @click="profile">Profile</a></li>
                    <li><a @click="logOut">Log out</a></li>
                </upper-nav-bar>
                <car-info-form></car-info-form>
            </div>
        </div>
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