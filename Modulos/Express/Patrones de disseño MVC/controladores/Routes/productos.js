let expres = require('express');
let productosController = require('../controllers/productosControllers.js');
let router = expres.Router();

//Controladores con sus metodos
router.get('/:idProducto', productosController.detalle);

//Agregando el ? indicamos que el comentario al final es optativo
router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router;