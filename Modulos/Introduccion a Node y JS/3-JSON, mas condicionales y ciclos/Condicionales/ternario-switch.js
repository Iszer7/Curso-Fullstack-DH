// if ternario

let fruta = 'Manzana'

let resultadoFruta = fruta == 'Manzana' 
                            ? 'Buenisimo, me gusta las manzanas'
                            : 'Pucha yo queria manzanas';


console.log(resultadoFruta);


//Switch

let semaforo = 'Amarillo';

switch(semaforo) {
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.warn('Precaucion');
        break;
    case 'Rojo':
        console.warn('No cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}