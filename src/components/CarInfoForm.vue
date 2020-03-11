<template>
    <div class="container">
        <br>
        <div class="row profile">

            <div class="col-md-3">
                <div class="profile-sidebar">

                    <div class="profile-usertitle-name">
                           Car Number: {{carNumber}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="profile-content">
                    <div class="container">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <h1>Reminders Table</h1>
                        <br>
                        <tytle class="mr-5">Type</tytle>
                        <tytle class="mr-5">Start Date</tytle>
                        <tytle class="mr-5">End Date </tytle>
                        <tytle class="mr-5">Note</tytle>
                        <tr v-for="(invoice, index) in invoice" :key="index">
                            <td scope="row" class="trashIconContainer">
                            </td>
                            <td>
                                <input class="form-control" type="text" v-model="invoice.Type"/>
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
                </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CarInfo",
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
            }
        }
    }
</script>

<style scoped>
    /* Profile container */
    .profile {
        margin: 20px 0;
    }

    /* Profile sidebar */
    .profile-sidebar {
        padding: 20px 0 10px 0;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
    }
    .profile-usertitle-name {
        color: #000000;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 7px;
    }
    .profile-content {
        padding: 20px;
        min-height: 460px;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
    }
    /*.container{*/
    /*    margin-left: 300px;*/
    /*    margin-bottom: 300px;*/
    /*     }*/

</style>