<template>
    <div class="container">
        <h1 v-if="vehicles.length === 0">You have no saved vehicles.
            <router-link to="/add">add</router-link>
            one now?
        </h1>
        <div class="row">
            <div class="xs12 sm6 md4 lg3" style="width: 18rem;" v-for="(vehicle, index) in vehicles" :key="vehicle.id">
                <div class="card-body">
                    <div class="card border-info shadow text-info p-3 my-card">
                        <span class="fa fa-car" aria-hidden="true"></span></div>
                    <h4>Vehicle registration number: {{vehicle.vehicle_reg_no}}</h4>
                    <h5 class="card-title">{{vehicle.name}}</h5>
                    <div class="row">
                        <router-link :to="/vehicles/+ vehicle.id">
                            <button class="btn btn-outline-success mb-2 col-sm">View Reminders</button>
                        </router-link>
                        <div class="col col-lg-2">
                            <button class="btn btn-outline-danger" @click="removeVehicle(vehicle.id, index)">Remove Vehicle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="sendToAddPage" class="btn btn-success mt-5">+ Add Vehicle</button>
    </div>

</template>

<script>
    // muhite pishat kod
    export default {
        name: "CarCard",
        data() {
            return {
                name: '',
                vehicle_reg_no: '',
                frame_no: '',
                sticker_no: '',
                vehicles: '',
            }
        },
        methods: {
            removeVehicle(vehicleId, index) {
                if (confirm('Are you sure you want to delete this vehicle from your saved vehicles?')) {
                    this.$store.dispatch('vehicles/removeVehicle', {vehicleId, index});
                } else {
                    return;
                }
            },
            sendToAddPage() {
                this.$router.push('/add');
            }
        },
        // computed: {
        //     vehicles() {
        //         return this.$store.getters['vehicles/vehicles'];
        //     }
        // }
    }
</script>

<style scoped>
    .xs12 {
        margin-left: 65px;
        margin-top: 30px;
        font-family: Pacifico;
        border-radius: 40px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color:white;
        color:black;
    }

    .my-card {
        border-radius: 50%;
        width: 50px;
        margin-left: 100px;
    }

    .btn {
        border-radius: 30px;
    }
</style>
