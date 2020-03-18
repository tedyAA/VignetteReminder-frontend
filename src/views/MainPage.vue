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
                <car-card></car-card>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNavBar from "../components/MainNavBar.vue";
    import UpperNavBar from "../components/UpperNavBar";
    // import CarWindow from "../components/CarWindow";
    import CarCard from "../components/CarCard";
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
        components: {
            MainNavBar,
            UpperNavBar,
            CarCard
            // CarWindow
        }
    }
</script>
<style scoped>

</style>