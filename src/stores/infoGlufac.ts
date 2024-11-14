import { defineStore } from "pinia";

export const useInfoGlufac = defineStore('infoGlufac', {
  state: () => ({
    // whatsGlufac(n) means info that will be displayed on the main page
    whatsGlufac1:'Glufac es un suplemento natural desarrollado especialmente para apoyar el bienestar y el control metabólico, enfocado en quienes buscan una opción efectiva y natural para mantener la salud. Formulado con ingredientes 100% naturales y respaldado por la tradición milenaria de la medicina ayurvédica, Glufac combina plantas y extractos cuidadosamente seleccionados por sus propiedades beneficiosas. Cada ingrediente ha sido elegido por su capacidad para contribuir a un equilibrio saludable de los niveles de glucosa en la sangre, mejorar la digestión, y fortalecer el sistema inmunológico, ayudando al organismo a mantenerse en su mejor forma.',

    whatsGlufac2:'Este suplemento destaca porque incorpora extractos puros de plantas ayurvédicas como el Neem, Guduchi, y Methi, conocidas por su poder terapéutico y sus efectos positivos en el cuerpo humano. Los ingredientes de Glufac han sido empleados en la India durante siglos, no solo para el bienestar físico, sino también como una forma natural de mantener el balance interno y promover una vida saludable sin la necesidad de químicos sintéticos. Además, contiene un probiótico esencial que apoya la salud digestiva, lo cual es fundamental para una buena absorción de nutrientes y para fortalecer las defensas naturales del cuerpo.',

    whatsGlufac3:'Al ser un producto de origen vegetal, Glufac no contiene componentes artificiales ni aditivos dañinos, garantizando una fórmula limpia y efectiva. Esto significa que es apto para quienes buscan un estilo de vida consciente, donde el bienestar y la naturaleza se alinean en un solo producto. Cada cápsula está diseñada para ser fácil de tomar y para integrarse sin problemas en la rutina diaria, ofreciendo así un soporte constante y balanceado.',

    whatsGlufac4:'Glufac es ideal para quienes buscan una alternativa natural y respetuosa con el cuerpo que no solo se enfoca en el control de la glucosa, sino que también promueve un bienestar general. Con una filosofía centrada en la medicina ayurvédica, Glufac representa una conexión entre la ciencia ancestral y las necesidades de salud modernas, brindando un apoyo integral en cada dosis.',

    whyChoose1:'Glufac no es solo otro suplemento; es una combinación única de tradición y ciencia moderna diseñada para apoyar tu salud de manera natural y efectiva. Elaborado con ingredientes 100% naturales y respaldado por los principios de la medicina ayurvédica, Glufac ofrece una fórmula cuidadosamente equilibrada que contribuye al bienestar integral, especialmente en el control de glucosa y el fortalecimiento del sistema inmunológico.',

    whyChoose1Pt2:'Cada cápsula contiene extractos de plantas conocidas por sus potentes beneficios para la salud, lo que garantiza un enfoque completo y confiable para el bienestar. Al elegir Glufac, optas por una solución segura y sin químicos, ideal para quienes buscan opciones naturales y libres de efectos secundarios. La pureza de sus ingredientes y la calidad de su proceso de fabricación lo diferencian de otros productos en el mercado.',

    haveDiabetes:'Glufac es un suplemento 100% natural diseñado para ser su aliado en el control de los niveles de glucosa y ayudarle a llevar una vida sana y equilibrada. Basado en la medicina ayurvédica, combina ingredientes poderosos que contribuyen al bienestar integral y apoyan funciones clave como el fortalecimiento del sistema inmunológico y la digestión.',

    haveDiabetesPt2:'Gracias a su fórmula única y segura, Glufac se convierte en una opción ideal para quienes buscan alternativas naturales, sin químicos ni efectos secundarios, para apoyar su salud. Cada cápsula contiene extractos de plantas con reconocidos beneficios en el control de glucosa, aportando una forma eficaz y natural de mejorar su calidad de vida día a día, en conjunto con la ayurveda y todos sus beneficios.'
  }),
  getters: {
    getWhatsGlufac: (state) => (n: number) => {
      switch(n){
        case 1: return state.whatsGlufac1
        case 2: return state.whatsGlufac2
        case 3: return state.whatsGlufac3
        case 4: return state.whatsGlufac4
        case 5 : return state.whyChoose1
        case 6 : return state.whyChoose1Pt2
        case 7 : return state.haveDiabetes
        case 8 : return state.haveDiabetesPt2
        default : return '';
      }
    }
  }
})