<template>
    <div class="WelcomeForm">
        <welcome-form> </welcome-form>
        <button class="move1" @click="logIn">Log in</button>
        <button class="move1" @click="reg">Register</button>
    </div>
</template>

<script>
    import WelcomeForm from "../components/WelcomeForm.vue";
    export default {
        components:{
            WelcomeForm
        },
        methods:{
            logIn(){
                this.$router.push('/')
            },
            reg(){
                    this.$router.push('/register')
                }
        }
    }
</script>

<style>

    body {
        background-image: url("ay.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }.move1{
             background: #00CED1;
             color: #ffffff !important;
             display: inline-block;
             font-size: 15px;
             font-weight: 500;
             width:120px;
             height: 70px;
             line-height: 0.8;
             padding: 18px 30px;
             text-transform: capitalize;
             border-radius: 1px;
             letter-spacing: 0.5px;
             border:0px !important;
             cursor:pointer;
             border-radius:100px;

         }
</style>