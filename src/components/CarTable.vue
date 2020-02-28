<template>
    <div class="container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <tytle class="mr-5">Type</tytle>
        <tytle class="mr-5">Start Date</tytle>
        <tytle class="mr-5">End Date </tytle>
        <tytle class="mr-5">Note</tytle>
        <tr v-for="(invoice, index) in invoice" :key="index">
            <td scope="row" class="trashIconContainer">

            </td>
            <td>

        <input class="form-control" type="text" v-model="invoice.Type" />

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
            <td>
                <i class="far fa-trash-alt" @click="deleteRow(index)"></i>
            </td>
        </tr>
        <button type='button' class="btn btn-info" @click="addNewRow">
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
                // addToData({
                //
                // });
                }
            }

    }
</script>

<style scoped>
   .container{
       margin-left: 400px;
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