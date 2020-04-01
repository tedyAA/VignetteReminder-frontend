<template>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <MainNavBar></MainNavBar>
            <div class="col-8 col-lg-9 px-0">
                <upper-nav-bar>
                    <li><a @click="contacts">Contact</a></li>
                    <li><a @click="profile">Profile</a></li>
                    <li class="out"><a @click="logOut">Log out</a></li>
                </upper-nav-bar>
              <contact-us-form></contact-us-form>
            </div>
        </div>
    </div>
</template>

<script>
    import UpperNavBar from "../components/UpperNavBar";
    import ContactUsForm from "../components/ContactUsForm";
    import MainNavBar from "../components/MainNavBar";

    export default {
        methods: {
            profile() {
                this.$router.push('/profile')
            },
            logOut() {
                this.$router.push('/')
            },
            contacts() {
                this.$router.push('/contacts')
            },

        },
        components: {
           UpperNavBar,
            ContactUsForm,
            MainNavBar
        }
    }
</script>

<style scoped>
    .icons {
        padding: 8px;
        border-radius: 50%;
        border-color: pink;
        background-color: purple;
        color: white;
        border: 2px solid;
    }
    .out{
        position: absolute;
        right: 0;
        background-color: #009edf;
    }

</style>