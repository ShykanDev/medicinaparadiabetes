<template>
    <div class="">
        <!-- header -->
         <header class="flex fixed left-0 right-0 z-50 items-center w-full p-1 bg-opacity-90 bg-[#deb54c] min-h-16 shadow-md">
            <div class="relative flex items-center w-full h-full text-white lg:flex-col ">
                <div class="absolute left-0 hidden md:block">
                    <img class="w-8" src="https://medicinaparaansiedad.com/img/logo.png" alt="">
                </div>
                <div class="absolute hidden md:absolute md:right-3 md:block">
                    <img class="w-10" src="../assets/img/ssl.png" alt="">
                </div>
                <div class="flex w-full gap-2 text-xl justify-evenly font-spicy-rice"> 
                    <RouterLink  :to="{ name: 'home'}">
                        <p class="hover:text-orange-300 lg:text-3xl">Inicio</p>
                    </RouterLink>
                    <RouterLink :to="{ name: 'beneficts'}">
                        <p class="hover:text-orange-300 lg:text-3xl">Beneficios</p>
                    </RouterLink>
                    <RouterLink :to="{ name: 'aboutUs'}">
                        <p class="hover:text-orange-300 lg:text-3xl">Ingredientes</p>
                    </RouterLink>
                    <RouterLink :to="{ name: 'about'}">
                        <p class="hover:text-orange-300 lg:text-3xl">Nosotros</p>
                    </RouterLink>
                    <a class="hidden lg:block hover:text-orange-300 lg:text-3xl" href="https://www.prasadam.mx/" target="_blank">Prasadam</a>
                </div>
                <div>
                    <div class="hidden gap-2 mt-4 lg:flex">
                        <!-- location vicon -->
                         <div class="flex items-center">
                             <v-icon name="md-locationon" class="text-white " scale="1.5"/>
                             <a class="text-sm font-medium text-center text-white hover:text-orange-200 lg:text-xl font-poppins"  href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4322888,-99.1760704,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f8b32758939b:0xf34fbd07bc47d6dd!8m2!3d19.4322888!4d-99.1760704!16s%2Fg%2F11c4n3lm2g?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
                            </a>
                         </div>
                         <div class="flex items-center">
                            <!-- phone vicon -->
                            <v-icon name="bi-telephone-fill" class="text-3xl text-white" scale="1.5"/>
                            <a href="tel:+525563950178" class="text-base font-bold text-white font-poppins hover:text-orange-700">+52 55 6395 0178</a>
                            <v-icon name="bi-telephone-fill" class="text-3xl text-white" scale="1.5"/>
                             <a href="tel:+525563950179" class="text-base font-bold text-white font-poppins hover:text-orange-700">+52 55 6395 0179</a>
                            </div>
                            <div class="flex items-center">
                                <!-- whatsapp vicon -->
                                <v-icon name="co-whatsapp" class="text-3xl text-white" scale="1.5"/>
                                <a href="https://wa.me/525562516687" class="text-base font-bold text-white transition-colors font-poppins hover:text-emerald-300" target="_blank" rel="noopener noreferrer"> +52 5562516687 </a>
                                
                            </div>
                    </div>
                </div>
            </div>
         </header>
         <!-- main -->
          <main class="pt-16 lg:pt-[89px]">
            <slot name="main" />
          </main>
          <!-- footer -->
          <footer class="flex flex-col justify-center w-full p-1 bg-opacity-85 bg-[#deb54c] min-h-16">
            <h2 class="text-2xl text-center text-white lg:text-5xl font-spicy-rice">Contacto</h2>
            <div class="flex flex-col w-full">
                <div class="flex items-center justify-center gap-2">
                    <!--  -->
                    <v-icon name="md-locationon" class="text-3xl text-white" scale="1.5"/>
                    <a class="text-sm font-bold text-center text-white lg:text-xl font-poppins" href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4322888,-99.1760704,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f8b32758939b:0xf34fbd07bc47d6dd!8m2!3d19.4322888!4d-99.1760704!16s%2Fg%2F11c4n3lm2g?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D">
                        Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
                    </a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="full" height="320px" style="border: 0px;"></iframe>
                <section class="flex flex-wrap justify-around">

                <div class="">
                    <!-- BiTelephoneFill vicon -->
                    <v-icon name="bi-telephone-fill" class="text-3xl text-white" scale="1.5"/>
                    <a href="tel:+525563950178" class="text-sm font-bold text-white font-poppins lg:text-2xl hover:text-orange-700">+52 55 6395 0178</a>
                </div>
                <div>
                    <v-icon name="bi-telephone-fill" class="text-3xl text-white" scale="1.5"/>
                    <a href="tel:+525563950179" class="text-sm font-bold text-white transition-colors lg:text-2xl font-poppins hover:text-orange-700">+52 55 6395 0179</a>
                </div>
                <div>
                    <!-- MdEmail vicon  -->
                    <v-icon name="md-email" class="text-3xl text-white" scale="1.5"/>
                    <a href="mailto:informes@prasadam.mx" class="text-sm font-bold text-white transition-colors lg:text-2xl hover:text-orange-700 font-poppins">informes@prasadam.mx</a>
                </div>
                <div>
                    <!-- CoWhatsapp vicon -->
                    <v-icon name="co-whatsapp" class="text-3xl text-white" scale="1.8"/>
                    <a href="https://wa.me/525562516687" class="text-sm font-bold text-white transition-colors lg:text-2xl font-poppins hover:text-orange-700" target="_blank" rel="noopener noreferrer"> +52 5562516687 </a>
                </div>
            </section>
            <article class="">
                <div class="flex justify-center w-full">
                    <img class="w-10" src="../assets/img/ssl.png" alt="">
                </div>
                <!-- page about -->
                 <p class="text-xl font-bold text-center text-white">Todos los derechos reservados &copy; {{ new Date().getFullYear() }}</p>
                    <p class="text-center text-white">Design: <strong class="font-normal font-spicy-rice">PACA</strong></p>
            </article>
            </div>
          </footer>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>