const fs = require('fs')
let heroes = JSON.parse(fs.readFileSync('./database/heroes.json', 'utf-8'));

heroesController = {
    home: function(req, res, next) {
        console.log('Entraste a heroes');
        res.send(heroes[0]);
      },
    detalle: function(req, res, next) {
      console.log('Entraste a detalle');
      
      let idURL = req.params.id;

      for (let i = 0; i < heroes.length; i++) {
        if(idURL == heroes[i].id) {
          res.send(heroes[i]);
        }
      }
      res.send('​No tenemos en nuestra base ningún héroe ni heroína con ese id.');
    },
    detalleProfesion: function(req, res, next) {
      console.log('Entraste a detalle profesion');

      let idURL = req.params.id;

      if(idURL < heroes.length) {
        res.send('Hola mi nombre es '+ heroes[idURL].nombre + ' y soy ' + heroes[idURL].profesion);
      } else {
        res.send('​No tenemos en nuestra base ningún héroe ni heroína con ese id.');
      }
    },
    detalleResenia: function(req, res, next) {
      

      let resenia30 = '';
      if(idURL < heroes.length && req.params.resena != undefined) {
        for(let i=0; i < heroes[i].resenia.length; i++) {
          resenia30 = resenia30 + heroes[req.params.id].resenia[i];
        }
        return (res.send(resenia30));
      }
    res.send(heroes[idURL].profesion);
    }    
}

module.exports = heroesController;