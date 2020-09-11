//Destructuring para array
let colores = ['blanco', 'celeste', 'amarillo', 'rojo', 'negro'];

let [colorBlanco, colorCeleste, colorAmarillo] = colores;
console.log(colorCeleste);
console.log(colorBlanco);
console.log(colorAmarillo);


//Destructuring para objetos
let persona = {
    nombre: 'Diego',
    edad: 24,
    profesion: 'Desarollador',
    seriesFavoritas: ['Los Simpsons', 'Rick and Morty', 'Spiderman']
}

let {profesion, seriesFavoritas} = persona;
console.log(profesion);
console.log(seriesFavoritas);
