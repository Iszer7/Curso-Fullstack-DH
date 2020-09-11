//While
function count(desde, hasta) {
    while(desde < hasta) {
        console.log("El número actual es " + desde + " y es menor a " + hasta);
        desde++;
    }
}
count(4,6);


//Do While
function encontreUn5(numeros) {
    let i=0;
  
    do {
        console.log(numeros[i]);
        i++;
        if(numeros[i] == 5) {
            return console.log("Se encontró un 5!");
        }
    }while(i <= numeros.length)
}

encontreUn5([4,3,7,1,5,9,3,6,7]);


//While
function tablaDeMultiplicar(numero) {
	let i=1;

 	while(i <= 10) {
		 console.log(numero + " * " + i + " = " + numero*i);
		 i++;
	 }
}

tablaDeMultiplicar(6);