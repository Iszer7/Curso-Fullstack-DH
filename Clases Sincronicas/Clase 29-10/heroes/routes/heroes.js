var express = require('express');
var router = express.Router();
const path = require('path');


//Controllers
const heroesController = require(path.resolve(__dirname, '../controllers/heroesController'));

//Routes
router.get('/', heroesController.index);

router.get('/:id/profesion', heroesController.profesion);

router.get('/:id/resenia/:tipo?', heroesController.resenia);

module.exports = router;
