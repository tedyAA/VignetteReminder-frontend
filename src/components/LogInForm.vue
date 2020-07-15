<template>
    <form class="login">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign
                In</label>
                <input id="tab-2" type="radio" name="tab" class="for-pwd">
                <!--            <label for="tab-2" class="tab">Forgot Password</label>-->
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group" :class="{ 'valid': !$v.name.$invalid,'invalid': $v.name.$error }">
                            <label for="user" class="label">Username or Email</label>
                            <input id="user1" type="text" class="input" v-model.trim="$v.name.$model" v-model="email">
                            <div class="error" v-if="!$v.name.required">Field is required</div>

                        </div>
                        <div class="group" :class="{ 'form-group--error': $v.pass.$error}">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password"
                                   v-model.trim="$v.pass.$model" v-model="password">
                            <div class="error" v-if="!$v.pass.required">Field is required</div>
                        </div>
                        <div class="group">
                            <input type="submit" class="btn btn-primary" @click="onSubmit"
                                   value="Sign In" id="btn">
                        </div>
                    </div>
                    <div class="for-pwd-htm">

                        <div class="hr"></div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'

    Vue.use(Vuelidate)

    import {required} from 'vuelidate/lib/validators'


    export default {
        data() {
            return {
                name: '',
                pass: '',

                email: '',
                password: ''
            }
        },
        validations: {
            name: {
                required
            },
            pass: {
                required,
                // isUnique(value) {
                //     return new Promise((resolve => {
                //         setTimeout(() => {
                //             resolve(re.test(value))
                //         }, 350 + Math.random() * 300)
                //     }))
            }
        },
        methods: {
            onSubmit() {
                const formData = {
                    email: this.email,
                    password: this.password
                }
                console.log(formData)
                this.$store.dispatch('auth/login', formData);
            }
        }
    }
</script>

<style scoped>

    .login-wrap {
        width: 100%;
        margin: auto;
        margin-top: 20px;
        max-width: 510px;
        min-height: 510px;
        position: relative;
        /*background: #009edf;*/
        background-size: cover;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: white;

    }

    .login-html {
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 80px 70px 50px 70px;
    }

    .login-html .sign-in,
    .login-html .for-pwd,
    .login-form .group .check {
        display: none;
    }

    .login-html .tab,
    .login-form .group .label,
    .login-form .group .button {
        text-transform: uppercase;
    }

    .login-html .tab {
        font-size: 22px;
        margin-right: 15px;
        padding-bottom: 5px;
        margin: 0 15px 10px 0;
        display: inline-block;
        border-bottom: 2px solid transparent;

    }

    .login-html .sign-in:checked + .tab,
    .login-html .for-pwd:checked + .tab {
        color: black;
        border-color: #1475ee;

    }

    .login-form {
        min-height: 345px;
        position: relative;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .login-form .group {
        margin-bottom: 15px;
    }

    .login-form .group .label,
    .login-form .group .input,
    .login-form .group .button {
        width: 100%;
        color: black;
        display: block;
    }

    .login-form .group .input,
    .login-form .group .button {
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(35, 37, 38, 0.07);
    }


    .login-form .group .label {
        color: black;
        font-size: 14px;
    }
    .error, .input{
        color: red;
    }
    @media only screen and (max-width: 600px) {
        .login {width: 70.66%;}
    }
    .btn{
        margin-top: 40px;
        width:200px;

    }
</style>