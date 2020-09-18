/*
npm init
npm install express --save
npm install nodemon -g (-g deja en claro que quiere instalar nodemon de manera global)

nodemon = sirve para que cuando cambiamos algo del archivo, recarga el servidor automaticamente
*/

const express = require('express');

let app = express();

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

app.get('/', function(req, res) {
    res.send('Bienvenido al sitio!');
});

app.get('/contactos', function(req, res) {
    res.send('Dejanos tu contacto!');
});

app.get('/un-array', function(req, res) {
    res.send([0,1,2,3,4]);
});

app.get('/un-objeto', function(req, res) {
    res.send({name: 'Diego', edad: '23'});
});
