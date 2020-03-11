<template>
    <div>
        <upper-nav-bar v-bind:style="{'margin-left':'320px'}">
            <li><a @click="contacts">Contact</a></li>
            <li><a @click="profile">Profile</a></li>
            <li><a @click="logOut">Log out</a></li>
        </upper-nav-bar>
        <main-nav-bar></main-nav-bar>
        <profile-form></profile-form>
    </div>
</template>

<script>
    import ProfileForm from "../components/ProfileForm";
    import MainNavBar from "../components/MainNavBar";
    import UpperNavBar from "../components/UpperNavBar";


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
            ProfileForm,
            MainNavBar
        }
    }
</script>

<style scoped>

</style>