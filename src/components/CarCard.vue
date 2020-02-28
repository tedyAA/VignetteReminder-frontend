<template>
    <div class="container">
        <div class="card" style="width: 18rem;" v-for="fruit in fruits" :key="fruit">
            <div>
                <div class="card-body">
                    <h5 class="card-title">{{fruit}}</h5>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarCard",

        // props:[
        //     'vehicle: []',
        // 'vehicle1: []',
        // 'vehicle2: []'
        // ],
        data() {
            return {
                fruits: ['СТ8337СР', 'СТ5257АР', 'РВ0001РВ']
            }
        },
    }
</script>

<style scoped>
    .card {
        margin-left: 400px;
        margin-top: 50px;
        background-color: #a5f7ff;
        width: 150px!important;
        height: 150px!important;
    }

</style>