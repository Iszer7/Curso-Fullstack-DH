let fs = require('fs');
let moment = require('moment');

//console.log(fs);

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');              //Permite leer un archivo

console.log(datos);

//Libreria de fechas
console.log(moment().format('MMM Do YYYY'));                   //formato quiere que se imprima la fecha actual
console.log(moment().format('MMM DO YYYY'));
console.log(moment().format('MM Do YY'));