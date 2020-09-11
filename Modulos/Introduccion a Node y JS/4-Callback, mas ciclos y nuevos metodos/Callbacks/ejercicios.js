//Aplicando callbacks
function doble (numero) {
    return numero*2;
}

function triple(numero) {
    return numero * 3;
}

function apply(numero, callback) {
    return callback(numero);
}

console.log('El doble es: ' + apply(2, doble));
console.log('El triple es: ' + apply(4, triple));


//Calculadora
let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, callback) => callback(numero1, numero2);

console.log('El suma es: ' + calculadora(1 ,2, suma));
console.log('El resta es: ' + calculadora(1 ,2, resta));
console.log('El multiplicacion es: ' + calculadora(1 ,2, multiplicacion));
console.log('El division es: ' + calculadora(1 ,2, division));


//Pasando un callback reloaded
let agregarHttp = url => "http://" + url;

function procesar(listaURLS, callback){
    let listaNueva = []
    for(let i=0; i < listaURLS.length; i++) {
        listaNueva.push(callback(listaURLS[i]));
    }
    return listaNueva;
}

console.log(procesar(["www.google.com", "www.facebook.com", ""] , agregarHttp));