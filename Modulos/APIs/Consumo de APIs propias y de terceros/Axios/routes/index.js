var express = require('express');
var router = express.Router();
let gifResource = require('../requests/gifResource');

/* GET home page. */
router.get('/', function(req, res, next) {
  gifResource.random().then(function(results){
    console.log(results);
  })

  res.render('index', { title: 'Express' });
});

router.get('/pruebaSession', function(req, res, next) {
  if(req.session.numeroVisitas == undefined) {
    req.session.numeroVisitas = 0;
  }
  req.session.numeroVisitas++;

  res.send('Session tiene el numero: ' + req.session.numeroVisitas);
})


module.exports = router;
