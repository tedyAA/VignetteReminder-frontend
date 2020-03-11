<template>
    <div class="container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <tytle class="mr-5">Type</tytle>
        <tytle class="mr-5">Start Date</tytle>
        <tytle class="mr-5">End Date </tytle>
        <tytle class="mr-5">Note</tytle>
     <div v-for="(invoice, index) in invoice" :key="index">

                <input class="col-sm-2" type="text" id=type v-model="invoice.Type" />

                <input class="col-sm-2" type="text" id=sDate v-model="invoice.SDate" />

                <input class="col-sm-2" type="text" id= eDate v-model="invoice.EDate" />

                <input class="col-sm-2" type="text" id=note v-model="invoice.Note" />

                <i class="far fa-trash-alt col-sm-2" @click="deleteRow(index)"></i>
     </div>
        <button type='button' cass="btn btn-info" @click="addNewRow">
            <i class="btn"></i>
            Add
        </button>
        <tytle class="mr-5"></tytle>
    </div>

</template>
<script>

    export default {
        name: "CarTable",
        data() {
            return {
                invoice: [{
                    Type: '',
                    SDate: '',
                    EDate: '',
                    Note: '',
                }]
            }
        },
        methods: {
            saveInvoice() {
                // console.log(JSON.stringify(this.invoice));
            },
            deleteRow(index) {
                this.invoice.splice(index,1)
            },
            addNewRow() {
                this.invoice.push({
                    Type: '',
                    SDate: '',
                    EDate: '',
                    Note: '',
                });
                let inputs = document.getElementsByTagName("input");
                console.log(inputs.length/4)
                for (let i = 0; i < inputs.length/4; i++) {

                document.getElementById("type").disabled = true;
                document.getElementById("sDate").disabled = true;
                document.getElementById("eDate").disabled = true;
                document.getElementById("note").disabled = true;
                }
            }
        }
    }
</script>
<style scoped>
    .container{
        margin-top: 30px;
        width: 650px;
    }
    .mr-5{
        color: black;
        text-align: center;
        text-decoration: none;
        font-size: 28px;
        font-family: "Amiri Quran";
    }.btn btn-info{
     }
</style>