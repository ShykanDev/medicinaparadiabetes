<template>
  <div class="">
    <MainLayout>
      <template #main>
        <!-- Intro -->
        <section class="pt-0 overflow-hidden bg-[#f9f9f9]">
          <article class="w-full overflow-hidden lg:flex lg:items-center">
            <div
              class="flex flex-col items-center pt-2 lg:items-center lg:flex lg:justify-around lg:w-1/3 lg:w lg:h-screen rounded-bl-md rounded-br-md lg:py-12">
              <h2 class="hidden text-3xl font-extrabold text-center text-[#7D3117] font-poppins animate-fade-down lg:block">
                Conozca su aliado 100% natural para la <strong class="px-1 text-white bg-orange-600">DIABETES</strong> </h2>
              <h1 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-down">
                <span class="text-[#7D3117]">Energía natural y apoyo para el 
                  <strong class="px-1 text-white bg-orange-600">CONTROL DE LA DIABETES</strong>
                </span>
              </h1>
              <h2 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-up">
                <span class="text-green-800 font-varela animate-wiggle">Medicina ayurvedica con origen en la India</span>
              </h2>
              <a href="#glufac"
                class="p-1 my-3 font-bold text-white rounded-md lg:rounded-lg lg:text-xl lg:p-2 bg-[#7D3117] font-poppins animate-bounce">Conozca
                más</a>
            </div>
            <img src="../assets/img/mainHome.jpg" class="lg:w-2/3 animate-fade-up lg:h-screen" alt="">
          </article>
          <!-- links -->
          <article class="mx-3 my-3">
            <div>
              <a class="font-bold text-yellow-800" href="#">Inicio</a> »
              <a class="font-bold text-yellow-800" href="#comments">Comentarios</a> »
              <a class="font-bold text-yellow-800" href="#news">Noticias</a> »
              <a class="font-bold text-yellow-800" href="#contact">Contacto</a> »
              <RouterLink :to="{name:'beneficts'}" class="font-bold text-yellow-800">Beneficios</RouterLink> »
              <!-- <a class="font-bold text-yellow-800" href="Beneficios">Beneficios</a> » -->
              <RouterLink :to="{name:'aboutUs'}" class="font-bold text-yellow-800">Ingredientes</RouterLink> »
              <RouterLink :to="{name:'about'}" class="font-bold text-yellow-800">Nosotros</RouterLink> 
            </div>
          </article>
          <article>
            <div class="p-5 mt-4">
                <p class="font-bold text-orange-800">
                  Nuestras Redes
                </p>
                <div class="flex mt-2 space-x-2">
                  <a href="https://www.facebook.com/AyurevedaPrasadam?modal=admin_todo_tour" target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center px-4 py-2 text-blue-600 border border-blue-200 rounded">
                    <v-icon name="co-facebook" class="mr-2 text-[#1877f2]"></v-icon>

                  </a>
                  <a href="https://twitter.com/_prasadam_" target="_blank" rel="noopener noreferrer"
                    class="flex items-center px-4 py-2 text-blue-600 border border-blue-200 rounded">
                    <v-icon name="co-twitter" class="mr-2 text-[#1da1f2]"></v-icon>

                  </a>

                  <a href="https://api.whatsapp.com/send/?phone=525562516687&text&type=phone_number&app_absent=0" class="flex items-center px-4 py-2 text-blue-600 border border-blue-200 rounded" target="_blank" rel="noopener noreferrer">
                    <v-icon name="co-whatsapp" class="mr-2 text-[#25d366]"></v-icon>
                    
                  </a>
                  <a href="https://www.instagram.com/_prasadam_/?hl=es-la" target="_blank" rel="noopener noreferrer"
                    class="flex items-center px-4 py-2 text-blue-600 border border-blue-200 rounded">
                    <v-icon name="co-instagram" class="mr-2 text-[#fa6060]"></v-icon>

                  </a>
                </div>
              </div>
          </article>
          <!-- Image and info about Glufac -->
          <section class="flex flex-col items-center justify-between p-4 mt-6 space-y-8 overflow-hidden">

            <CardInfoSm :title="'¿Tiene usted diabetes?'" :description="stateInfo.getWhatsGlufac(7)"
              :description2="stateInfo.getWhatsGlufac(8)" :show-img-center="true" :img-top-position="'right'"
              :img-center-width="'w-80'"
              :img-center="'https://images.pexels.com/photos/3233275/pexels-photo-3233275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" />


            <CardInfoSm id="glufac" :title="'¿Qué es GLUFAC?'" :description="stateInfo.getWhatsGlufac(1)" />


            <CardInfoSm :title="'Ingredientes clave'" :description="stateInfo.getWhatsGlufac(2)" :show-img-center="true"
              :img-top-position="'left'" :img-center-width="'w-60'"
              :img-center="'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600'" />

            <CardInfoSm :title="'Principios de la Medicina Ayurvédica en GLUFAC'"
              :description="stateInfo.getWhatsGlufac(3)" :show-img-center="true" :img-top-position="'right'"
              :img-center-width="'w-60'"
              :img-center="'https://images.pexels.com/photos/1590140/pexels-photo-1590140.jpeg?auto=compress&cs=tinysrgb&w=600'" />

            <CardInfoSm :title="'¿Por Qué Elegir GLUFAC?'" :description="stateInfo.getWhatsGlufac(5)"
              :description2="stateInfo.getWhatsGlufac(6)" :show-img-center="true" :img-top-position="'left'"
              :img-center-width="'w-60'" :img-center="personThinking" />


            <!-- comments section -->
            <div id="comments" class="slider">
              <div class="slide-track">
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Carlos Hernández"
                    description="He notado una mejora en mi energía" date="Octubre 15, 2023" rating="⭐⭐⭐⭐"
                    comment="Desde que comencé a tomar Glufac, me siento con más vitalidad en el día a día." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Luisa Gómez"
                    description="Complemento ideal" date="Septiembre 22, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Glufac ha sido un buen complemento en mi dieta. Me gusta que es un producto natural y fácil de integrar en mi rutina." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Pedro Medina"
                    description="Me siento más estable" date="Agosto 30, 2023" rating="⭐⭐⭐⭐"
                    comment="Con Glufac, he notado menos altibajos en mi bienestar general. No es mágico, pero sí siento más equilibrio." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Marta Sánchez"
                    description="Un toque de ayuda natural" date="Julio 12, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Es bueno saber que estoy tomando algo natural. Aunque es solo un complemento, Glufac me ha dado un respaldo extra en mi salud diaria." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Jorge Pérez"
                    description="Siento un apoyo" date="Junio 5, 2023" rating="⭐⭐⭐⭐"
                    comment="Glufac ha sido un buen soporte. Me gusta que es fácil de tomar." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Ana Ramírez"
                    description="Es un extra positivo" date="Mayo 19, 2023" rating="⭐⭐⭐⭐"
                    comment="Este suplemento me ha dado un poco de ayuda adicional en mi bienestar. Es algo que puedo recomendar." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Roberto Díaz"
                    description="Más confianza en mi salud" date="Abril 28, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Me siento más confiado en mi salud general con Glufac. Sin promesas, pero ha sido positivo en mi experiencia." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Elena Martínez"
                    description="Muy contenta con los resultados" date="Marzo 14, 2023" rating="⭐⭐⭐⭐"
                    comment="He incorporado Glufac a mi rutina diaria y he sentido mejoras en mi bienestar general. Muy contenta con los resultados." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="Alfredo García"
                    description="Un cambio positivo" date="Febrero 25, 2023" rating="⭐⭐⭐⭐⭐"
                    comment="Glufac ha sido un cambio positivo en mi vida, me ayuda a sentirme mejor día a día sin efectos secundarios." />
                </div>
                <div class="slide">
                  <CommentIlustrative img="https://via.placeholder.com/150" name="María Fernández"
                    description="Me gusta que es natural" date="Enero 10, 2023" rating="⭐⭐⭐⭐"
                    comment="Es importante para mí que sea natural y no tenga efectos negativos. Muy satisfecha con Glufac." />
                </div>
              </div>
            </div>
            <h3 class="mt-2 text-xs text-end font-poppins text-slate-600">ⓘ Experiencias representativas de personas que
              eligen opciones naturales para su bienestar.</h3>

            <div class="w-full h-[1px] bg-red-700" />


            <h2 class="text-3xl font-medium text-center text-rose-800 font-poppins">Conozca que es la ayurveda 🌱</h2>
            <h3 class="text-base font-medium text-center text-rose-900 font-poppins">Le explica la doctora Ana Paula
              Dominguez, directora del Instituto de Mexicano de Yoga 🧘🏻‍♀️
            </h3>
            <iframe class="w-full h-[450px]" src="https://www.youtube.com/embed/9vlwgY0p6Sk?si=eexgUT46EIbsXlMa"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
          </section>


          <!-- news section -->
          <article id="news" class="flex flex-col items-center w-full p-4 space-y-6 overflow-hidden">
            <div class="w-full h-[1px] bg-red-700" />
            <h2 class="mb-4 text-3xl font-bold text-center text-rose-800 font-poppins">Noticias Relevantes</h2>
            <NewsCard class="w-3/4"
              :href-link="'https://www.cigna.com/es-us/knowledge-center/hw/temas-de-salud/ayurveda-aa116840spec'"
              :title="'Qué es la ayurveda'"
              :img-src="'https://images.pexels.com/photos/20419192/pexels-photo-20419192/free-photo-of-yellow-petals-on-spoon-by-book-on-desk.jpeg?auto=compress&cs=tinysrgb&w=600'"
              :description="'Conoce la importancia de la ayurveda, y sus beneficios en la salud '" />
            <NewsCard class="w-3/4"
              :href-link="'https://www.avantmedic.com/es/blog/la-medicina-ayurveda-breve-introduccion-a-sus-principios/'"
              :title="'La Medicina Ayurveda. Breve introducción a sus principios'"
              :img-src="'https://images.pexels.com/photos/3473530/pexels-photo-3473530.jpeg?auto=compress&cs=tinysrgb&w=600'"
              :description="'Los beneficios de la Medicina ayurvédica han sido probados durante siglos de uso, y sus metodologías son tan aplicables hoy en Occidente como lo fueron hace miles de años en la India.'" />
            <NewsCard class="w-3/4"
              :href-link="'https://www.conasi.eu/blog/consejos-de-salud/ayurveda-milenaria-ciencia/?srsltid=AfmBOooaRT_Rj7_v69iGSYjNlNi1gIB71HXY1wjID_IEXRtAjCLOR-nZ'"
              :title="'Ayurveda: la milenaria ciencia de la vida que te mantiene saludable'"
              :img-src="'https://www.conasi.eu/blog/wp-content/uploads/2019/01/ayurveda-prin.jpg'"
              :description="'Ayurveda está reconocida por la Organización Mundial de la Salud como “un sistema médico científico muy bien organizado, con metas y objetivos claramente definidos para la prevención y el tratamiento de diferentes patologías”.'" />
            <NewsCard class="w-3/4"
              :href-link="'https://askthescientists.com/es/ayurveda/'"
              :title="'Historia de la Ayurveda'"
              :img-src="'https://espsformacion.com/wp-content/uploads/2020/04/curso-ayurveda.jpg'"
              :description="'Conozca la historia de la Ayurveda y el origen de uno de los métodos de masaje más completos y antiguos para la promoción de la salud.'" />
            <NewsCard class="w-3/4" :href-link="'https://www.zamnesia.es/blog-10-mejores-hierbas-ayurvedicas-n2842'"
              :title="'Las 10 Mejores Hierbas Ayurvédicas'"
              :img-src="'https://www.zamnesia.es/img/cms/Blog/2842_top_10_ayurvedic_herbs/What-are-Ayurvedic-herbs.jpg'"
              :description="'Desde hace miles de años, las plantas se utilizan para abordar diversas necesidades de bienestar, pero pocas son tan reconocidas como las hierbas ayurvédicas, un subconjunto de plantas vinculadas al sistema tradicional Ayurveda. El principio de estas hierbas es simple: prevenir enfermedades equilibrando la mente, el cuerpo y el espíritu. Aun así, ¿qué tiene este sistema de curación centenario que sigue siendo tan popular hoy en día?'" />
          </article>

            <!-- ads section -->
            <section  class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->
              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://medicinaparaansiedad.com/Inicio.html" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-xs font-bold text-center text-white font-poppins md:text-3xl"></p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Conozca el producto que le ayudará</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="https://www.medicinaparaansiedad.com/img/ingredientesport.jpeg" alt="">
                  <p class="absolute text-xs font-bold text-center text-white top-1 font-poppins md:text-3xl">
                    ¿Se siente con ansiedad?</p>
                  <p class="absolute text-xs font-bold text-center text-white bottom-1 font-poppins md:text-3xl">
                    Conozca su solución aqui</p>
                </a>
              </div>

              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://chyawanprash.com.mx/index.html" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Usela con sus alimentos
                      favoritos</p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Multivitaminico</p>
                    <p class="hidden text-sm font-bold text-center text-white font-poppins md:text-3xl md:block">100%
                      natural</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="../assets/img/chyawanprash.png" alt="">
                  <p class="absolute top-0 text-xs font-bold text-center text-cyan-950 font-poppins md:text-3xl">Mermelada
                    oscura</p>
                  <p
                    class="absolute px-3 text-xs font-bold text-center text-cyan-950 md:px-0 bottom-3 font-poppins md:text-3xl">
                    Rejuvenecedor</p>
                </a>
              </div>
            </section>

        <!-- page secure info -->
        <div class="items-center justify-center w-full p-3 my-3 text-center bg-white rounded-lg shadow-lg font-poppins">
        <h1 class="mb-4 text-3xl font-bold">🔒 Página Segura</h1>
        <p class="mb-4 text-lg">Esta página utiliza <strong class="text-emerald-700">HTTPS</strong> para asegurar la conexión.</p>
        <p class="mb-4 text-lg">HTTPS (Hypertext Transfer Protocol Secure) es una versión segura de HTTP, el protocolo a través del cual se envían datos entre tu navegador y el sitio web al que estás conectado. La 'S' al final de HTTPS significa 'Secure' (Seguro). Esto significa que toda la comunicación entre su navegador y el sitio web está encriptada.</p>
        <p class="mb-4 text-lg">Además, nuestra página cuenta con <strong class="text-orange-700">SSL</strong> (Secure Sockets Layer) para proteger sus datos. 🔐</p>
        <p class="mb-4 text-lg">SSL es una tecnología estándar de seguridad global que permite la comunicación encriptada entre un navegador web y un servidor web. Esto asegura que todos los datos transmitidos entre el servidor y el navegador permanezcan privados e íntegros.</p>
        <p id="contact" class="text-lg">Gracias a estas tecnologías, puede estar seguro de que su información está protegida mientras navegas en nuestro sitio.</p>
        
    </div>
        </section>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import CardInfoSm from '@/components/cards/CardInfoSm.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useInfoGlufac } from '@/stores/infoGlufac';

// images import 
import ingredients from '@/assets/img/ingredients.jpg'
import personThinking from '@/assets/img/personaPensando.jpg'
import NewsCard from '@/components/cards/NewsCard.vue';
import CommentIlustrative from '@/components/comments/CommentIlustrative.vue';

const stateInfo = useInfoGlufac();






</script>

<style scoped lang="scss">
.bg-gradient-to-r {
  background: linear-gradient(to bottom, #ffd4d4, #fde2e4);
}


@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
	background: #ffffff;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 200px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 100vw;
   display: flex;
   gap: 4px;
	
	&::before,
	&::after {
		@include white-gradient;
		content: "";
		height: 200px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
    gap: 25px;
    align-items: center;
		width: calc(250px * 14);
	}
	
	.slide {
		// height: 100px;
		// width: 250px;
	}
}
</style>
