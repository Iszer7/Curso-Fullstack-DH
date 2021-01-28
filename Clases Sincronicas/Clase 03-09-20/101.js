// Variables
// --------

// Una variable es un lugar donde un valor puede ser almacenado


// Tipos de datos
// --------------
let numero = 1;
let string = 'hola';
let boolean = true;
let nulo = null;
let sinDefinir;


// console.log()
// -------------

console.info('Datos: \n');
console.log(numero);
console.log(string);
console.log(boolean);
console.log(nulo);
console.log(sinDefinir);
console.warn('Termino de definir');
console.error('Mira salto un error');

// Ejecución con Node
//Primero se busca la ruta del archivo con CD y luego se escribe como "node nombreArchivo.js"


// Operadores
// ----------


// Operadores Aritméticos
// =, +, -, *, /, %

// Operadores de comparación
// ==, !=, ===, !==, >, >=, <=, <

// Operadores lógicos
// && , ||

// Condicionales
// ------------------
var condicion = false;
var condicion2 = true;

if(condicion) {
    console.log('Esto es verdad en la primera condicion');
} else if(condicion2) {
    console.log('Esto es verdad en la segunda condicion');
} else {
    console.log('Ninguna de las dos');
}

// Bucles
// ------

// For
// ---
let arrayQueRecorrer = [];

for (let i = 0; i < arrayQueRecorrer.length; i++) {

}

// Funciones
// ---------

//Expresada
let funcionExpresada = function () {
    console.log('Esto es una funcion expresada');
}

//Declarada
function funcionDeclarada () {
    console.log('Esto es una funcion declarada');
}

funcionExpresada();
funcionDeclarada();
