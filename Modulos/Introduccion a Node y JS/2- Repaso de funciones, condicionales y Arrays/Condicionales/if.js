/*Declarar una variable con el nombre dato y asignarle un valor booleano.

Luego deberás hacer un if que evalúe esa variable y, si el valor es igual a  true, que imprima por consola "es true".
Caso contrario, que imprima por consola "es false". */

let dato = false;

if(dato) {
    console.log('es true');
} else {
    console.log('es false');
}


/*En este ejercicio te damos una variable llamada lenguaje, que tiene asignado un String. 
Tu trabajo es construir un condicional if/else para que, si la variable contiene "javascript", 
imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante". */

let lenguaje = "javascript";

if(lenguaje === 'javascript') {
    console.log("Estoy aprendiendo");
} else {
    console.log("Lo aprenderé más adelante");
}


/*Completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. 
Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, 
lo dejará pasar y lo indicará retornando true. */

function puedePasar(nombre) {
    return (nombre === 'Cosme Fulanito')
        ? false
        : true;
}

console.log(puedePasar('Cosme Fulanito'));
console.log(puedePasar('Diego'));

