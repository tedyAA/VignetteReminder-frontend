<template>
    <div class="container">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <tytle class="mr-5">Type</tytle>
        <tytle class="mr-5">Start Date</tytle>
        <tytle class="mr-5">End Date </tytle>
        <tytle>Note</tytle>
        <tr v-for="(invoice, index) in invoice" :key="index">
            <td scope="row" class="trashIconContainer">

                <i class="far fa-trash-alt" @click="deleteRow(k, invoice)"></i>
            </td>
            <td>

        <input class="driop" type="text" v-model="invoice.Type"/>
            </td>
            <td>

                <input class="form-control" type="text" v-model="invoice.SDate" />
            </td>
            <td>

                <input class="form-control" type="text" v-model="invoice.EDate" />
            </td>
            <td>

                <input class="form-control" type="text" v-model="invoice.Note" />
            </td>
        </tr>
        <button type='button' class="btn btn-info" @click="addNewRow">
            <i class="btn"></i>
            Add
        </button>
        <tytle class="mr-5"></tytle>
        <button type='button' class="btn btn-info" @click="deleteRow">
            <i class="btn"></i>
            Delete
        </button>


        </div>

</template>

<script>
    export default {
        name: "CarTable",
        data() {
            return {
                invoice_subtotal: 0,
                invoice_total: 0,
                invoice_tax: 5,
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


            deleteRow(invoice, index) {
                let idx = this.invoice.indexOf(index);
                // console.log(idx, index);
                if (idx > -1) {
                    this.invoice.splice(idx, 1);
                }
                // this.calculateTotal();
            },
            addNewRow() {
                this.invoice.push({
                    Type: '',
                    SDate: '',
                    EDate: '',
                    Note: '',
                });
            }
        }
    }
</script>

<style scoped>
   .container{
       /*margin-left: 400px;*/
       /*margin-top: 100px;*/
       width: 650px;
   }

</style>