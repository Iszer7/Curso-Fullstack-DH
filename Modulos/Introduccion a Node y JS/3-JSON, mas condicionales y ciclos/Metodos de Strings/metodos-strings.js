//Crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".

function dominio(string) {
    return 'http://www.' + string;
}

console.log(dominio("digitalhouse.com.ar"));


/*Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), 
el que queramos. Luego, utilizando la propiedad length tendremos que imprimir en consola el total de caracteres que contiene la frase. */

let texto = 'hola'
console.log(texto.length);


/*Nuestra misión ahora es crear una función llamada reemplazoFastFast que reciba un texto, una palabra a buscar y la palabra que va a reemplazar a la buscada. 
La función deberá devolver el texto con la palabra reemplazada. */

function reemplazoFastFast(texto, palabraABuscar, palabraAReemplazar) {
    return texto.replace(palabraABuscar, palabraAReemplazar);
}

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'


/*Para lograrlo tendremos que crear una función llamada menciona, que recibirá dos parámetros: 
un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. 
La misma función retorna true en el caso de encontrar la palabra. */

function menciona(texto, palabra) {
    return (texto.indexOf(palabra) >= 0)
        ? true
        : false;
}

console.log(menciona("Hola mundo","Hola"));


/*Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.
IMPORTANTE: Para la resolución tendremos que usar la función slice().*/

let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11);

console.log(licenciada);