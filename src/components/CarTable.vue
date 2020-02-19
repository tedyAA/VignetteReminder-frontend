<template>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Reminder <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Start Date</th>
                    <th>Final Date</th>
                    <th>Note</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Vinette</td>
                    <td>22.02.2020</td>
                    <td>22.02.2021</td>
                    <td>
                        ala bala
                    </td>
                </tr>
                <tr>
                    <td>Vinette</td>
                    <td>19.10.2019</td>
                    <td>19.10.2020</td>
                    <td>
                        portokala
                    </td>
                </tr>
                <tr>
                    <td>Vinette</td>
                    <td>19.10.2019</td>
                    <td>19.10.2020</td>
                    <td>
                        portokala
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarTable"
    }
</script>

<style scoped>
    body {
        color: #a5f7ff;
        background: #F5F7FA;
        font-family: 'Open Sans', sans-serif;
    }
    .table-wrapper {
        width: 700px;
        margin: 30px auto;
        background: #fff;
        padding: 20px;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .table-title {
        padding-bottom: 10px;
        margin: 0 0 10px;
    }
    .table-title h2 {
        margin: 6px 0 0;
        font-size: 22px;
    }
    .table-title .add-new {
        float: right;
        height: 30px;
        font-weight: bold;
        font-size: 12px;
        text-shadow: none;
        min-width: 100px;
        border-radius: 50px;
        line-height: 13px;
    }
    .table-title .add-new i {
        margin-right: 4px;
    }
    table.table {
        table-layout: fixed;
    }
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
    }
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }
    table.table th:last-child {
        width: 100px;
    }
    table.table td a {
        cursor: pointer;
        display: inline-block;
        margin: 0 5px;
        min-width: 24px;
    }
    table.table td a.add {
        color: #27C46B;
    }
    table.table td a.edit {
        color: #FFC107;
    }
    table.table td a.delete {
        color: #E34724;
    }
    table.table td i {
        font-size: 19px;
    }
    table.table td a.add i {
        font-size: 24px;
        margin-right: -1px;
        position: relative;
        top: 3px;
    }
    table.table .form-control {
        height: 32px;
        line-height: 32px;
        box-shadow: none;
        border-radius: 2px;
    }
    table.table .form-control.error {
        border-color: #f50000;
    }
    table.table td .add {
        display: none;
    }

</style>