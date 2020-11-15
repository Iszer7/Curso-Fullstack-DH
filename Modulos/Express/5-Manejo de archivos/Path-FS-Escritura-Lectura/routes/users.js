var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register', userController.create);

router.get('/login', userController.login);
router.get('/list', userController.list);
router.get('/search', userController.search);

router.get('/edit/:idUser', userController.edit);
router.put('/edit', function(req, res) {
  res.send('fui por put');
});
router.delete('/delete/:idUser', function(req, res) {
  res.send('borrado man!');
});

module.exports = router;
