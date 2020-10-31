var express = require('express');
var router = express.Router();
const path = require('path');

//Controllers
const mainController = require('../controllers/mainController');

//Routes
router.get('/', mainController.creditos);
//const routerHeroes = require('..routes/heroes');

module.exports = router;
