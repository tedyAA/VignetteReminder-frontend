<template>
    <div class="container">
        <div class="col-md-9">
            <div class="profile-content">
                <div>
                    <h1>User name</h1>
                </div>
                Some user related content goes here...
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserProfile"
    }
</script>

<style scoped>
    body {
        background: #F1F3FA;

    }

    .container {
        width: 600px;
        height: 400px;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
        margin-top: 70px;
        color:white;
    }
</style>