<template>
    <div>
        <upper-nav-bar v-bind:style="{'margin-left':'320px'}">
            <li><a @click="contacts">Contact</a></li>
            <li><a @click="profile">Profile</a></li>
            <li><a @click="logOut">Log out</a></li>
        </upper-nav-bar>
        <main-nav-bar></main-nav-bar>
        <contact-us-form></contact-us-form>

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

</style>