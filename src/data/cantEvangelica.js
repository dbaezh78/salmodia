// Tiempo Pascual Semana 1 Juyeves Laudes
const tps1js_cEvangelico = "Se presentó Jesús en medio de sus discípulos y les dijo: «La paz sea con vosotros.» Aleluya.";
const tos1dmLA_cE_A = "Cristo es bautizado y el universo entero se purifica; el Señor nos obtiene el perdón de los pecados: purifiquémonos todos por el agua y el Espíritu.";
const tos1dmLA_cE_B = "A";
const tos1dmLA_cE_C = "B";

const tos2dmLA_cE_A = "El Espíritu Santo bajó del cielo como una paloma y se posó sobre Jesús.";
const tos2dmLA_cE_B = "B."; 
const tos2dmLA_cE_C = "C.";

const tos3dmLA_cE_A = "«Arrepentíos —dice el Señor—, porque se acerca el reino de Dios.»";
const tos3dmLA_cE_B = "B."; 
const tos3dmLA_cE_C = "C.";

const tos4dmLA_cE_A = "Dichosos los limpios de corazón, porque ellos verán a Dios."
const tos4dmLA_cE_B = "B."
const tos4dmLA_cE_C = "C."

const tos5dmLA_cE_A = "Vosotros sois la luz del mundo; alumbre vuestra luz a los hombres para que, viendo vuestras buenas obras, den gloria a vuestro Padre celestial."
const tos5dmLA_cE_B = ""
const tos5dmLA_cE_C = ""

const tos6dmLA_cE_A = "Si al llevar tu ofrenda al altar no estás en paz con el hermano, ve primero a reconciliarte con él; luego, presenta tu ofrenda."
const tos6dmLA_cE_B = ""
const tos6dmLA_cE_C = ""

const tos7dmLA_cE_A = ""
const tos7dmLA_cE_B = ""
const tos7dmLA_cE_C = ""

const tos8dmLA_cE_A = ""
const tos8dmLA_cE_B = ""
const tos8dmLA_cE_C = ""

const tos9dmLA_cE_A = ""
const tos9dmLA_cE_B = ""
const tos9dmLA_cE_C = ""

const tos10dmLA_cE_A = ""
const tos10dmLA_cE_B = ""
const tos10dmLA_cE_C = ""

const tos11dmLA_cE_A = ""
const tos11dmLA_cE_B = ""
const tos11dmLA_cE_C = ""

const tos12dmLA_cE_A = ""
const tos12dmLA_cE_B = ""
const tos12dmLA_cE_C = ""

const tos13dmLA_cE_A = ""
const tos13dmLA_cE_B = ""
const tos13dmLA_cE_C = ""

const tos14dmLA_cE_A = ""
const tos14dmLA_cE_B = ""
const tos14dmLA_cE_C = ""

const tos15dmLA_cE_A = ""
const tos15dmLA_cE_B = ""
const tos15dmLA_cE_C = ""

const tos16dmLA_cE_A = ""
const tos16dmLA_cE_B = ""
const tos16dmLA_cE_C = ""

const tos17dmLA_cE_A = ""
const tos17dmLA_cE_B = ""
const tos17dmLA_cE_C = ""

const tos18dmLA_cE_A = ""
const tos18dmLA_cE_B = ""
const tos18dmLA_cE_C = ""

const tos19dmLA_cE_A = ""
const tos19dmLA_cE_B = ""
const tos19dmLA_cE_C = ""

const tos20dmLA_cE_A = ""
const tos20dmLA_cE_B = ""
const tos20dmLA_cE_C = ""

const tos21dmLA_cE_A = ""
const tos21dmLA_cE_B = ""
const tos21dmLA_cE_C = ""

const tos22dmLA_cE_A = ""
const tos22dmLA_cE_B = ""
const tos22dmLA_cE_C = ""

const tos23dmLA_cE_A = ""
const tos23dmLA_cE_B = ""
const tos23dmLA_cE_C = ""

const tos24dmLA_cE_A = ""
const tos24dmLA_cE_B = ""
const tos24dmLA_cE_C = ""

const tos25dmLA_cE_A = ""
const tos25dmLA_cE_B = ""
const tos25dmLA_cE_C = ""

const tos26dmLA_cE_A = ""
const tos26dmLA_cE_B = ""
const tos26dmLA_cE_C = ""

const tos27dmLA_cE_A = ""
const tos27dmLA_cE_B = ""
const tos27dmLA_cE_C = ""

const tos28dmLA_cE_A = ""
const tos28dmLA_cE_B = ""
const tos28dmLA_cE_C = ""

const tos29dmLA_cE_A = ""
const tos29dmLA_cE_B = ""
const tos29dmLA_cE_C = ""

const tos30dmLA_cE_A = ""
const tos30dmLA_cE_B = ""
const tos30dmLA_cE_C = ""

const tos31dmLA_cE_A = ""
const tos31dmLA_cE_B = ""
const tos31dmLA_cE_C = ""

const tos32dmLA_cE_A = ""
const tos32dmLA_cE_B = ""
const tos32dmLA_cE_C = ""

const tos33dmLA_cE_A = ""
const tos33dmLA_cE_B = ""
const tos33dmLA_cE_C = ""

const tos34dmLA_cE_A = ""
const tos34dmLA_cE_B = ""
const tos34dmLA_cE_C = ""



// ====== MOTOR DE SELECCIÓN DE AÑO LITÚRGICO PARA DOMINGOS ======
// Lo asignamos a window para que cualquier archivo posterior pueda usarlo sin importar módulos
window.antifonaDomingo = function(antA, antB, antC) {
    const anioActual = new Date().getFullYear();
    
    // 2026 es Año A. Usamos el residuo (%) de 3 respecto a 2026
    const diferencia = (anioActual - 2026) % 3;
    const indice = diferencia < 0 ? diferencia + 3 : diferencia;
    
    // Devuelve la antífona correcta según el año actual
    if (indice === 0) return antA; // Año A (2026, 2029...)
    if (indice === 1) return antB; // Año B (2027, 2030...)
    return antC;                   // Año C (2028, 2031...)
};