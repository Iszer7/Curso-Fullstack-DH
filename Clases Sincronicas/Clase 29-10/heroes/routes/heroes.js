var express = require('express');
var router = express.Router();


//Controllers
const heroes = require('../controllers/heroesController');

//Routes
router.get('/', heroes.home);
router.get('/:id', heroes.detalle);
router.get('/:id/:profesion?', heroes.detalleProfesion);
router.get('/:id/:resenia?', heroes.detalleResenia);
//const routerHeroes = require('..routes/heroes');

module.exports = router;
