<template>
    <div class="container-fluid bg-gradient p-5">
        <div class="row m-auto text-center w-75">
            <div class="col-4 princing-item red">
                <div class="pricing-divider ">
                    <h3 class="text-light">ST8337CP</h3>

          <path class='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                        <path class='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                        <path class='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                        <path class='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>

                </div>
                <div class="card-body bg-white mt-0 shadow">
                    <ul class="list-unstyled mb-5 position-relative">

                    </ul>
                    <button type="button" class="btn btn-lg btn-block  btn-custom ">Visit</button>
                </div>
            </div>

            </div>
        </div>
</template>

<script>
    export default {
        name: "CarWindow"
    }
</script>

<style scoped>
    .bg-gradient {
        background: #C9D6FF;
        background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
        background: linear-gradient(to right, #E2E2E2, #C9D6FF);
    }
    ul li {
        margin-bottom:1.4rem;
    }
    .pricing-divider {
        border-radius: 20px;
        background: #C64545;
        padding: 1em 0 4em;
        position: relative;
    }
    .blue .pricing-divider{
        background: #2D5772;
    }
    .green .pricing-divider {
        background: #1AA85C;
    }
    .red b {
        color:#C64545
    }
    .blue b {
        color:#2D5772
    }
    .green b {
        color:#1AA85C
    }
    .pricing-divider-img {
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 80px;
    }
    .deco-layer {
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
    }
    .btn-custom  {
        background:#C64545; color:#fff; border-radius:20px
    }

    .img-float {
        width:50px; position:absolute;top:-3.5rem;right:1rem
    }

    .princing-item {
        transition: all 150ms ease-out;
    }
    .princing-item:hover {
        transform: scale(1.05);
    }
    .princing-item:hover .deco-layer--1 {
        -webkit-transform: translate3d(15px, 0, 0);
        transform: translate3d(15px, 0, 0);
    }
    .princing-item:hover .deco-layer--2 {
        -webkit-transform: translate3d(-15px, 0, 0);
        transform: translate3d(-15px, 0, 0);
    }



</style>