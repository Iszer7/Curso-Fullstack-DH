function loro(texto) {
    for(let i=0; i<5; i++) {
        console.log(texto);
    }
}

loro('Hola como estas');

function noParesDeContarImparesHasta(numero){
    let impares=0;
       for (let i=0; i < numero; i++){
           if (i%2 != 0){
           impares++;
           }    
       }
       return impares;
    }
    
console.log('La cantidad de impares es: ' + noParesDeContarImparesHasta(15));