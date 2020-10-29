let express = require('express');
let rutasProductos = require('./Routes/productos.js');
let rutasMain = require('./Routes/main.js');

let app = express();

app.listen(3000, () => console.log('Esto fue un exito'));

//Para  todo lo que sea la ruta 
app.use('/productos', rutasProductos);
app.use('/', rutasMain);

