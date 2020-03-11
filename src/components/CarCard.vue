<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-for="fruit in fruits" :key="fruit">
            <div>
                <div class="card-body">
                    <h4>Registration number</h4>
                    <h5 class="card-title">{{fruit}}</h5>
                    <a href="#" class="card-link">Card link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarCard",
        data() {
            return {
                fruits: ['СТ8337СР', 'СТ5257АР']
// muhite pishat kod
            }
        },
    }
</script>

<style scoped>
    .card {
        /*margin-left: 300px;*/
        margin-top: 50px;
        width: 200px !important;
        height: 200px !important;
        font-family: Pacifico;
        border-radius: 30px;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
        background-color: rgba(0, 158, 223, 0.8);
    }
</style>