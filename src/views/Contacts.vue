<template>
    <div>
        <upper-nav-bar></upper-nav-bar>
        <contacts-form></contacts-form>
    </div>
</template>

<script>
    import UpperNavBar from "../components/UpperNavBar";
    import ContactsForm from "../components/ContactsForm";

    export default {
        components: {
           UpperNavBar,
            ContactsForm
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