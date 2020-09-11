//Si es un solo parametro no hace falta escribirlo entre (), y si es una sola linea de codigo no hace falta poner {} ni escribir return
let laMitad = numero => numero / 2;
console.log(laMitad(6));    //3


let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20,4)); //5


let tengoQueTrabajar = dia => {
    if (dia === 'Sabado' || dia === 'Domingo') {
        return 'No tenes que trabajar';
    } else {
        return 'Si, tenes que ir a trabajar!';
    }
}

console.log(tengoQueTrabajar('Lunes'));



// Función convencional

function sumar(n1, n2) {
    return n1 + n2
}

// Arrow function

let sumar = (n1, n2) => { n1 + n2 }