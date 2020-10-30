var express = require('express');
var router = express.Router();

//Controllers
const indexController = require('../controllers/indexController');

//Routes
router.get('/', indexController.home);
//const routerHeroes = require('..routes/heroes');

module.exports = router;
