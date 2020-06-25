<template>
    <div class="container">
        <form class="form-horizontal" @submit.prevent="onSubmit">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2 class="h2">Register New User</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="name">Name</label>
                </div>
                <div class="col-md-6 ">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 ">
                            <div class="input-group-addon" style="width: 2.6rem "><i class="fa fa-user"></i></div>
                            <input type="text" name="name" class="form-control" id="name"
                                   v-model="first_name"
                                   v-model.trim="$v.fName.$model"
                                   :class="{'is-invalid' :$v.fName.$error,
                                   'is-valid' :!$v.fName.$invalid}" placeholder="John">
                            <div class="invalid-feedback">Name must be at least {{$v.fName.$params.minLength.min}}
                                characters
                            </div>
                            <div class="error"></div>
                        </div>
                    </div>
                </div>
                <p>.</p>
                <br/>
                <div class="col-md-3 field-label-responsive">
                    <label for="name">Last Name</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                            <input type="text" name="name" class="form-control" id="Lname" v-model="last_name"
                                   placeholder="Doe" required autofocus
                                   v-model.trim="$v.lName.$model"
                                   :class="{'is-invalid' :$v.lName.$error,
                                   'is-valid' :!$v.lName.$invalid}">
                            <div class="invalid-feedback">Name must be at least {{$v.lName.$params.minLength.min}}
                                characters
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="email">E-Mail Address</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" class="form-control" id="email"
                                   placeholder="you@example.com" required autofocus
                                   v-model="email"
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
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="password">Password</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group has-danger">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="Password" required
                                   v-model="password"
                                   v-model.trim="$v.pass.$model" :class="{'is-invalid':$v.pass.$error,
                                   'is-valid':!$v.pass.$invalid}">
                            <div class="invalid-feedback">
                                <span v-if="!$v.pass.required">pass is required</span>
                                <span v-if="!$v.pass.minLength">{{$v.pass.$params.minLength.min}} characters minimum</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="password">Password</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group has-danger">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="conPassword"
                                   placeholder="Password" required
                                   v-model="password_confirmation"
                                   v-model.trim="$v.repPass.$model" :class="{'is-invalid':$v.repPass.$error,
                                   'is-valid':(pass !='') ? !$v.repPass.$invalid : ''}">
                            <div class="invalid-feedback">
                                <span v-if="!$v.repPass.sameAsPass">pass is not identical</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-success" :disabled="corect" @click="onSubmit"><i class="fa fa-user-plus"></i>
                        Register
                    </button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'

    Vue.use(Vuelidate)

    import {required, sameAs, email, minLength} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                fName: '',
                lName: '',
                eMail: '',
                pass: '',
                repPass: '',

                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }

        },
        validations: {
            fName: {
                required,
                minLength: minLength(3)
            },
            lName: {
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
            pass: {
                required,
                minLength: minLength(6)

            },
            repPass: {
                required,
                sameAsPass: sameAs('pass')
            }
        },
        methods: {
            onSubmit() {
                const formData = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }
                console.log(formData)
                this.$store.dispatch('auth/register', formData);
                this.$router.push('/log');
            }
        },
        computed: {
            corect() {
                if (this.$v.$invalid) {
                    return true
                } else {
                    return false
                }
            }
        }

    }
</script>

<style scoped>

    @media (min-width: 768px) {
        .field-label-responsive {
            padding-top: .5rem;
            text-align: right;

        }

        .container {

            margin-top: 30px;
            border-radius: 30px;
            box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
            background-color: white;
            opacity: inherit;
            width: 1000px;
            height: 500px;
            color: black;
        }
    }

    .h2 {
        margin-top: 50px;
    }
    .form-control{
        background: rgba(35, 37, 38, 0.07);
    }

</style>
