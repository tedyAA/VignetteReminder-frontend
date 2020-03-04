<template>
    <div class="window">
        <h1>Available packages</h1>
        <p class="p">Pacage 1</p>
        <p class="p">Pacage 2</p>
        <p class="p">Pacage 3</p>
    </div>
</template>

<script>
    export default {
        name: "PackageWindow"
    }
</script>

<style scoped>
.window{
    width: 500px;
    height: 200px;
    margin-top: 50px;
    background-color: rgba(0, 158, 223, 0.8);
    opacity: inherit;
    border-radius: 25px;
}.p{
     font-size:25px ;
 }
</style>