<template>
    <div class="container">
        <div class="row main">
            <div class="main-login main-center">
                <h5>Sign up .</h5>
                <form class="" method="post" action="#">

                    <div class="form-group">
                        <label for="Fname" class="cols-sm-2 control-label">First Name</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter Your First Name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Lname" class="cols-sm-2 control-label">Last Name</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter Your Last Name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="E-Mail" class="cols-sm-2 control-label">Your E-Mail</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter Your E-Mail">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="FPass" class="cols-sm-2 control-label">Your Password</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Enter Your Password">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="CPass" class="cols-sm-2 control-label">Confirm Password</label>
                        <div class="input">
                            <input type="password" class="form-control" placeholder="Confirm Your Password">
                        </div>
                    </div>

                    <div class="group">
                        <input type="submit" class="button" value="Register">
                    </div>

                </form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "RegisterForm"
    }
</script>

<style scoped>
    .main {
        margin: 50px 15px;
    }

    h1.title {
        font-size: 60px;
        font-family: 'Passion One', cursive;
        font-weight: 400;
    }

    hr {
        width: 10%;
        color: #fff;
    }

    .form-group {
        margin-bottom: 15px;
        border-radius: 90px;
    }

    label {
        margin-bottom: 15px;
    }

    input,
    input::-webkit-input-placeholder {
        font-size: 11px;
        padding-top: 3px;
    }

    .main-login {
        background-color: #fff;
        /* shadows and rounded borders */
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

    }

    .form-control {
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(255, 255, 255, .1);
        width: 100%;
        color: #fff;
        display: block;
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
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.31);

    }

    span.input-group-addon i {
        color: #009edf;
        font-size: 17px;
    }

    .form-control {
        border-radius: 50px;
    }

    .button {
        text-transform: uppercase;
        border-radius: 50px;
        width: 100%;
        color: #2c3e50;
        display: block;
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(44, 62, 80, 0.1);
    }

</style>