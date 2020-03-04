<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-xs-12 col-sm-12">
                <div class="well">
                    <img src="http://www.cabkc.in/resource/Image/img-mail-contact.jpg" height="100px;" width="100px;"
                         class="center-block img-responsive img-rounded img-circle img-thumbnail">
                    <div class="well-header">
                        <h1 class="text-center"><strong> Contact Form </strong></h1>
                        <hr/>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-user"></i>
                                    </div>
                                    <input type="text" name="cname" placeholder="Enter Your Name" required=""
                                           class="form-control">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-envelope"></i>
                                    </div>
                                    <input type="email" required="" class="form-control" name="cemail"
                                           placeholder="Enter Email">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="glyphicon glyphicon-comment"></i>
                                    </div>
                                    <textarea class="form-control" placeholder="Enter Message Here..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                            <button class="btn btn-block btn-lg btn-info"> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUsForm"
    }
</script>

<style scoped>
    .well {
        padding: 35px;
        padding-left: 30px;
        margin: 3% auto;
        width: 450px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
        border-radius: 40px;
    }

    .btn {
        background-color: #1161ee;
        border-radius: 25px;
    }

    .form-control {
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(175, 218, 235, 0.34);

    }

</style>