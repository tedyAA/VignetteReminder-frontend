<template>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <MainNavBar></MainNavBar>
            <div class="col-8 col-lg-9 px-0">
                <upper-nav-bar>
                    <li><a @click="contacts">Contact</a></li>
                    <li><a @click="profile">Profile</a></li>
                    <li><a @click="news">News</a></li>
                    <li class="out"><a @click="logOut">Log out</a></li>
                </upper-nav-bar>
               <car-table></car-table>
            </div>
        </div>
    </div>
</template>

<script>
    import MainNavBar from "../components/MainNavBar.vue";
    import CarTable from "../components/CarTable";
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
            news() {
                this.$router.push('/news')
            },

        },
        components: {
            MainNavBar,
            CarTable,
            UpperNavBar
        }
    }

</script>
<style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
        margin-left: 500px;
        margin-top: 100px;

    }

    td, th {
        border: 1px solid rgba(0, 0, 0, 0.98);
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #17a2b8;
    }
    .out{
        position: absolute;
        right: 0;
        background-color: #009edf;
    }
</style>

