<template>
    <div>
        <upper-nav-bar></upper-nav-bar>
        <contact-us-form></contact-us-form>

    </div>
</template>

<script>
    import UpperNavBar from "../components/UpperNavBar";
    import ContactUsForm from "../components/ContactUsForm";

    export default {
        components: {
           UpperNavBar,
            ContactUsForm
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