/*Requerir módulo
Vamos a instanciar un servidor, para eso lo primero que tenemos que hacer es requerir algún que otro módulo.

Te pedimos, como primer paso, que crees la variable http y almacenes en ella el módulo http. */

const http = require('http');

http.createServer((req, res) =>  {
	console.log("Instanciando un servidor");
}).listen( 3000 , "localhost" );