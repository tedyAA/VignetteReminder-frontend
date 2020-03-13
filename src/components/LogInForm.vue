<template>
    <form>
        <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign
                In</label>
                <input id="tab-2" type="radio" name="tab" class="for-pwd">
                <!--            <label for="tab-2" class="tab">Forgot Password</label>-->
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group" :class="{ 'form-group--error': $v.name.$error }">
                            <label for="user" class="label">Username or Email</label>
                            <input id="user1" type="text" class="input" v-model.trim="$v.name.$model"
                                   v-bind:class="[isActive ? activeClass : '', errorClass]">
                            <div class="error" v-if="!$v.name.required" >Field is required</div>
                        </div>
                        <div class="group" :class="{ 'form-group--error': $v.age.$error}">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password"
                                   v-model.trim="$v.age.$model">
                            <div class="error" v-if="!$v.age.required">Field is required</div>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign In" id="btn" >
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
                age: ''
            }
        },
        validations: {
            name: {
                required
            },
            age: {
                required
            }
        },
        methods() {
        //     dis()
        //     {
        //         if (this.age.required) {
        //         document.getElementById("btn").disabled = false;
        //         }else{
        //             document.getElementById("btn").disabled = true;
        //         }
        //     }
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
        background-color: rgba(0, 158, 223, 0.8);

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
        color: #fff;
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
        color: #fff;
        display: block;
    }

    .login-form .group .input,
    .login-form .group .button {
        border: none;
        padding: 15px 20px;
        border-radius: 25px;
        background: rgba(175, 218, 235, 0.34);
    }

    .login-form .group input[data-type="password"] {
        text-security: circle;
        -webkit-text-security: circle;
    }

    .login-form .group .label {
        color: #ffffff;
        font-size: 12px;
    }

    .login-form .group .button {
        background: #1161ee;
    }

    .login-form .group label .icon {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        position: relative;
        display: inline-block;
        background: rgba(255, 255, 255, .1);

    }

    .login-form .group label .icon:before,
    .login-form .group label .icon:after {
        content: '';
        width: 10px;
        height: 2px;
        background: #a5f7ff;
        position: absolute;
        -webkit-transition: all .2s ease-in-out 0s;
        transition: all .2s ease-in-out 0s;
    }

    .login-form .group label .icon:before {
        left: 3px;
        width: 5px;
        bottom: 6px;
        -webkit-transform: scale(0) rotate(0);
        transform: scale(0 npm) rotate(0);
    }

    .login-form .group label .icon:after {
        top: 6px;
        right: 0;
        -webkit-transform: scale(0) rotate(0);
        transform: scale(0) rotate(0);
    }

    .login-form .group .check:checked + label {
        color: #ff48a4;
    }

    .login-form .group .check:checked + label .icon {
        background: #1161ee;
    }

    .login-form .group .check:checked + label .icon:before {
        -webkit-transform: scale(1) rotate(45deg);
        transform: scale(1) rotate(45deg);
    }

    .login-form .group .check:checked + label .icon:after {
        -webkit-transform: scale(1) rotate(-45deg);
        transform: scale(1) rotate(-45deg);
    }

    .login-html .sign-in:checked + .tab + .for-pwd + .tab + .login-form .sign-in-htm {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    .login-html .for-pwd:checked + .tab + .login-form .for-pwd-htm {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    .hr {
        height: 2px;
        margin: 60px 0 50px 0;
        background: rgba(255, 255, 255, .2);
    }

</style>