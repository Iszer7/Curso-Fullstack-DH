//Ruta GET home
const express = require('express');
const app = express();

app.get('/home', function(req, res) {
    res.send('Hola, estamos en el home');
});


//Ruta GET perfil
let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get('/perfil', function(req, res) {
    res.send(saludo);
});


//Ruta GET agregar producto
let producto = {
    tipoProducto: null ,
    precio: null,
    cantidad: null
};

app.get('/producto/agregar', function(req, res) {
    res.send(producto);
});


//Ruta POST agregar producto v2
producto.tipoProducto = 'living';
producto.precio = 1245;
producto.cantidad = 300;

app.post('/producto/crear', function(req, res) {
  res.send(producto);
});