<template>
    <div class="p-5 font-poppins min-h-36">
        <div class="relative rounded-lg lg:flex lg:flex-row-reverse lg:items-center lg:text-2xl">
            <!-- Imagen superior -->
            <img v-if="showImgTop" 
                 :class="{'-right-6': imgTopPosition === 'right', '-left-6': imgTopPosition === 'left'}" 
                 class="absolute z-0 w-20 -top-10" 
                 :src="imgTop" 
                 alt="">
            
            <!-- Contenedor del texto y la imagen del centro -->
            <div class="lg:w-1/2">
                <!-- Título arriba -->
                <h2 class="z-10 text-2xl font-semibold text-center text-yellow-800 lg:text-5xl">{{ title }}</h2>
                <!-- Descripciones -->
                <p class="mt-3 leading-relaxed text-gray-600">{{ description }}</p>
                <p class="mt-3 leading-relaxed text-gray-600">{{ description2 }}</p>
            </div>

            <!-- Imagen del centro en pantallas grandes al lado derecho -->
            <div class="flex items-center justify-center lg:w-1/2 lg:justify-start">
                <img v-if="showImgCenter" :class="imgCenterWidth" class="rounded-lg lg:w-[450px]" :src="imgCenter" alt="">
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import defaultImagePlant from '@/assets/img/plantGreen.png'
import defaultImageBottle from '@/assets/img/frontBottle.png'
const props = defineProps({
    title:{
        type: String,
        default: 'Lorem ipsum dolor.',
    },
    description:{
        type: String,   
        default: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam doloremque saepe sit temporibus labore dolor cupiditate consequatur praesentium ut fugiat sequi, reprehenderit adipisci aut. Aliquam dolorem aspernatur dolores, similique non esse sed blanditiis eos inventore, voluptatum minima reiciendis quia rerum nostrum illum aut omnis impedit libero praesentium commodi magnam!',
    },
    description2:{
        type: String,
        default: '',
    },
    imgTop: {
        type: String,
        default: defaultImagePlant, 
    },
    imgTopPosition: {
        type: String,
        default: 'right',
    },
    showImgTop: {
        type: Boolean,
        default: true,
    },
    imgCenter: {
        type: String,
        default: defaultImageBottle, 
    },
    imgCenterWidth: {
        type: String,
        default: 'w-20',
    },
    showImgCenter: {
        type: Boolean,
        default: true,
    },

})

</script>

<style scoped>

</style>