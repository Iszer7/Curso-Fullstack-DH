let fechaActual = new Date();

//Nos da la fecha actual directo
console.log(fechaActual);

//Un string describiendo un poco mejor la fecha
console.log(fechaActual.toUTCString());

//getYear da el año desde 1900 -> no se suele usar
console.log(fechaActual.getYear());

//getFullYear
console.log(fechaActual.getFullYear());

//Month -> va de 0 a 11, 0 es Enero
console.log(fechaActual.getMonth());

//getDate -> da el numero del dia del mes
console.log(fechaActual.getDate());

//getDay -> da el numero de la semana, 0 es Domingo, 1 Lunes..
console.log(fechaActual.getDay());


//Un ejemplo
let diaDeLaSemana = fechaActual.getDay();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('Es el ' + dia + ' de ' + meses[mes] + ' de ' + anio);

//Para crear nuestra propia fecha
let fechaATomar = new Date(1990, 10, 3); //3 de Septiembre de 1990
