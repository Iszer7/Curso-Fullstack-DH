var express = require('express');
var router = express.Router();

//Controlador
let userController = require('../controllers/userController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Rutas
router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/list', userController.list);

module.exports = router;
