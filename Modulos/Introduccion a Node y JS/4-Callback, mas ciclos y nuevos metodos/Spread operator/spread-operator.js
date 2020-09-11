//Spread operator : ... -> para agrupar arrays
let frutasUno = ['banana', 'pera', 'manzana'];
let frutasDos = ['durazno', 'ciruela', 'naranja'];

let todasLasFrutas = [...frutasUno, ...frutasDos];
console.log(todasLasFrutas);


//En objetos literales
let cursada = {
    curso: 'Fullstack',
    turno: 'Mañana',
    sede: 'Belgrano'
};

let estudianteUno = {
    nombre: 'Diego',
    email: 'kippes.diego@gmail.com',
    ...cursada
};
console.log(estudianteUno);


//para N cantidad de parametros, los mete en un array
function conVariosParametros (...variosParametros) {
    return variosParametros;
}
console.log(conVariosParametros('a','b', 1));