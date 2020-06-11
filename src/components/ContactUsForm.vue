1.051<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-xs-12 col-sm-12">
                <div class="well">
                    <img src="http://www.cabkc.in/resource/Image/img-mail-contact.jpg" height="100px;" width="100px;"
                         class="center-block img-responsive img-rounded img-circle img-thumbnail">
                    <div class="well-header">
                        <h1 class="text-center"><strong> Contact Us </strong></h1>
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
                                           class="form-control"
                                           v-model.trim="$v.name.$model"
                                           :class="{'is-invalid' :$v.name.$error,
                                   'is-valid' :!$v.name.$invalid}" >
                                    <div class="invalid-feedback">Name must be at least {{$v.name.$params.minLength.min}}
                                        characters
                                    </div>
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
                                           placeholder="Enter Email"
                                           v-model.trim="$v.eMail.$model"
                                           :class="{'is-invalid' :$v.eMail.$error,
                                    'is-valid':!$v.eMail.$invalid}">
                                    <div class="invalid-feedback">
                                        <span v-if="!$v.eMail.required">e-mail is required</span>
                                        <span v-if="!$v.eMail.isUnique">this e-mail is invalid or already taken</span>
                                    </div>

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
                                    <textarea class="form-control" placeholder="Enter Message Here..."
                                              v-model.trim="$v.message.$model"
                                              :class="{'is-invalid' :$v.message.$error,
                                   'is-valid' :!$v.message.$invalid}">
                            <div class="invalid-feedback">Message must be between 3-300 characters</div></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-sm-12">
                            <button class="btn btn-block btn-lg btn-info" :disabled="corect"> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'

    Vue.use(Vuelidate)

    import {required, email, minLength, maxLength} from 'vuelidate/lib/validators'
    export default {
        name: "ContactUsForm",
        data() {
            return {
                name: '',
                eMail: '',
                message: '',
                disabled: false
            }
        },
        validations: {
            name: {
                required,
                minLength: minLength(3)
            },
            eMail: {
                required,
                email,
                isUnique(value) {
                    if (value === '')
                        return true
                    var re = /\S+@\S+\.\S+/;

                    return new Promise((resolve => {
                        setTimeout(() => {
                            resolve(re.test(value))
                        }, 350 + Math.random() * 300)
                    }))

                }
            },
            message: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(300)
            },
        },
        computed: {
            corect() {
                if (this.$v.name.required && this.$v.eMail.required && this.$v.message.required) {
                    return false
                } else {
                    return true
                }
            }

        }
    }
</script>

<style scoped>
    .well {
        padding: 35px;
        padding-left: 30px;
        margin: 3% auto;
        width: 450px;
        height:550px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
        border-radius: 8px;
        color:white;
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