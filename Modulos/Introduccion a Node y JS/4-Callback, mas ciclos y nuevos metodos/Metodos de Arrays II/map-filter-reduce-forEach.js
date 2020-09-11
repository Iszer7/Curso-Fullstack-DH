let notas = [3, 5, 8, 10, 9, 7, 8, 8];

let notasHasta100 = notas.map(function (numero) {
    return numero + 10;
});
console.log('Las notas hasta 100: ' + notasHasta100);

let notasAprobadas = notas.filter(function (numero) {
    return numero >= 4;
});
console.log('Estas notas son las aprobadas: ' + notasAprobadas);

let resultadoFinal = notas.reduce(function (estado, numero) {
    return estado + numero;     //estado empieza en 0
});
console.log('El resultado total es: ' + resultadoFinal);

notas.forEach(function (valor, indice) {
    console.log('El valor ' + valor + ' esta en el indice ' + indice);
});