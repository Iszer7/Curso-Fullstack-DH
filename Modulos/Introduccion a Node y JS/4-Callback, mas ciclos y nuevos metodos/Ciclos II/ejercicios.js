//for in -> para objetos
let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}


//For of -> para arrays o strings
let hola = 'hola';

for (const caracteristicas in bart) {
    console.log(bart[caracteristicas]);
}

