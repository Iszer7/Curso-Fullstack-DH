let moduloNativo = require('http');
let moduloInstalado = require('axios');
let moduloPropio = require('./miFuncion');
let perro = require('./perro');

console.log(moduloInstalado);
console.log(moduloNativo);
console.log(moduloPropio);
console.log(`El perro se llama ${perro.nombre} y tiene ${perro.edad} años`);