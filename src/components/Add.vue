<template>
    <div class="container">
        <div class="main">
            <div class="main-center">
                <h5>Enter car info.</h5>
                <form class="" method="post" action="#">
                    <div class="form-group">
                        <label for="carN" class="cols-sm-2 control-label">Enter Your Car Registration Number</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter car №">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="VIN" class="cols-sm-2 control-label">Enter Car VIN</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter VIN number">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sticker" class="cols-sm-2 control-label">Enter Car Sticker Number</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter sticker N">
                        </div>
                    </div>
                    <div class="group">
                        <input type="submit" class="button" value="Submit">
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add"
    }
</script>

<style scoped>
    .main{
        padding: 40px 0;
    }
    .main input,
    .main input::-webkit-input-placeholder {
        font-size: 11px;
        padding-top: 3px;
    }
    .main-center{
        margin-top: 30px;
        margin: 0 auto;
        margin-left: 500px;
        max-width: 400px;
        padding: 10px 40px;
        background:#009edf;
        color: #FFF;
        text-shadow: none;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
        border-radius:30px;


    }
    span.input-group-addon i {
        color: #009edf;
        font-size: 17px;
    }
    .btn btn-primary{
        border-radius: 30px;
    }.form-control {
         border: none;
         padding: 15px 20px;
         border-radius: 25px;
         background: rgba(255, 255, 255, .1);
         width: 100%;
         color: #fff;
         display: block;
     } .button {
           text-transform: uppercase;
           border-radius: 50px;
           width: 50%;
           color: #2c3e50;
           display: block;
           border: none;
           padding: 15px 20px;
           border-radius: 25px;
           background: rgba(44, 62, 80, 0.1);
       }

</style>