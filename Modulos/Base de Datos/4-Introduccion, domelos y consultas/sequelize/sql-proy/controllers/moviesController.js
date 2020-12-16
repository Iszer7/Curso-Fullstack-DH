const { Sequelize } = require("../database/models");
let db = require("../database/models");
let sequelize = db.sequelize;

let moviesController = {
    list: function(req, res, next) {
        
        sequelize.query(
            "SELECT * FROM movies"
        ).then(function(resultados) {
            //La posicion 0 es la que tiene los ressultados reales de la promesa
            let peliculas = resultados[0];

            res.render("listadoDePeliculas", {peliculas:peliculas});
        });

    },
    detail: function(req, res, next) {
        db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula) {
                res.render("detallePelicula", {pelicula:pelicula});
            });
    },
    drama: function(req, res, next) {
        db.Peliculas.findAll({
            where: {
                genre_id: 3
            }
        })
            .then(function(peliculas) {
                res.render("peliculasDrama", {peliculas:peliculas});
            });
    },
    top: function(req, res, next) {
        db.Peliculas.findAll({
            where: {
                rating: { [db.Sequelize.Op.gt] : 8 }
            },
            order: [
                ['rating', "ASC"]
            ],
            limit: 5
        })
            .then(function(peliculas) {
                res.render("top", {peliculas:peliculas});
            });
    },
    totalTime: function(req, res, next) {
        db.Peliculas.sum("length")
            .then(function(resultado) {
                console.log(resultado);
            })
        res.send("El tiempo total esta en la consola");
    },
    add: function(req, res, next) {

    },
    create: function(req, res, next) {

    },
    delete: function(req, res, next) {

    }
}

module.exports = moviesController;