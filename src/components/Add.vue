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
                    <button class="button" type="submit">Add</button>
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
                sticker_no: ''

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
                // isUnique(value) {
                    // return new Promise((resolve => {
                    //
                    // }))

                // }
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


        }
    }
</script>

<style scoped>
    .main {
        padding: 40px 0;
    }

    .main input,
    .main input::-webkit-input-placeholder {
        font-size: 11px;
        padding-top: 3px;
    }

    .main-center {
        margin-top: 30px;
        margin: 0 auto;
        max-width: 400px;
        padding: 10px 40px;
        background: #009edf;
        color: #FFF;
        text-shadow: none;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31);
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);


    }

    span.input-group-addon i {
        color: #009edf;
        font-size: 17px;
    }

    .form-control {
        border: none;
        padding: 35px 40px;
        border-radius: 25px;
        background: rgba(175, 218, 235, 0.34);
        width: 100%;
        color: #fff;
        display: block;

    }

    .button {
        text-transform: uppercase;
        border-radius: 50px;
        width: 50%;
        display: block;
        border: none;
        padding: 15px 20px;
        background: rgba(175, 218, 235, 0.34);
        background: #1161ee;
        position: center;
        margin-left: 75px;

    }

    .button {

        color: #fff;
        display: block;
    }

</style>