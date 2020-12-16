var express = require('express');
var router = express.Router();
var usersConstroller = require('../controllers/usersConstroller');
let fs = require('fs');
let path = require('path');

//Middleware
let logDbMiddleware = require('../middlewares/logDBMiddleware');
let { check, validationResult, body } = require('express-validator');
let guestMiddleware = require('../middlewares/guestMiddleware');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('respond with a resource');
});

router.get('/register', guestMiddleware, usersConstroller.register);

router.post('/register', logDbMiddleware, [
  check('username').isLength().withMessage('Este campo debe estar completo'),
  check('email').isEmail().withMessage('El email debe ser un email valido'),
  check('nombre'),
  check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
  check('age').isInt({min: 0}).withMessage('La edad debe ser mayor a cero'),
  body('email').custom(function(value) {
    let usersJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json'), 'utf-8'));

    for (let i=0; i < usersJson.length; i++) {
      if (usersJson[i].email == value) {
        return false;
      }
    }

    return true;
  }).withMessage('Usuario ya existente')
], usersConstroller.store);

router.get('/login', usersConstroller.login);
router.post('/login', [
  check('email').isEmail().withMessage('Email invalido'),
  check('password').isLength({min: 8}).withMessage('La contraseña deve tener al menos 8 caracteres')
], usersConstroller.processLogin);

router.get('/check', function(req, res) {
  if (req.session.usuarioLogueado == undefined) {
    res.send('No estas logeado')
  } else {
    res.send('El usuario logueado es ' + req.session.usuarioLogueado.email)
  }
})

module.exports = router;
