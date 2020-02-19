<template>
    <div class="MainNavBar">
        <main-nav-bar></main-nav-bar>
        <car-table></car-table>
        </div>
</template>

<script>
    import MainNavBar from "../components/MainNavBar.vue";
    import CarTable from "../components/CarTable";
    export default {
        components:{
            MainNavBar,
            CarTable
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

