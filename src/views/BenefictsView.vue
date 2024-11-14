<template>
    <div class="">
        <MainLayout>
            <template #main>
                <h1 class="text-4xl font-bold text-center text-white bg-orange-400 lg:text-5xl py-7 font-poppins">Conozca los BENEFICIOS de GLUFAC</h1>
                <h3></h3>
                <!-- List of benefits -->
                 <section class="flex flex-wrap justify-around gap-5 p-5 ">
                    <BenefictCard :img-src="'prodInsulina'" :main-title="'Mejora el Control de la Glucosa'" :main-content="'Ayuda a mantener niveles saludables de glucosa en sangre.'" :extra-info="' La combinación de extractos como el Gudmar y el Methi contribuye a la regulación de la glucosa, promoviendo un equilibrio adecuado para personas con diabetes.'"/>
                    <BenefictCard :img-src="'inmune'" :main-title="'Refuerza el Sistema Inmunológico'" :main-content="'Fortalece las defensas del cuerpo contra infecciones.'" :extra-info="'El Neem y el Guduchi tienen propiedades inmunomoduladoras que potencian la respuesta del sistema inmune, protegiendo el cuerpo de enfermedades.'"/>
                    <BenefictCard :img-src="'digestion'" :main-title="'Mejora la Digestión'" :main-content="'Apoya una digestión saludable y el bienestar intestinal.'" :extra-info="'El Probiótico Lactobacillus sporogenes favorece el equilibrio de la flora intestinal, promoviendo una mejor digestión y absorción de nutrientes.'"/>
                    <BenefictCard :img-src="'colesterol'" :main-title="'Reducción de los Niveles de Colesterol'" :main-content="'Contribuye a controlar los niveles de colesterol en sangre.'" :extra-info="'El extracto de Karela ha mostrado propiedades que ayudan a reducir el colesterol LDL, favoreciendo la salud cardiovascular.'"/>
                    <BenefictCard :img-src="'antioxidantes'" :main-title="'Propiedades Antioxidantes'" :main-content="'Protege contra el daño celular causado por los radicales libres.'" :extra-info="' Los extractos de Neem y Guduchi son conocidos por sus poderosas propiedades antioxidantes, ayudando a prevenir el envejecimiento prematuro y el estrés oxidativo.'"/>
                    <BenefictCard :img-src="'pesoCorporal'" :main-title="'Regula el Peso Corporal'" :main-content="'Apoya en el control del peso corporal y la reducción de grasa.'" :extra-info="'El extracto de Methi y el Karela favorecen la quema de grasa, ayudando a mantener un peso saludable.'"/>
                    <BenefictCard :img-src="'saludHepatica'" :main-title="'Mejora la Salud Hepática'" :main-content="'Promueve la salud del hígado y su función desintoxicante.'" :extra-info="'El Neem tiene propiedades hepáticas que apoyan la limpieza y detoxificación del hígado, mejorando su rendimiento.'"/>
                    <BenefictCard :img-src="'balanceHormonal'" :main-title="'Balance Hormonal'" :main-content="'Ayuda a regular el equilibrio hormonal en el cuerpo.'" :extra-info="' El extracto de Gudmar contribuye a un balance hormonal óptimo, favoreciendo el funcionamiento adecuado del sistema endocrino.'"/>
                    <BenefictCard :img-src="'ejercicio'" :main-title="'Aumenta la Energía y Vitalidad'" :main-content="'Promueve un aumento en los niveles de energía general.'" :extra-info="'Los componentes ayurvédicos como el Vijaysar y el Guduchi ayudan a revitalizar el cuerpo, combatiendo la fatiga y mejorando la vitalidad.'"/>
                    <BenefictCard :img-src="'propiedadesAnti'" :main-title="'Propiedades Antiinflamatorias'" :main-content="'Ayuda a reducir la inflamación en el cuerpo.'" :extra-info="'El extracto de Vijaysar y Neem son conocidos por sus propiedades antiinflamatorias, ayudando a aliviar dolores y molestias asociadas con la inflamación crónica.'"/>
                    <BenefictCard :img-src="'saludCardio'" :main-title="'Mejora la Salud Cardiovascular'" :main-content="'Ayuda a mantener una función cardiovascular óptima.'" :extra-info="'El extracto de Karela y Guduchi pueden ayudar a reducir la presión arterial, favoreciendo la salud del corazón y la circulación sanguínea.'"/>
                    <BenefictCard :img-src="'rinones'" :main-title="'Apoya la Salud de los Riñones'" :main-content="'Contribuye a la función renal y la eliminación de toxinas.'" :extra-info="'El Neem, con sus propiedades diuréticas, promueve la eliminación de toxinas y apoya la salud renal.'"/>
                    <BenefictCard :img-src="'feliz'" :main-title="'Aumenta la Resistencia al Estrés'" :main-content="'Ayuda al cuerpo a lidiar mejor con el estrés.'" :extra-info="'El Guduchi es conocido por sus propiedades adaptógenas, ayudando al cuerpo a adaptarse al estrés y mejorar la respuesta del sistema nervioso.'"/>
                    <BenefictCard :img-src="'antiinflamatorias'" :main-title="'Mejora la Salud de la Piel'" :main-content="'Promueve una piel más saludable y radiante.'" :extra-info="'El Neem y Gudmar son conocidos por sus propiedades antibacterianas y antiinflamatorias, ayudando a mejorar la salud de la piel y combatir afecciones cutáneas.'"/>
                    <BenefictCard :img-src="'prodInsulina'" :main-title="'Favorece la Regulación de la Insulina'" :main-content="'Contribuye a un mejor funcionamiento de la insulina en el cuerpo.'" :extra-info="'El Neem y Gudmar son conocidos por sus propiedades antibacterianas y antiinflamatorias, ayudando a mejorar la salud de la piel y combatir afecciones cutáneas.'"/>
                 </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import BenefictCard from '@/components/beneficts/BenefictCard.vue';

</script>

<style scoped>

</style>