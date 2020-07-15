<template>
    <div>
        <ul>
<!--            <li><a class="active" >Remind me</a></li>-->
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
        /*background-color: #438acf;;*/
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }

    li {
        float: left;
        color: #23282e;
    }

    li a {
        display: block;
        color: white;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 18px;

    }

    li a:hover {
        background-color: #b5daec8f;
        color: white;
    }

</style>