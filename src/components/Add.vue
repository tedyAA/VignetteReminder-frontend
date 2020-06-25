<template>
    <div class="container">
        <div class="main">
            <div class="main-center">
                <form id=" AddCarForm" @submit.prevent="onSubmit">
                    <h5>Enter car info.</h5>
                    <form class="" method="post" action="#">
                        <div class="form-group">
                            <label for="carName" class="cols-sm-2 control-label">Enter Your Car Name</label>
                            <div class="input">
                                <input class="form-control" placeholder="Enter car Name" name="carN"
                                       v-model="name"
                                       v-model.trim="$v.carName.$model"
                                       :class="{'is-invalid':$v.carName.$error,
                                        'is-valid':!$v.carName.$invalid}">
                                <div class="invalid-feedback">
                                    <span v-if="!$v.carName.required">name is required</span>
                                    <span v-if="!$v.carName.minLength">{{$v.carName.$params.minLength.min}} characters minimum</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" :class="{ 'form-group--error': $v.carN.$error }">
                            <label for="carN" class="cols-sm-2 control-label">Enter Your Car Registration Number</label>
                            <div class="input">
                                <input class="form-control" placeholder="Enter car №" name="carN" id="vehicle_reg_no"
                                       v-model.trim="$v.carN.$model"
                                       v-model="vehicle_reg_no"
                                       :class="{'is-invalid':$v.carN.$error,
                                        'is-valid':!$v.carN.$invalid}">
                                <div class="invalid-feedback">
                                    <span v-if="!$v.carN.required">name is required</span>
                                    <span v-if="!$v.carN.minLength">{{$v.carN.$params.minLength.min}} characters minimum</span>
                                </div>

                            </div>
                        </div>
                        <div class="form-group">
                            <label for="VIN" class="cols-sm-2 ">Enter Car VIN</label>
                            <div class="input">
                                <input class="form-control" placeholder="Enter VIN number" name="VIN" id="frame"
                                       v-model="frame_no">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sticker" class="cols-sm-2 control-label">Enter Car Sticker Number</label>
                            <div class="input">
                                <input class="form-control" placeholder="Enter sticker N" name="Sticker" id="sticker"
                                       v-model="sticker_no">
                            </div>
                        </div>
                    </form>
                </form>
                <div class="group">
                    <button type="submit" class="btn btn-outline-success"
                            :disabled="corect" @click="onSubmit">Add
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'

    Vue.use(Vuelidate)

    import {required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: "Add",
        data() {
            return {
                carName: '',
                carN: '',
                VIN: '',
                sticker: '',

                name: '',
                vehicle_reg_no: '',
                frame_no: '',
                sticker_no: '',

                disabled: false

            }
        },
        validations: {
            carName: {
                required,
                minLength: minLength(3)
            },
            carN: {
                required,
                minLength: minLength(6),

            },
            VIN: {
                required
            },
            sticker: {
                required
            },

        },
        methods: {
            onSubmit() {
                const formData = {
                    name: this.name,
                    vehicle_reg_no: this.vehicle_reg_no,
                    // frame_no: this.frame_no,
                    // sticker_no: this.sticker_no
                }
                if (this.frame_no) {
                    formData.frame_no = this.frame_no;
                }
                if (this.sticker_no) {
                    formData.sticker_no = this.sticker_no;
                }
                console.log(formData);
                this.$store.dispatch('vehicles/addVehicle', formData);
            }


        },
        computed: {
            corect() {
                if (this.$v.carName.required && this.$v.carN.required) {
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>

<style scoped>

    .main-center {
        margin: 0 auto;
        max-width: 400px;
        padding: 10px 40px;
        border-radius: 8px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: white;
        margin-top: 50px;
    }

    .form-control {
        border: none;
        border-radius: 25px;
        background: rgba(35, 37, 38, 0.07);
        color: black;
        display: block;
        font-size: 16px;
        height: 50px;
    }

    .btn {
        width: 50%;
    }


</style>