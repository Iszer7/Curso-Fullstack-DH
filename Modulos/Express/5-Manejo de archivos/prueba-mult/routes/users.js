var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');
let multer = require('multer');
let path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/usuarios')
  },
  filename: function (req, file, cb) {
   
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
 
var upload = multer({ storage: storage })



/* GET users listing. */
router.get('/', userController.index);

router.get('/register', userController.register);
router.post('/register', upload.any(), userController.create);

router.get('/login', userController.login);
router.post('/login', userController.processLogin);

module.exports = router;
