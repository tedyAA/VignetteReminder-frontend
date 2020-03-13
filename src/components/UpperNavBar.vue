<template>
    <div>
        <ul>
            <li><a class="active" >Home</a></li>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UpperNavBar",
        methods: {
            home() {
                this.$router.push('/welcome')
            },
            logIn() {
                this.$router.push('/')
            },
            contacts() {
                this.$router.push('/contacts')
            },
            register() {
                this.$router.push('/register')
            }
        }
    }

</script>

<style scoped>

    ul {
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        overflow: hidden;
        background-color: #438acf;;

    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: #000000;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
    }

    li a:hover {
        background-color: #009edf;
        color: #000;
    }

    .active {
        color: #009edf;
        background-color: #009edf;
    }


</style>