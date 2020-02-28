<template>
    <div>
        <upper-nav-bar></upper-nav-bar>
        <profile-form></profile-form>
    </div>
</template>

<script>
    import UpperNavBar from "../components/UpperNavBar";
    import ProfileForm from "../components/ProfileForm";

    export default {
        components: {
            UpperNavBar,
            ProfileForm
        }
    }
</script>

<style scoped>

</style>