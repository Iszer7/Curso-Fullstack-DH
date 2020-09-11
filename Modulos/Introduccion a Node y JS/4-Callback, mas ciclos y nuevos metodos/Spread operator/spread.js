//Para juntar arrays
let peliculasAccion = ['Rambo', 'Avengers', 'Spiderman'];

let peliculasComedia = ['Mi pobre angelito', 'The hangover'];

let todasLasPelis = [...peliculasAccion, ...peliculasComedia];
console.log(todasLasPelis);


//con objetos
let generoComedia = {
    nombreGenero: 'Comedia',
    popularidad: 3
};

let miPobreAngelito = {
    titulo: 'Mi pobre angelito',
    ranking: 1,
    duracion: 120,
    ...generoComedia
}

let theHangover = {
    titulo: 'The Hangover',
    ranking: 3,
    duracion: 135,
    ...generoComedia
}
console.log(miPobreAngelito);
console.log(theHangover);


//Rest, es lo mismo que spread operator pero se usa en una funcion no durante su ejecucion
function limpiarEspacios(...palabras) {
    
    for (let i=0; i < palabras.length; i++) {
        palabras[i] = palabras[i].trim();
    }
    
    return palabras;
}

let p1 = limpiarEspacios('       hola       ', 'que ', 'tal        ');
let p2 = limpiarEspacios('hola  ', '     mundo       ');
console.log(p1);
console.log(p2);