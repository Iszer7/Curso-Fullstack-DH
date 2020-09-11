//for In para objetos
let persona = {
    nombre: 'Alan',
    apellido: 'Rios',
    edad: 28
};

for (const llave in persona) {
    console.log('En el atributo ' + llave + ' se encuentra el valor ' + persona[llave]);
}


//for Of para array u strings
let notas = [7, 6, 10, 6, 3, 2];

for (const elemento of notas) {
    console.log(elemento);
}