//Un callback es una funcion que se pasa como parametro de otra funcion
let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;

let operacionMatematica = (n1, n2, operacion) => operacion(n1, n2);

console.log(operacionMatematica(5, 3, restar));