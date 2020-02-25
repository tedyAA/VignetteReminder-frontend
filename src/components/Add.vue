<template>
    <div class="container">
        <div class="main">
            <div class="main-center">
                <h5>Enter car info.</h5>
                <form class="" method="post" action="#">

                    <div class="form-group">
                        <label for="carN">Enter Your Car Registration Number</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                            <input type="text" class="form-control" name="carN" id="carN"  placeholder="Enter car №"/>
                        </div>
                    </div>

                    <div class="group">
                        <label for="VIN" >Enter Car VIN</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                            <input type="text" class="form-control" name="VIN" placeholder="Enter VIN number"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="sticker">Enter Car Sticker Number</label>
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input type="password" class="form-control" name="sticker" placeholder="Enter sticker N"/>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary">Submit</button>

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
    }

</style>