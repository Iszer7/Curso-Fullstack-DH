/*
-Se inicializa con npm init para crear el package
-fijate en el package.json que "main" tenga el nombre correspondiente a la app
-Se instala como modulo con npm install hppt, despues se lo pide con require
-Se crea un server con createServer y dentro necesita un callback con 2 parametros, req, y res
-createServer retorna un objeto literal
-liste estucha indefinidamente al servidor otorgandole un puerto y un nombre
 */

const http = require('http');

http.createServer(function(request, response) {
    /*HTTP, necesita que escribamos encabezados
    Aca se encuentra el estado de la respuesta 200 (todo ok),
    y luego los datos del encabezado el tipo de respuesta que retorna puede ser
    texto plano, texto en html u otro */
    response.writeHead(200, {'Content-type': 'text/plain'}); //writeHead es un metodo

    switch(request.url) {
        case '/':
                response.end("Bienvenido a mi homepage");
                break;
        case '/productos':
                response.end('Estos son nuestros productos');
                break;
        default:
                response.end('Error, intente de nuevo mas tarde');
                break;
    }
    //Debe ir siempre despues de la definicion de cabeceras, writeHead
    response.end('Terminado'); //Siempre es un string, puede estar en una variable con if else etc

}).listen(3030,'localhost');

/*
al escribir  http://localhost:3030/hola  dara un error
al escribir  http://localhost:3030/productos  dira 'Estos son nuestros productos
al escribir  http://localhost:3030/  dira 'Bienvenido a mi homepage*/