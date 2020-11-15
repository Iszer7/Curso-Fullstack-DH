let express = require('express');

let app = express();

app.listen(3000, () => console.log('Server up'));

app.get('/', function(req, res) {
    res.send('Bienvenidos al home del sitio');
});

app.get('/contacto', function(req, res) {
    res.send('Dejanos tu contacto');
});

app.get('/productos/:idProduct', function(req, res) {
    res.send('Bienvenidos al detalle del producto ' + req.params.idProduct);
});


app.get('/productos/:idProduct/comentarios/:idComentarios?', function(req, res) {
    if (req.params.idComentarios == undefined) {
        res.send('Bienvenidos a los comentarios ' + req.params.idProduct);
    } else {
        res.send('Bienvenidos a los comentarios ' + req.params.idProduct + " y estas enfocado en el comentario " + req.params.idComentarios);
    }
    
});