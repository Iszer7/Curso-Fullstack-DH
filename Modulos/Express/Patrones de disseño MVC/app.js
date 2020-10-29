let express = require('express');

let app = express();

app.listen(3000, () => console.log('Esto fue un exito'));

app.get('/', function(req, res) {
    res.send(('Bienvenido al sitio'));
});

app.get('/contacto', function(req, res) {
    res.send(('Dejanos tu contacto'));
});

app.get('/productos/:idProducto', function(req, res) { 
    res.send('Bienvenidos al detalle del producto ' + req.params.idProducto);
});

//Agregando el ? indicamos que el comentario al final es optativo
app.get('/productos/:idProducto/comentarios/:idComentario?', function(req, res) {

    if (req.params.idComentario == undefined) {
        res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
    } else {
        res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto + " y estas enfocado en el comentario " + req.params.idComentario);
    }
});

let series= ['hola', 'chau', 'adeos'];

app.get('/serie/:id', function(req, res) {
    series.forEach(function(serie) {
        if(serie.id == req.params.id) {
            return res.send(serie);
        }
    });
});