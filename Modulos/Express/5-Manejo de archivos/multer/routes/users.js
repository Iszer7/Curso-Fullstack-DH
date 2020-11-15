var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');
let multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
var upload = multer({ storage: storage })



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register);
router.post('/register', upload.any(), userController.create);

module.exports = router;
