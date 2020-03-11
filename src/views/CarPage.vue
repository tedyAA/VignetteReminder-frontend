<template>
    <div class="MainNavBar">
        <main-nav-bar></main-nav-bar>
        <upper-nav-bar v-bind:style="{'margin-left':'320px'}">
            <li><a @click="contacts">Contact</a></li>
            <li><a @click="profile">Profile</a></li>
            <li><a @click="logOut">Log out</a></li>
        </upper-nav-bar>
        <car-table></car-table>
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
</style>

