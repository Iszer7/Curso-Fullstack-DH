//JSON con 2 metodos que nos permiten convertir el formato de un archivo JSON a objeto literal o array, y viceversa

let amigos = ['Alan', 'Pablo', 'Dani', 'Ivo'];

//Stingify convierte de un array a cadena de string
let amigosJSON = JSON.stringify(amigos);

console.log(amigosJSON);

//Parse convierte de un texto JSON a un array
let amigosOriginal = JSON.parse(amigosJSON);

console.log(amigosOriginal);