<template>
    <div class="container">
        <div class="main">
            <div class="main-center">
                <form id=" AddCarForm">
                    <h5>Enter car info.</h5>
                    <form class="" method="post" action="#">
<!--                        <div class="form-group">-->
<!--                            <label for="carN" class="cols-sm-2 control-label">Enter Your Vehicle Type</label>-->

<!--                                <div class="form-group">-->
<!--                                    <select class="form-group">-->
<!--                                        <option></option>-->
<!--                                        <option>Car</option>-->
<!--                                        <option>Motorcycle</option>-->
<!--                                        <option>Trailer</option>-->
<!--                                    </select>-->
<!--                                </div>-->
<!--                            </div>-->
                        <div class="form-group">
                            <label for="carN" class="cols-sm-2 control-label">Enter Your Car Registration Number</label>
                            <div class="input">
                                <input v-model="message" class="form-control" placeholder="Enter car №" name="carN">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="VIN" class="cols-sm-2 ">Enter Car VIN</label>
                            <div class="input">
                                <input v-model="message1" class="form-control" placeholder="Enter VIN number" name="VIN">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sticker" class="cols-sm-2 control-label">Enter Car Sticker Number</label>
                            <div class="input">
                                <input v-model="message2" class="form-control" placeholder="Enter sticker N" name="Sticker">
                            </div>
                        </div>
                    </form>
                </form>
                <div class="group">
                    <button class="button" @click="get">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        // data() {
        //     return {
        //         message:'',
        //         message1:'',
        //         message2:'',
        //         vehicle: [],
        //         vehicle1: [],
        //         vehicle2: []
        // }
        // },
        // methods: {
        //     get() {
        //
        //         this.vehicle.push(this.message);
        //         this.vehicle1.push(this.message1);
        //         this.vehicle2.push(this.message2);
        //         localStorage.setItem('vehicle', 'vehicle1');
        //         // document.writeln(this.vehicle)
        //         // document.writeln(this.vehicle1)
        //         // document.writeln(this.vehicle2)
        //         this.message='';
        //         this.message1='';
        //         this.message2='';
        //     }
        // }
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
        margin-left: 500px;
        max-width: 400px;
        padding: 10px 40px;
        background: #009edf;
        color: #FFF;
        text-shadow: none;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31);
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31);
        border-radius: 30px;


    }

    span.input-group-addon i {
        color: #009edf;
        font-size: 17px;
    }

    .button {
        border-radius: 30px;
        margin-left: 75px;
    }

    .form-control {
        border: none;
        padding: 15px 20px;
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
        color: #2c3e50;
        display: block;
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(17, 97, 238, 0.34);
        position: center;
    }

</style>