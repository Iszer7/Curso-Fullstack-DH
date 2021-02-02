var express = require('express');
var router = express.Router();

let moviesAPIController = require('../../controllers/api/moviesController');

router.get('/', moviesAPIController.list);

router.get('/:id', moviesAPIController.find);

/* router.post('/', moviesAPIController.store); */

module.exports = router;
