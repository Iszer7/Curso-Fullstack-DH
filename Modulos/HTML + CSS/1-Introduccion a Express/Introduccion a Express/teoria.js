/*
npm init -y
fijate en el package.json que "main" tenga el nombre correspondiente a la app
npm install express --save, el --save actualiza nuestro archivo .json y lo agrega a dependencies
*/

const express = require('express'); //express es un funcion el cual tiene diferentes metodos
//Lo ponemos en una variable para darle uso a su ejecucion y tener sus metodos, ya que es un objeto
let app = express();

/*Se puede usar estos metodos con express
app.get()
app.post(
app.put()
app.patch()
app.delete()
 */