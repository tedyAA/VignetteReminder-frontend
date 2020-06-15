<template>
    <div class="col-4 col-lg-2 px-0">
        <div class="nav-side-menu w-100">
            <div class="brand"><img class="logo" src="../views/logo2.png"> </div>
            <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
            <div class="menu-list">
                <ul id="menu-content" class="menu-content collapse out" >
                    <li>
                        <a @click="dashboard">
                            <i @click="dashboard"></i> Dashboard
                        </a>
                    </li>

                    <li data-toggle="collapse" data-target="#new" class="collapsed">
                        <a @click="add"><i class="fa fa-car fa-lg"></i> New </a>
                    </li>
                </ul>

            </div>

        </div>
    </div>

</template>
<script>
    export default {
        name: "MainNavBar",
        methods: {

           add() {
                this.$router.push('/add')
            },
            dashboard() {
                this.$router.push('/main')
            },
            profile() {
                this.$router.push('/profile')
            }
        }
    }
</script>
<style scoped>
    .nav-side-menu {
        overflow: auto;
        font-family: verdana;
        font-size: 12px;
        font-weight: 200;
        background-color: #23282e;
        /*position: fixed;*/
        top: 0px;
        /*width: 24%;*/
        height: 100%;
        color: #e1ffff;
    }
    .nav-side-menu .brand {
        background-color: #23282e;
        line-height: 50px;
        display: block;
        text-align: center;
        font-size: 14px;
    }
    .nav-side-menu .toggle-btn {
        display: none;
    }
    .nav-side-menu ul,
    .nav-side-menu li {
        list-style: none;
        padding: 0px;
        /*margin: 0px;*/
        line-height: 35px;
        cursor: pointer;
    }
    .nav-side-menu li {
        padding-left: 0px;
        border-left: 3px solid #2e353d;
        border-bottom: 1px solid #23282e;
    }
    .nav-side-menu li a {
        text-decoration: none;
        color: #e1ffff;
        font-size: 14px;
    }
    .nav-side-menu li:hover {
        border-left: 3px solid #d19b3d;
        background-color: #4f5b69;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
    }
    @media (min-width: 767px) {
        .nav-side-menu .menu-list .menu-content {
            display: block;
        }
    }
    .logo{
        height: 57px;
    }
</style>