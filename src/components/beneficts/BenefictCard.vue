<template>
    <div class="">
        <body>
  <div class="rounded-lg card-hover">
    <div class="card-hover__content">
        <!-- Main title -->
      <h3 class="text-white card-hover__title">
       {{ mainTitle}} 
      </h3>
      <!-- Main Content -->
      <p class="text-white card-hover__text">{{ mainContent}}</p>
      <button class="p-1 mt-1 text-2xl font-bold text-white rounded-lg text font-poppins">↓</button>
      <a  class="card-hover__link">
        <!-- Button Learn more -->
        <span>Mas información</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
</svg>
    
      </a>
    </div>

    <div class="card-hover__extra">
        <!-- extra info -->
        <p class="text-sm">{{ extraInfo }}</p>
    </div>
    <img :src="imgSrc" alt="image">
  </div>
</body>
    </div>
</template>

<script lang="ts" setup>

let imgSrc = ref();

onMounted(() => {
  if(imgSrc){
    switch(props.imgSrc){
      case 'antioxidantes':
        imgSrc.value = antioxidante;
        break;
      case 'antiinflamatorias':
        imgSrc.value = antiinflamatorio;
        break;
      case 'balanceHormonal':
        imgSrc.value = balanceHormonal;
        break;
      case 'colesterol':
        imgSrc.value = colesterol;
        break;
      case 'digestion':
        imgSrc.value = digestion;
        break;
      case 'ejercicio':
        imgSrc.value = ejercicio; 
        break;
      case 'feliz':
        imgSrc.value = feliz;
        break;
      case 'hormonas':
        imgSrc.value = hormonas;  
        break;
      case 'inmune':
        imgSrc.value = inmune;
        break;
      case 'pesoCorporal':
        imgSrc.value = pesoCorporal;
        break;
      case 'rinones': 
        imgSrc.value = rinones;
        break;
      case 'saludCardio':
        imgSrc.value = saludCardio;
        break;
      case 'saludHepatica':
        imgSrc.value = saludHepatica;
        break;  
      case 'propiedadesAnti':
        imgSrc.value = propiedadesAnti;
        break;  
      case 'insulina':
        imgSrc.value = insulina;
        break;  
      case 'prodInsulina':
        imgSrc.value = prodInsulinasa;
        break;  
      case 'insulina':
        imgSrc.value = insulina;
        break;  
    }
  } else {
    console.log('no hay imagen')
  }
})

const props = defineProps({
    mainTitle:{
        type: String,
        default: 'Main title'
    },
    mainContent: {
        type: String,
        default: 'Main content'
    },
    extraInfo: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis labore iusto aspernatur asperiores incidunt exercitationem nemo earum. Atque, minima!'
    },
    imgSrc: {
        type: String,
      required: true
    }
})
import prodInsulinasa from '../../assets/img/prodInsulina.jpg';
import insulina from '../../assets/img/insulina.jpg';
import antioxidante from '../../assets/img/antioxidantes.jpg';
import antiinflamatorio from '../../assets/img/antiinflamatorias.jpg';
import balanceHormonal from '../../assets/img/balanceHormonal.jpg';
import colesterol from '../../assets/img/colesterol.jpg';
import digestion  from '../../assets/img/digestion.jpg';
import ejercicio from '../../assets/img/ejercicio.jpg';
import feliz from '../../assets/img/feliz.jpg';
import hormonas from '../../assets/img/hormonas.jpg';
import inmune from '../../assets/img/inmune.jpg';
import pesoCorporal  from '../../assets/img/pesoCorporal.jpg';
import rinones from '../../assets/img/riñones.jpg';
import saludCardio from '../../assets/img/saludcardio.jpg';
import saludHepatica from '../../assets/img/saludHepatica.jpg';
import propiedadesAnti from '../../assets/img/propiedadesAnti.jpg';
import { onMounted, ref } from 'vue';
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap');

$firaSans: 'Fira Sans', sans-serif;



// html,
// body {
//   height: 100%;
// }

*, *:before, *:after {
  box-sizing: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  -webkit-text-size-adjust: 100%;
  font-variant-ligatures: none;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 100%;
  font-family: $firaSans;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
}


// body {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   height: 100vh;
//   color: #1F1D42;
// //   background-color: #EDCA70;
// }

.card-hover {
  $root: &;
  width: 360px;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0,0,0,0.08);

  &:has(#{$root}__link:hover) {

    #{$root}__extra {
      transform: translateY(0);
      transition: transform 0.35s;
    }
  }

  &:hover {
   
    #{$root} {

      &__content {
        background-color: #EDCA70;
        bottom: 100%;
        transform: translateY(100%);
        padding: 50px 60px;
        transition: all 0.35s cubic-bezier(.1,.72,.4,.97);
      }

      &__link {
        opacity: 1;
        transform: translate(-50%, 0);
        transition: all 0.3s 0.35s cubic-bezier(.1,.72,.4,.97);
      }
    }

    img {
      transform: scale(1);
      transition: 0.35s 0.1s transform cubic-bezier(.1,.72,.4,.97);
    }
  }

  &__content {
    width: 100%;
    text-align: center;
    background-color: #86B971;
    padding: 0 60px 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0);
    transition: all 0.35s 0.35s cubic-bezier(.1,.72,.4,.97);
    will-change: bottom, background-color, transform, padding;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 120px;
      background-color: inherit;
      position: absolute;
      left: 0;
      z-index: -1;
    }

    &::before {
      top: -80px;
      clip-path: ellipse(60% 80px at bottom center);
    }

    &::after {
      bottom: -80px;
      clip-path: ellipse(60% 80px at top center);
    }
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1em;

    span {
      color: #2d7f0b;
    }
  }

  &__text {
    font-size: 0.75rem;
  }

  &__link {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 10%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
    color: #2d7f0b;
    opacity: 0;
    padding: 10px;
    transition: all 0.35s;

    &:hover {
      
      svg {
        transform: translateX(4px);
      }
    }

    svg {
      width: 18px;
      margin-left: 4px;
      transition: transform 0.3s;
    }
  }

  &__extra {
    height: 40%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    background-color: #71b9a2;
    padding: 10px;
    bottom: 0;
    z-index: 0;
    color: #ffffff;
    transform: translateY(100%);
    will-change: transform;
    transition: transform 0.35s;

    span {
      color: #2d7f0b;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    transform: scale(1.2);
    transition: 0.35s 0.35s transform cubic-bezier(.1,.72,.4,.97);
  }
}


</style>