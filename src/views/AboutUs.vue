<template>
    <div class="">
        <MainLayout>
            <template #main>
              <h2 class="text-5xl font-bold text-center text-white bg-orange-400 ">Ingredientes de GLUFAC</h2>
              <p class="pt-4 mb-4 text-lg font-bold text-center text-white bg-orange-400">Estos son los ingredientes principales de GLUFAC, le invitamos a que conozca cual es el uso de cada uno de ellos</p>
              <div class="grid grid-cols-3">
                <img class="animate-flip-up" src="../assets/img/frontBottle.png" alt="">
                <img class="animate-flip-up" src="../assets/img/frontBottleRight.png" alt="">
                <img class="animate-flip-up" src="../assets/img/frontLeftBottle.png" alt="">
              </div>
              <section class="flex flex-wrap justify-between gap-5 p-4 font-poppins">
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold">Características del Producto</h3>
    <ul class="p-0 list-none">
      <li><strong>Cantidad de Cápsulas:</strong> 60 cápsulas por envase</li>
      <li><strong>Tamaño de la Porción:</strong> 1 cápsula</li>
      <li><strong>Modo de Uso:</strong> Tomar 1 cápsula de 1 a 2 veces al día, preferiblemente con comida o según lo indique un profesional de la salud.</li>
      <li><strong>Almacenamiento:</strong> Mantener en un lugar fresco y seco, lejos de la luz solar directa.</li>
      <li><strong>Advertencias:</strong> Consultar a un profesional de la salud si está embarazada o en período de lactancia. Mantener fuera del alcance de los niños.</li>
      <li><strong>Categoría:</strong> Suplemento dietético</li>
    </ul>
  </div>
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold">Resumen de Ingredientes</h3>
    <ul class="p-0 list-none">
      <li><span class="font-bold">Neem 🌿</span> Apoya la salud general y la función del sistema inmunológico.</li>
      <li><span class="font-bold">Guduchi 🌱</span> Refuerza el sistema inmunológico y mejora la digestión.</li>
      <li><span class="font-bold">Vijaysar 🌳</span> Ayuda a regular los niveles de glucosa en sangre y mejora la salud cardiovascular.</li>
      <li><span class="font-bold">Gudmar 🍃</span> Promueve el control de los niveles de azúcar en sangre y mejora la salud digestiva.</li>
      <li><span class="font-bold">Methi 🌾</span> Contribuye al control del azúcar en sangre y la salud digestiva.</li>
      <li><span class="font-bold">Karela 🍊</span> Mejora la salud del páncreas y apoya la función digestiva.</li>
      <li><span class="font-bold">Probiótico 🦠</span> Favorece la salud digestiva y refuerza el sistema inmunológico.</li>
    </ul>
  </div>
</section>

              <section class="flex flex-wrap items-center justify-center">
                <IngredientsCard class="" :main-title="'Extracto de Neem (Azadirachta indica)'" :small-intro="`Neem, originario de la India, ha sido un pilar en la medicina ayurvédica durante siglos, conocido por su amplio rango de propiedades medicinales. Este árbol sagrado, conocido como el 'curador de todos los males', ofrece beneficios sorprendentes para la salud, y su extracto es especialmente valorado por sus propiedades inmunológicas y antioxidantes.`" :description="'El Neem es conocido científicamente como Azadirachta indica y ha sido utilizado en la medicina tradicional para una gran variedad de aplicaciones. Sus componentes activos, principalmente azadiractina, nimbina, nimbolida y quercetina, le otorgan propiedades antibacterianas, antiinflamatorias, antiparasitarias y antioxidantes, permitiendo que este extracto tenga efectos positivos en numerosos sistemas del cuerpo.'" :img-src="'https://cotizaciones.greenandinacolombia.com/wp-content/uploads/2020/12/49889_neem-1.jpg'" :info-arr="neemInfoList"/>
                <IngredientsCard :main-title="'Extracto de Guduchi (Tinospora cordifolia)'" :small-intro="`El Guduchi, también conocido como Amrita o “néctar de la inmortalidad”, es una planta ayurvédica muy respetada en la medicina tradicional india por su capacidad de promover la longevidad, la salud inmune y la resistencia del cuerpo frente a enfermedades. Es un adaptógeno potente que ayuda a equilibrar y revitalizar el cuerpo, siendo uno de los ingredientes naturales clave en fórmulas que buscan el bienestar integral.`" :description="'l Guduchi, conocido científicamente como Tinospora cordifolia, es un adaptógeno y tónico inmunológico utilizado en la medicina ayurvédica por su capacidad para mejorar la vitalidad y la salud general. Sus principales compuestos activos incluyen alcaloides, diterpenoides, y compuestos fenólicos, que le otorgan una gran variedad de beneficios para el organismo:'" :img-src="'https://www.planetayurveda.com/pa-wp-images/tinospora-cordifolia-giloy.jpg'" :info-arr="guduchiInfoList"/>
                <IngredientsCard :main-title="'Extracto de Vijaysar (Pterocarpus marsupium)'" :small-intro="`El Vijaysar, también conocido como 'madera de kino indio', es una planta ayurvédica tradicionalmente utilizada en la India, especialmente por sus propiedades beneficiosas en el manejo de la glucosa en sangre y la salud metabólica. Este extracto es popular por sus efectos positivos en personas que buscan equilibrar sus niveles de azúcar y mejorar su salud general.`" :description="'El Extracto de Vijaysar, científicamente conocido como Pterocarpus marsupium, es una fuente rica en compuestos bioactivos, como los flavonoides, taninos y pterostilbeno, que le confieren diversos beneficios para el cuerpo:'" :img-src="'https://ayurvedastoreonline.com/cdn/shop/files/Vijaysar_480x.jpg?v=1701262289'" :info-arr="vijaysarInfoList"/>
                <IngredientsCard :main-title="'Extracto de Gudmar (Gymnema sylvestre)'" :small-intro="`El Gudmar, también conocido como 'el destructor de azúcar', es una planta utilizada tradicionalmente en la medicina ayurvédica para controlar los niveles de glucosa en sangre y tratar la diabetes. Sus propiedades antioxidantes y reguladoras de la glucosa lo convierten en un ingrediente esencial para mejorar la salud metabólica.`" :description="'El Extracto de Gudmar (Gymnema sylvestre) es una planta conocida por su capacidad para reducir la absorción de azúcar y regular los niveles de glucosa en la sangre. Sus propiedades más destacadas incluyen:'" :img-src="'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gymnema_sylvestre_R.Br_-_Flickr_-_lalithamba.jpg/800px-Gymnema_sylvestre_R.Br_-_Flickr_-_lalithamba.jpg'" :info-arr="gudmarInfoList"/>
                <IngredientsCard :main-title="'Extracto de Methi (Trigonella foenum graecum)'" :small-intro="`El Methi o fenogreco es una planta herbácea utilizada desde la antigüedad en la medicina tradicional por sus propiedades para mejorar la digestión, controlar los niveles de azúcar en sangre y reducir la inflamación. Su alto contenido de fibra y nutrientes lo hace un aliado natural para la salud general.`" :description="'El Extracto de Methi (Trigonella foenum graecum) es una fuente rica en fibra, proteínas y antioxidantes, y se ha utilizado tradicionalmente para tratar diversas afecciones, especialmente en el control de la glucosa y la salud digestiva. Sus beneficios incluyen:'" :img-src="'https://naturmedscientific.com/wp-content/uploads/2024/05/Fenugreek-Extract-Trigonella-foenum-graecum-scaled-1.jpg'" :info-arr="methiInfoList"/>
                <IngredientsCard :main-title="'Extracto de Karela (Momordica charantia)'" :small-intro="`El Karela, conocido como 'melón amargo', es un vegetal tradicionalmente utilizado para regular el azúcar en sangre y mejorar la salud digestiva. En la medicina ayurvédica, el Karela es muy apreciado por sus propiedades de depuración y sus efectos beneficiosos sobre la piel y la salud metabólica.`" :description="'El Extracto de Karela (Momordica charantia) es una planta tropical rica en compuestos bioactivos, como flavonoides, alcaloides y antioxidantes, que le otorgan una variedad de beneficios para la salud:'" :img-src="'https://cdn-kceoh.nitrocdn.com/QECcCfGVvtJuZrZDOPzgrnVErubuSKvY/assets/images/optimized/rev-d7aede4/saharogya.es/wp-content/uploads/2024/03/Copy-of-The-Healing-Power-of-Triphala-Natures-Secret-Weapon-Against-Seasonal-Allergies.png'" :info-arr="karelaInfoList"/>
                <IngredientsCard :main-title="'Probiótico (Lactobacillus sporogenes)'" :small-intro="`El Lactobacillus sporogenes es una cepa de probiótico que ayuda a equilibrar la flora intestinal, mejorando la digestión y fortaleciendo el sistema inmunológico. Este probiótico es esencial para quienes buscan mantener una salud digestiva óptima y una respuesta inmunitaria adecuada.`" :description="'El Probiótico Lactobacillus sporogenes es una cepa bacteriana probiótica beneficiosa para la flora intestinal, que juega un papel crucial en la mejora de la salud digestiva y la regulación del sistema inmunológico. Sus beneficios incluyen:'" :img-src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpybjOEVLPqr41XfgaIcn8EjYfg9L78h3M8Q&s'" :info-arr="lactobacillusInfoList"/>
                <!-- <IngredientsCard :main-title="''" :small-intro="``" :description="''" :img-src="''" :info-arr=""/> -->
                <!-- <IngredientsCard :main-title="''" :small-intro="``" :description="''" :img-src="''" :info-arr=""/> -->
              </section>
            </template>
          </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import IngredientsCard from '@/components/ingredients/IngredientsCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const neemInfoList = [
  {
    property: "Propiedades Inmunológicas",
    description: "El Neem actúa como un estimulante inmunológico, ayudando al cuerpo a fortalecer sus defensas y combatir infecciones. Gracias a sus propiedades antibacterianas y antivirales, apoya al sistema inmunitario para resistir enfermedades comunes como gripes, resfriados y otras infecciones bacterianas y virales."
  },
  {
    property: "Efecto Antioxidante y Anti-envejecimiento",
    description: "El Neem es rico en antioxidantes, que ayudan a combatir los radicales libres y reducen el estrés oxidativo en el cuerpo. Esto es crucial para prevenir el envejecimiento prematuro y proteger las células de daños. Además, los antioxidantes del Neem ayudan a reducir el riesgo de enfermedades crónicas, como enfermedades cardíacas y ciertos tipos de cáncer."
  },
  {
    property: "Apoyo en la Salud de la Piel",
    description: "Uno de los usos más conocidos del Neem es para mejorar la salud de la piel. Sus propiedades antibacterianas y antiinflamatorias lo convierten en un remedio efectivo contra el acné, eczema, psoriasis y otras condiciones cutáneas. El Neem ayuda a limpiar la piel, a equilibrar la producción de sebo y a reducir las infecciones cutáneas, promoviendo una apariencia saludable y libre de impurezas."
  },
  {
    property: "Propiedades Digestivas",
    description: "El Neem tiene un efecto beneficioso en el sistema digestivo, al ayudar en la eliminación de toxinas y parásitos que pueden afectar la salud intestinal. Además, se ha demostrado que el Neem promueve la desintoxicación del hígado, mejorando su función y ayudando en la eliminación de toxinas del cuerpo."
  },
  {
    property: "Control de Glucosa en Sangre",
    description: "Se ha encontrado que el Neem ayuda a regular los niveles de glucosa en sangre, lo cual es especialmente útil para personas con diabetes tipo 2. El Neem mejora la sensibilidad a la insulina y ayuda a mantener niveles estables de azúcar en la sangre, reduciendo el riesgo de picos de glucosa."
  },
  {
    property: "Propiedades Anti-inflamatorias",
    description: "Gracias a su contenido en compuestos antiinflamatorios, el Neem es útil para reducir la inflamación crónica en el cuerpo, lo que puede ayudar a aliviar condiciones inflamatorias como la artritis y otros problemas articulares."
  },
  {
    property: "Protección Cardiovascular",
    description: "Se ha demostrado que el Neem contribuye a reducir el colesterol LDL ('colesterol malo') y a mantener niveles saludables de presión arterial. Esto ayuda a mejorar la salud cardiovascular en general y a reducir el riesgo de enfermedades cardíacas."
  },
  {
    property: "Propiedades Antiparasitarias",
    description: "En medicina ayurvédica, el Neem se ha usado tradicionalmente para tratar infecciones parasitarias. El Neem actúa como un antiparasitario natural y ayuda a eliminar los parásitos internos, especialmente aquellos en el sistema digestivo, promoviendo una mejor salud intestinal."
  },
  {
    property: "Apoyo en la Higiene Bucal",
    description: "El Neem es también muy valorado en el cuidado dental, debido a sus propiedades antibacterianas. Se ha utilizado en productos de higiene bucal, como pastas dentales y enjuagues, ya que ayuda a reducir el crecimiento de bacterias en la boca, combate la gingivitis, y reduce la formación de placa."
  },
  {
    property: "Mejora de la Salud Hepática",
    description: "Debido a su capacidad de apoyar el proceso de desintoxicación del hígado, el Neem es beneficioso para la salud hepática. Ayuda a proteger al hígado de toxinas y promueve su correcto funcionamiento, lo que resulta en una mejor digestión y absorción de nutrientes en el cuerpo."
  }
];
const guduchiInfoList = [
  {
    property: "Potenciador del Sistema Inmunológico",
    description: "El Guduchi es conocido por sus efectos inmunomoduladores, que ayudan a fortalecer el sistema inmune al incrementar la producción de células blancas y la actividad de los macrófagos. Esto lo convierte en un excelente apoyo para combatir infecciones, virus y bacterias, y para reforzar la inmunidad de manera natural."
  },
  {
    property: "Propiedades Adaptogénicas",
    description: "Como adaptógeno, el Guduchi ayuda al cuerpo a adaptarse al estrés físico y mental, mejorando la resistencia y reduciendo el agotamiento. Esto es esencial para las personas que enfrentan altos niveles de estrés en su vida diaria, ya que Guduchi equilibra las respuestas del cuerpo ante el estrés y la ansiedad."
  },
  {
    property: "Antioxidante Potente",
    description: "El extracto de Guduchi es rico en antioxidantes, que ayudan a neutralizar los radicales libres y reducir el daño oxidativo en las células. Esto protege al cuerpo del envejecimiento prematuro y reduce el riesgo de enfermedades crónicas, incluyendo enfermedades cardíacas y ciertos tipos de cáncer."
  },
  {
    property: "Apoyo en la Salud Hepática",
    description: "Guduchi es especialmente valorado por sus efectos hepatoprotectores. Ayuda a desintoxicar el hígado y mejora su función, lo cual es crucial para la eliminación de toxinas en el cuerpo y para el metabolismo saludable de las grasas. Es un aliado importante para la salud hepática, especialmente para personas expuestas a sustancias tóxicas o que buscan mejorar su digestión y metabolismo."
  },
  {
    property: "Propiedades Anti-inflamatorias y Alivio del Dolor",
    description: "El Guduchi tiene propiedades antiinflamatorias que lo convierten en una opción efectiva para reducir la inflamación en el cuerpo y aliviar el dolor articular y muscular. Su efecto antiinflamatorio es beneficioso para personas con artritis y otras enfermedades inflamatorias crónicas."
  },
  {
    property: "Apoyo en la Salud Digestiva",
    description: "Guduchi actúa como un tónico digestivo que ayuda a mejorar la digestión y a reducir problemas gastrointestinales como la acidez y el estreñimiento. Al estimular el flujo biliar, mejora la digestión y la absorción de nutrientes, optimizando la salud digestiva y general del organismo."
  },
  {
    property: "Mejora la Salud Respiratoria",
    description: "Guduchi ha sido utilizado para el alivio de enfermedades respiratorias como la tos, el asma y el resfriado común. Sus propiedades inmunoestimulantes y antiinflamatorias lo hacen útil en el tratamiento de afecciones respiratorias, y ayuda a reducir la congestión y a mejorar la respiración."
  },
  {
    property: "Control de los Niveles de Glucosa en Sangre",
    description: "Algunos estudios sugieren que el Guduchi puede ser beneficioso para el control de los niveles de glucosa en la sangre, ayudando a mejorar la sensibilidad a la insulina. Esto lo hace un apoyo natural para personas con diabetes o quienes desean mantener un control saludable de la glucosa."
  },
  {
    property: "Efectos Anti-Alérgicos",
    description: "Guduchi es conocido por sus propiedades antihistamínicas y antialérgicas, siendo útil para personas que padecen de alergias estacionales o crónicas. Ayuda a reducir la reacción alérgica del cuerpo y mejora la resistencia frente a desencadenantes de alergias."
  },
  {
    property: "Promueve la Salud Mental",
    description: "Guduchi es utilizado en Ayurveda por sus efectos positivos en la mente y el estado de ánimo, al mejorar la claridad mental, reducir el estrés y mejorar el enfoque. Esto es beneficioso para personas que buscan una mayor agudeza mental y equilibrio emocional en su vida diaria."
  }
];
const vijaysarInfoList = [
  {
    property: "Regulación de los Niveles de Glucosa en Sangre",
    description: "Vijaysar es conocido por su capacidad para ayudar a equilibrar los niveles de glucosa en sangre. Contiene compuestos bioactivos que mejoran la sensibilidad a la insulina y reducen los picos de glucosa, siendo beneficioso para personas con diabetes tipo 2 o para aquellos que buscan mantener sus niveles de glucosa estables."
  },
  {
    property: "Control de Peso",
    description: "El extracto de Vijaysar es útil en el control del peso, ya que ayuda a reducir los antojos y mejora el metabolismo. Su acción para mantener los niveles de glucosa estables ayuda a evitar el almacenamiento de grasas, lo que contribuye a un manejo del peso más saludable."
  },
  {
    property: "Propiedades Antioxidantes",
    description: "Contiene flavonoides y otros antioxidantes que ayudan a combatir los radicales libres, reduciendo el estrés oxidativo en las células. Esto es importante para proteger el organismo de enfermedades crónicas y del envejecimiento prematuro."
  },
  {
    property: "Apoyo en la Salud Cardiovascular",
    description: "Vijaysar ayuda a mejorar la salud cardiovascular al regular los niveles de glucosa y reducir los lípidos en sangre. Sus propiedades antioxidantes también protegen las paredes arteriales y ayudan a prevenir la acumulación de placas, contribuyendo a una mejor circulación y presión arterial equilibrada."
  },
  {
    property: "Propiedades Anti-Inflamatorias",
    description: "El extracto de Vijaysar contiene compuestos antiinflamatorios que ayudan a reducir la inflamación en el cuerpo. Esto es beneficioso para personas que padecen de enfermedades inflamatorias crónicas y para reducir el riesgo de desarrollar enfermedades relacionadas con la inflamación."
  },
  {
    property: "Mejora la Salud Digestiva",
    description: "Vijaysar apoya el sistema digestivo al promover la secreción de enzimas y mejorar la absorción de nutrientes. Su efecto antiinflamatorio también ayuda a calmar el tracto digestivo, reduciendo problemas de acidez y mejorando la salud gastrointestinal."
  },
  {
    property: "Apoyo en el Metabolismo de los Carbohidratos",
    description: "Vijaysar regula el metabolismo de los carbohidratos al ayudar a descomponer y metabolizar la glucosa de manera eficiente. Esto es importante para mantener niveles de energía estables y evitar el almacenamiento de carbohidratos como grasa."
  },
  {
    property: "Efecto Rejuvenecedor en la Piel",
    description: "Los antioxidantes presentes en el extracto de Vijaysar ayudan a mejorar la salud de la piel, promoviendo un aspecto rejuvenecido y radiante al combatir el daño oxidativo que causa envejecimiento."
  },
  {
    property: "Promoción de la Salud Hepática",
    description: "Vijaysar contribuye a la desintoxicación del hígado, un órgano clave para el equilibrio metabólico. Esto ayuda a eliminar toxinas del cuerpo, optimizando el funcionamiento del hígado y mejorando la salud en general."
  },
  {
    property: "Apoyo a la Salud Renal",
    description: "Al actuar como un depurador natural, Vijaysar ayuda a proteger y apoyar el funcionamiento de los riñones, contribuyendo a la eliminación de toxinas y promoviendo la salud del sistema urinario."
  }
];
const gudmarInfoList = [
  {
    property: "Regulación de los Niveles de Glucosa en Sangre",
    description: "Gudmar es especialmente conocido por su capacidad para disminuir la absorción de glucosa en el intestino, lo que ayuda a reducir los picos de azúcar en sangre. También mejora la función del páncreas, ayudando a regular la producción de insulina."
  },
  {
    property: "Propiedades Antioxidantes",
    description: "El Gudmar es rico en compuestos antioxidantes que ayudan a combatir el estrés oxidativo en las células, protegiendo al organismo de daños celulares y reduciendo el riesgo de enfermedades crónicas."
  },
  {
    property: "Mejora de la Salud Metabólica",
    description: "Ayuda a mejorar el metabolismo de los carbohidratos, lo que es beneficioso tanto para el control del peso como para la energía general. Al regular la glucosa, también contribuye a mantener una energía constante durante todo el día."
  },
  {
    property: "Alivio de los Síntomas de la Diabetes",
    description: "Al mejorar la absorción de glucosa y equilibrar los niveles de insulina, Gudmar puede aliviar los síntomas comunes de la diabetes, como la sed excesiva y la fatiga, ayudando a controlar la enfermedad de manera natural."
  },
  {
    property: "Propiedades Anti-Inflamatorias",
    description: "Gudmar tiene efectos antiinflamatorios, lo que ayuda a reducir la inflamación general del cuerpo y proteger los órganos vitales de enfermedades inflamatorias, como la artritis."
  },
  {
    property: "Apoyo en la Pérdida de Peso",
    description: "Debido a su capacidad para equilibrar los niveles de glucosa, Gudmar puede ayudar a reducir los antojos de azúcar y alimentos procesados, favoreciendo una pérdida de peso más controlada."
  },
  {
    property: "Mejora de la Salud Cardiovascular",
    description: "Gudmar puede ayudar a reducir los niveles de colesterol y triglicéridos, promoviendo una mejor salud del corazón y reduciendo el riesgo de enfermedades cardiovasculares."
  },
  {
    property: "Efecto Antidiabético Natural",
    description: "Además de regular los niveles de azúcar en sangre, el Gudmar también ayuda a reducir la formación de glucosa en el hígado, lo que apoya su acción en el tratamiento de la diabetes."
  },
  {
    property: "Estimulación de la Producción de Insulina",
    description: "Se ha demostrado que Gudmar ayuda a estimular la producción de insulina en el páncreas, lo que puede ser beneficioso para personas con resistencia a la insulina."
  },
  {
    property: "Desintoxicación Natural",
    description: "Gudmar también tiene propiedades depurativas, ayudando a eliminar toxinas del cuerpo y promoviendo la salud general."
  }
];
const methiInfoList = [
  {
    property: "Regulación de los Niveles de Glucosa en Sangre",
    description: "El Methi ayuda a regular los niveles de azúcar en sangre al aumentar la sensibilidad a la insulina y al reducir la absorción de glucosa, siendo un suplemento beneficioso para personas con diabetes o resistencia a la insulina."
  },
  {
    property: "Mejora de la Salud Digestiva",
    description: "El Methi es conocido por su capacidad para aliviar problemas digestivos como el estreñimiento, la indigestión y la acidez estomacal. Su alto contenido de fibra ayuda a promover una digestión regular y saludable."
  },
  {
    property: "Control del Colesterol",
    description: "Este extracto ayuda a reducir los niveles de colesterol LDL (colesterol malo) y triglicéridos, mientras que mejora los niveles de colesterol HDL (colesterol bueno), contribuyendo a una mejor salud cardiovascular."
  },
  {
    property: "Propiedades Anti-Inflamatorias",
    description: "El Methi posee compuestos antiinflamatorios que ayudan a reducir la inflamación en el cuerpo, lo que es útil en el tratamiento de enfermedades inflamatorias como la artritis y otras condiciones autoinmunes."
  },
  {
    property: "Control de Peso",
    description: "Gracias a su capacidad para regular el azúcar en sangre y promover la saciedad, el Methi puede ser útil en la gestión del peso y la reducción del apetito, ayudando a prevenir la sobrealimentación."
  },
  {
    property: "Promoción de la Salud Hepática",
    description: "El Methi ayuda a desintoxicar el hígado y a mejorar la función hepática, lo que es crucial para la eliminación de toxinas y la regulación del metabolismo de las grasas."
  },
  {
    property: "Mejora de la Salud Cardiovascular",
    description: "Gracias a su capacidad para controlar el colesterol y la glucosa en sangre, el Methi ayuda a reducir el riesgo de enfermedades cardíacas y a mantener una circulación saludable."
  },
  {
    property: "Efectos Antioxidantes",
    description: "El Methi es rico en antioxidantes que protegen las células del daño oxidativo, reduciendo el riesgo de enfermedades crónicas y ayudando a combatir el envejecimiento prematuro."
  },
  {
    property: "Propiedades Estrogénicas",
    description: "El fenogreco también tiene propiedades que pueden ayudar a equilibrar los niveles hormonales, especialmente en mujeres, al aliviar síntomas del síndrome premenstrual (SPM) y la menopausia."
  },
  {
    property: "Mejora de la Salud Mental",
    description: "El Methi puede ayudar a mejorar la claridad mental, reducir la ansiedad y aliviar el estrés, promoviendo el bienestar emocional."
  }
];
const karelaInfoList = [
  {
    property: "Regulación de los Niveles de Glucosa en Sangre",
    description: "El Karela es uno de los remedios naturales más efectivos para regular los niveles de glucosa en sangre, ayudando a mejorar la sensibilidad a la insulina y reduciendo los niveles de azúcar, siendo útil en el tratamiento de la diabetes."
  },
  {
    property: "Propiedades Antioxidantes",
    description: "Contiene poderosos antioxidantes que protegen al cuerpo del daño celular, combatiendo el envejecimiento prematuro y reduciendo el riesgo de enfermedades crónicas, como enfermedades cardíacas y cáncer."
  },
  {
    property: "Desintoxicación Natural",
    description: "El Karela tiene propiedades depurativas que ayudan a eliminar toxinas del cuerpo, apoyando la función hepática y promoviendo una piel más saludable y limpia."
  },
  {
    property: "Apoyo en la Salud Digestiva",
    description: "El Karela ayuda a mejorar la digestión al promover el flujo de jugos gástricos y aliviar problemas como la indigestión y la acidez estomacal. También es útil para regular el tránsito intestinal."
  },
  {
    property: "Propiedades Anti-Inflamatorias",
    description: "El Karela tiene efectos antiinflamatorios que pueden ser beneficiosos en el tratamiento de enfermedades inflamatorias, como la artritis y la psoriasis."
  },
  {
    property: "Mejora de la Salud de la Piel",
    description: "Gracias a sus propiedades antibacterianas y antiinflamatorias, el Karela es útil en el tratamiento de afecciones de la piel como el acné, la psoriasis y el eccema."
  },
  {
    property: "Apoyo en la Salud Cardiovascular",
    description: "Al regular los niveles de glucosa y colesterol, el Karela contribuye a la mejora de la salud cardiovascular y la reducción del riesgo de enfermedades del corazón."
  },
  {
    property: "Estimulación de la Producción de Insulina",
    description: "El Karela ayuda a estimular la producción de insulina en el páncreas, lo que es crucial para mantener los niveles de glucosa en sangre estables."
  },
  {
    property: "Alivio de los Síntomas de la Diabetes",
    description: "El extracto de Karela puede ayudar a aliviar síntomas comunes de la diabetes, como la sed excesiva y la fatiga, proporcionando un alivio natural para los diabéticos."
  },
  {
    property: "Fortalecimiento del Sistema Inmunológico",
    description: "Gracias a su contenido en vitamina C y antioxidantes, el Karela refuerza el sistema inmunológico, ayudando a proteger el cuerpo contra infecciones y enfermedades."
  }
];
const lactobacillusInfoList = [
  {
    property: "Mejora de la Salud Digestiva",
    description: "El Lactobacillus sporogenes ayuda a equilibrar la flora intestinal, favoreciendo la digestión adecuada y la absorción de nutrientes. Es útil en el tratamiento de trastornos digestivos como el síndrome del intestino irritable (SII)."
  },
  {
    property: "Fortalecimiento del Sistema Inmunológico",
    description: "Al promover un ambiente intestinal saludable, el probiótico fortalece el sistema inmunológico, ayudando al cuerpo a defenderse de infecciones y enfermedades."
  },
  {
    property: "Prevención de Trastornos Digestivos",
    description: "El Lactobacillus sporogenes puede ayudar a prevenir la diarrea, el estreñimiento y otros trastornos digestivos al mejorar la función del sistema digestivo."
  },
  {
    property: "Reducción de la Inflamación Intestinal",
    description: "Este probiótico también ayuda a reducir la inflamación en el tracto intestinal, lo que es beneficioso para personas con enfermedades inflamatorias intestinales, como la enfermedad de Crohn."
  },
  {
    property: "Mejora de la Absorción de Nutrientes",
    description: "Al equilibrar la flora intestinal, el Lactobacillus sporogenes facilita una mejor absorción de nutrientes esenciales, lo que mejora el bienestar general."
  },
  {
    property: "Equilibrio de la Flora Intestinal",
    description: "El Lactobacillus sporogenes contribuye a mantener el equilibrio entre las bacterias 'buenas' y 'malas' en el intestino, favoreciendo un entorno digestivo saludable."
  },
  {
    property: "Reducción de los Síntomas de la Indigestión",
    description: "Este probiótico puede aliviar la indigestión, reduciendo la acidez estomacal y promoviendo una digestión más fluida."
  },
  {
    property: "Efectos en la Piel",
    description: "Un sistema digestivo saludable está vinculado a una piel más saludable. Lactobacillus sporogenes puede ayudar a reducir problemas de piel como el acné, ayudando a lograr una tez más limpia."
  },
  {
    property: "Mejora de la Salud Mental",
    description: "Un equilibrio intestinal adecuado también se ha relacionado con una mejor salud mental, ayudando a reducir la ansiedad y la depresión."
  },
  {
    property: "Prevención de Infecciones Intestinales",
    description: "Lactobacillus sporogenes también ayuda a prevenir infecciones bacterianas en el tracto intestinal, protegiendo el cuerpo de infecciones comunes."
  }
];


</script>

<style scoped>

</style>