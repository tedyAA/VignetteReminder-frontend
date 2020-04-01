<template>
    <div class="container-fluid h-100">
        <div class="row h-100">
                <MainNavBar></MainNavBar>
            <div class="col-8 col-lg-9 px-0">
                <upper-nav-bar>
                    <li><a @click="contacts">Contact</a></li>
                    <li><a @click="profile">Profile</a></li>
                    <li class="out"><a @click="logOut">Log out</a></li>
                </upper-nav-bar>
                <car-table></car-table>
            </div>
        </div>
    </div>
</template>

<script>
  import CarTable from "../components/CarTable";
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
            CarTable,
            UpperNavBar,
            MainNavBar
        }
    }
</script>

<style scoped>
    .out{
        position: absolute;
        right: 0;
        background-color: #009edf;
    }
</style>