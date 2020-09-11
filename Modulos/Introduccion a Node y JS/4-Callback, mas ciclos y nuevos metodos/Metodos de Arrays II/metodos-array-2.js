//Estos metodos se usan con callback (map, filter, reduce, forEach)

//Map
let numeros = [2,4,6];

let dobleDeLosNumeros = numeros.map(function (unNumero) {
    return unNumero * 2;
});
console.log('El doble de los numeros son: ' + dobleDeLosNumeros); //4, 8, 12


//filter
let edades = [20,6,3,17,18,66,7];

let mayores = edades.filter(function (unaEdad) {
    return unaEdad >= 18;
});
console.log('Las edades mayores a 18 son: ' + mayores);


//reduce
let resultado = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero;
});
console.log('El resultado total del array de numeros es: ' + resultado); // 2 + 4 + 6


//forEach
let paises = ['Argentina', 'Brasil', 'Colombia'];

paises.forEach(function (unPais) {
    console.log(unPais);
});