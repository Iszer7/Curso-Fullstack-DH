//Tu tarea aquí es crear una función que se va a llamar ejemplo y tiene que devolver un String diciendo "hola, soy una función".

function ejemplo() {
    return 'hola, soy una función'
}

console.log(ejemplo());


//Crear una función con el nombre ejemplo. La misma debe retornar un String que diga: "hola, soy una función expresada".

var ejemplo = function() {
    return 'hola, soy una función expresada'
}

console.log(ejemplo());


//Funciones con parámetros

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log(saludar('Diego', 'Kippes'));


//Crea la función esPar. Esta debe recibir un número como parámetro y deberá devolver un boolean (true/false) indicándonos si ese número es divisible por dos.

function esPar (numero) {
    return (numero % 2 === 0) 
        ? true
        : false;
}

console.log(esPar(1));


/*Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, 
tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno). */

function anterior (numero) {
    return numero - 1;
}

function triple (numero) {
    return numero * 3;
}

function anteriorDelTriple (numero) {
    return triple(numero) - 1;
}

console.log(anterior(10));
console.log(triple(10));
console.log(anteriorDelTriple(10));