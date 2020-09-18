const express = require('express');

let app = express();

//para crear un server, ponemos el puerto, y optativamente podes  hacer un callback y un log indicando que funciona (es una buena practica)
app.listen(3000, () => {
    console.log('Servidor andando');
});

//Cuando escribo http://localhost:3000/  va a devolver:
app.get('/', function(req, res) {
    res.send('Bienvenidos al sitio');
});

//Cuando escribo http://localhost:3000/productos  va a devolver:
app.get('/productos', function(req, res) {
    res.send('Estos son nuestros productos');
});