<template>
    <div class="container">
        <h1 v-if="vehicles.length === 0">You have no saved vehicles. <router-link to="/add">add</router-link> one now?</h1>
        <div class="row">
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;" v-for="(vehicle, index) in vehicles" :key="vehicle.id">
                    <div class="card-body">
                        <h4>Vehicle registration number: {{vehicle.vehicle_reg_no}}</h4>
                        <h4 v-if="vehicle.frame_no">Frame number: {{vehicle.frame_no}}</h4>
                        <h4 v-if="vehicle.sticker_no">Sticker number: {{vehicle.sticker_no}}</h4>
                        <h5 class="card-title">{{vehicle.name}}</h5>
                        <router-link :to="/vehicles/+ vehicle.id"><button  class="btn btn-success mb-2">View Vehicle Reminders</button></router-link>
                        <button class="btn btn-danger" @click="removeVehicle(vehicle.id, index)">Remove Vehicle</button>
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
    // props:[
    //     'vehicle: []',
    // 'vehicle1: []',
    // 'vehicle2: []'
    // ],
    data() {
        return {
            fruits: ['СТ8337СР', 'СТ5257АР']
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
    computed: {
        vehicles() {
            return this.$store.getters['vehicles/vehicles'];
        }
    }
}
</script>

<style scoped>
    .card {
        margin-left: 300px;
        margin-top: 50px;
        font-family: Pacifico;
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