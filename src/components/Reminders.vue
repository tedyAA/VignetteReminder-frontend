<template>
    <div>
        <upper-main-nav-bar/>
        <div class="container">
            <h1 v-if="vehicle">Details and reminders for vehicle with the id of {{this.$route.params.id}}.</h1>
            <h1 v-else>Sorry, we couldn't find a vehicle with the id of {{this.$route.params.id}} in your collection.</h1>
            <form v-if="vehicle" @submit.prevent>
                <div class="form-group">
                    <label for="vehicleName">Vehicle Name</label>
                    <input type="text" class="form-control" id="vehicleName"  v-model="vehicle.name" :disabled="!edit">
                </div>
                <div class="form-group">
                    <label for="vehicleRegNo">Vehicle Registration Number</label>
                    <input type="text" class="form-control" id="vehicleRegNo" v-model="vehicle.vehicle_reg_no" :disabled="!edit">
                </div>
                <div class="form-group">
                    <label for="vehicleFrameNo">Vehicle Frame Number</label>
                    <input type="text" class="form-control" id="vehicleFrameNo" v-model="vehicle.frame_no" :disabled="!edit">
                </div>
                <div class="form-group">
                    <label for="vehicleStickerNo">Vehicle Sticker Number</label>
                    <input type="text" class="form-control" id="vehicleStickerNo" v-model="vehicle.sticker_no" :disabled="!edit">
                </div>
                <button v-if="edit" class="btn btn-success mt-2" @click="saveEditedDetails">Save Vehicle Details</button>
                <button v-else class="btn btn-primary mt-2" @click="editDetails()">Edit Vehicle Details</button>
            </form>
            <!--            <h1 class="mt-5">Vehicle Reminders</h1>-->
            <!--            REMINDERS TEMPLATE SECTION -->
            <h1 v-if="reminders.length === 0 && vehicle" class="mt-5">You have no reminders yet set for this vehicle! Use the form below to add some right now!</h1>
            <form v-if="vehicle" class="my-5" @submit.prevent>
                <div class="form-group">
                    <label for="reminderTitle">Reminder Title</label>
                    <input type="text" class="form-control" id="reminderTitle"  v-model="title">
                </div>
                <div class="form-group">
                    <label for="changedOn">Changed On</label>
                    <input type="text" class="form-control" id="changedOn" v-model="changed_on">
                </div>
                <div class="form-group">
                    <label for="dueChangeDate">Due Change Date</label>
                    <input type="text" class="form-control" id="dueChangeDate" v-model="due_change_date">
                </div>
                <div class="form-group">
                    <label for="note">Note</label>
                    <input type="text" class="form-control" id="note" v-model="note">
                </div>
                <button v-if="!reminderEdit" class="btn btn-primary mt-2" @click="addReminder">Save Reminder</button>
                <button v-else class="btn btn-success mt-2" @click="saveEditedReminderDetails()">Edit Reminder</button>
                <!--                <button v-else class="btn btn-primary mt-2" @click="editDetails()">Edit Vehicle Details</button>-->
            </form>
            <table v-if="reminders.length > 0" class="table">
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
                        <button class="btn btn-success" @click="editReminderDetails(reminder, index)">Edit Reminder</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="removeReminder(reminder.id, index)">Delete Reminder</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import UpperMainNavBar from "./UpperMainNavBar";
    export default {
        name: "Reminders",
        components: {UpperMainNavBar},
        data() {
            return {
                // vehicleName: this.vehicle.name,
                // vehicleRegNo: this.vehicle_reg_no,
                // vehicleVinNo: this.vehicle.vignette_reg_no,
                // vehicleFrameNo: this.vehicle.frame_no,
                // vehicleStickerNo: this.vehicle.sticker_no
                // edit: false
                id: '',
                title: '',
                changed_on: '',
                due_change_date: '',
                note: '',
                index: ''
            }
        },
        methods: {
            addReminder() {
                const reminderFormData = {
                    vehicle_id: this.$route.params.id,
                    title: this.title,
                    changed_on: this.changed_on,
                    due_change_date: this.due_change_date,
                    // note: this.note
                };
                if (this.note !== "") {
                    reminderFormData.note = this.note;
                }
                console.log(reminderFormData);
                this.$store.dispatch('reminders/addReminder', reminderFormData);
                this.title = '';
                this.changed_on = '';
                this.due_change_date = '';
                this.note = '';
            },
            editDetails() {
                this.$store.commit('vehicles/vehicleToggleEdit');
            },
            saveEditedDetails() {
                const formData = {
                    name: this.vehicle.name,
                    vehicle_reg_no: this.vehicle.vehicle_reg_no,
                    // frame_no: this.vehicle.frame_no,
                    // sticker_no: this.vehicle.sticker_no,
                    vehicleId: this.$route.params.id
                };
                if (this.vehicle.frame_no) {
                    formData.frame_no = this.vehicle.frame_no;
                }
                if (this.vehicle.sticker_no) {
                    formData.sticker_no = this.vehicle.sticker_no;
                }
                console.log(formData);
                this.$store.dispatch('vehicles/saveEditedDetails', formData);
            },
            editReminderDetails(reminder, index) {
                this.id = reminder.id;
                this.title = reminder.title;
                this.changed_on = reminder.changed_on;
                this.due_change_date = reminder.due_change_date;
                this.note = reminder.note;
                this.index = index;
                this.$store.commit('reminders/reminderToggleEdit');
            },
            saveEditedReminderDetails() {
                const reminderFormData = {
                    title: this.title,
                    changed_on: this.changed_on,
                    due_change_date: this.due_change_date,
                    // note: this.note,
                    vehicle_id: this.$route.params.id,
                    id: this.id,
                    index: this.index
                };
                if (this.note !== "") {
                    reminderFormData.note = this.note;
                }
                console.log(reminderFormData);
                this.$store.dispatch('reminders/saveEditedReminderDetails', reminderFormData);
                this.title = '';
                this.changed_on = '';
                this.due_change_date = '';
                this.note = '';
            },
            removeReminder(reminderId, index) {
                if (confirm('Are you sure you want to delete this reminder from your saved reminders for this vehicle?')) {
                    this.$store.dispatch('reminders/removeReminder', {reminderId, index});
                } else {
                    return;
                }
            }
        },
        computed: {
            vehicle() {
                return this.$store.getters['vehicles/singleVehicle'];
            },
            edit() {
                return this.$store.getters['vehicles/edit'];
            },
            reminders() {
                return this.$store.getters['reminders/reminders'];
            },
            reminderEdit() {
                return this.$store.getters['reminders/reminderEdit'];
            }
        },
        created() {
            // const expirationDate = localStorage.getItem('expirationDate');
            // const now = new Date();
            // if (Date.parse(now) <= Date.parse(expirationDate)) {
            this.$store.dispatch('reminders/initReminders', this.$route.params.id);
            this.$store.dispatch('vehicles/initSingleVehicle', this.$route.params.id);
            // } else {
            //     this.$store.commit('auth/logout');
            // }
        }
    }
</script>
<style scoped>
    .card {
        margin-left: 300px;
        margin-top: 50px;
        font-family: Pacifico, sans-serif;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
    }
    /*.container {*/
    /*    display: table;*/
    /*    clear: both;*/
    /*    float: left;*/
    /*}*/
</style>