<template>
    <div class="container">
        <form class="form-horizontal" @submit.prevent="onSubmit">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>Register New User</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="name">Name</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group" >
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem "><i class="fa fa-user"></i></div>
                            <input type="text" name="name" class="form-control" id="name" v-model="first_name"
                                   placeholder="John" required autofocus>
                        </div>
                    </div>
                </div>
                <p>.</p>
                <div class="col-md-3 field-label-responsive">
                    <label for="name">Last Name</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                            <input type="text" name="name" class="form-control" id="Lname" v-model="last_name"
                                   placeholder="Doe" required autofocus>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <!-- Put name validation error messages here -->
                        </span>
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
                            <input type="text" name="email" class="form-control" id="email" v-model="email"
                                   placeholder="you@example.com" required autofocus>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <!-- Put e-mail validation error messages here -->
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
                            <input type="password" name="password" class="form-control" id="password" v-model="password"
                                   placeholder="Password" required>
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
                    <label for="password">Confirm Password</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem">
                                <i class="fa fa-repeat"></i>
                            </div>
                            <input type="password" name="password-confirmation" class="form-control"
                                   v-model="password_confirmation"
                                   id="password-confirm" placeholder="Confirm Password" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-success"><i class="fa fa-user-plus"></i> Register</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'

    Vue.use(Vuelidate)

    import {required} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                fName: '',
                lName: '',
                eMail: '',
                pass: '',
                conPassword: '',

                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        },
        validations: {
            fName: {
                required
            },
            lName: {
                required
            },
            eMail: {
                required
            },
            pass: {
                required
            },
            conPassword: {
                required
            }
        }, methods: {
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
            width: 900px;
            height: 420px;
            margin-top: 50px;
            border-radius: 30px;
            box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
            background-color: rgba(0, 158, 223, 0.8);
            opacity: inherit;
        }
    }

    .form-control {
        border-radius: 30px;
        background: rgba(175, 218, 235, 0.34);
    }
</style>