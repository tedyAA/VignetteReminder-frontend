<template>
    <div class="ff">
    <div class="tables">
        <div class="col col-lg-10">
            <h1>Details and reminders for vehicle with the id of .</h1>
            <h1>Sorry, we couldn't find a vehicle with the id of in your collection.</h1>
            <form>
                <div class="form-group">
                    <label for="vehicleName">Vehicle Name</label>
                    <input type="text" class="form-control" id="vehicleName">
                </div>
                <div class="form-group">
                    <label for="vehicleRegNo">Vehicle Registration Number</label>
                    <input type="text" class="form-control" id="vehicleRegNo">
                </div>
                <div class="form-group">
                    <label for="vehicleFrameNo">Vehicle Frame Number</label>
                    <input type="text" class="form-control" id="vehicleFrameNo">
                </div>
                <div class="form-group">
                    <label for="vehicleStickerNo">Vehicle Sticker Number</label>
                    <input type="text" class="form-control" id="vehicleStickerNo">
                </div>
                <button class="btn btn-success mt-2 mr-3 ">Save Vehicle Details</button>
                <button class="btn btn-primary mt-2">Edit Vehicle Details</button>
            </form>
        </div>
        <div class="col col-lg-10">
            <form>
                <div class="form-group">
                    <label for="reminderTitle">Reminder Title</label>
                    <input type="text" class="form-control" id="reminderTitle">
                </div>
                <div class="form-group">
                    <label for="changedOn">Changed On</label>
                    <input type="text" class="form-control" id="changedOn">
                </div>
                <div class="form-group">
                    <label for="dueChangeDate">Due Change Date</label>
                    <input type="text" class="form-control" id="dueChangeDate">
                </div>
                <div class="form-group">
                    <label for="note">Note</label>
                    <input type="text" class="form-control" id="note">
                </div>
                <button class="btn btn-success mt-2 mr-3">Save Reminder</button>
                <button class="btn btn-primary mt-2">Edit Reminder</button>
                <!--                <button v-else class="btn btn-primary mt-2" @click="editDetails()">Edit Vehicle Details</button>-->
            </form>
        </div>
        <div class="col col-lg-10">

            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reminder Title</th>
                    <th scope="col">Changed On</th>
                    <th scope="col">Due Change Date</th>
                    <th scope="col">Note</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(reminder, index) in reminders" :key="reminder.id">
                    <th scope="row">{{index + 1}}</th>
                    <td>{{reminder.title}}</td>
                    <td>{{reminder.changed_on}}</td>
                    <td>{{reminder.due_change_date}}</td>
                    <td>{{reminder.note}}</td>
                    <td>
                        <button class="btn btn-success">Edit Reminder</button>
                    </td>
                    <td>
                        <button class="btn btn-danger">Delete Reminder</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>
<script>

    export default {
        name: "Reminders",

        data() {
            return {
                id: '1',
                title: 'sd',
                changed_on: '12.12.20',
                due_change_date: '12.12.21',
                note: 'rrrtttt',
                index: 'dd'
            }
        }
    }
</script>
<style scoped>
    .col {

        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
        margin-top: 50px;
        margin-left: 120px;
    }
   .ff{
        background-image: url("../views/ay.jpg");
        background-repeat: repeat;
        background-size: 100% 100%;

    }
</style>