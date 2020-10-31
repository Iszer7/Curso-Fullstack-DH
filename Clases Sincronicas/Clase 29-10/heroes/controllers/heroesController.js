const path = require('path');
const {readFileSync} = require('fs');

let datosHeroes = JSON.parse(readFileSync('./database/heroes.json', 'utf-8'));

let controller = {
    index: function(req, res, next) {
        res.send(datosHeroes);
      },
      profesion: (req, res, next) => {
        /*
        let heroe = {};
        for(let i=0; i < datosHeroes.length; i++) {
          if(datosHeroes[i].id == id) {
            heroe = datosHeroes[i];
            return res.render("heroe", {
              nombre: heroe.nombre,
              profesion: heroe.profesion,
              error:""
            });
          }
        }*/
        let id = req.params.id;

        let hero = datosHeroes.find(heroe => heroe.id == id);

        let obj = {
          nombre: hero.nombre,
          profesion: hero.profesion,
          error:""
        }

        let error = `no existe un heroe con el id: ${id}`;

        if (hero == undefined) {
            return res.render("heroe", error)
        }else {
            return res.render("heroe", obj)
        } /*
        

        
        
        hero ? (res.render("heroe", obj)) : (res.render("heroe", error));*/
      },
      resenia: (req, res, next) => {
        let {id, tipo} = req.params;

        for(let i=0; i < datosHeroes.length; i++) {

          if(datosHeroes[i].id == id && tipo === "completa") {
            heroe = datosHeroes[i];
            return res.render("resenia", {
              nombre: heroe.nombre,
              resenia: heroe.resenia,
              error:""
            });

          } else if(datosHeroes[i].id == id){

            heroe = datosHeroes[i];
            let reseniaCortada = datosHeroes[i].resenia.split(" ", 30).join(" ") + "...";

            return res.render("resenia", {
              nombre: heroe.nombre,
              resenia: reseniaCortada,
              error:""
            });
          }
        }

        return res.render("resenia", {
          error:"no existe un heroe con el id: ", id
        });
      }
}

module.exports = controller;