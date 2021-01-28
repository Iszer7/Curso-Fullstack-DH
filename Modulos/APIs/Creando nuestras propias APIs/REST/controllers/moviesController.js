const { Sequelize } = require("../database/models");
let db = require("../database/models");
let sequelize = db.sequelize;

let moviesController = {
    list: function(req, res, next) {
        
        db.Peliculas.findAll({
            include: [{association: "generos"}, {association: "actores"}]
        })
            .then(function(peliculas) {
                console.log(peliculas[0].actores[0].first_name);
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
        res.render("crearPelicula");
    },
    create: function(req, res, next) {
        console.log(req.body);
        db.Peliculas.create({
            title: req.body.title, 
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        });


        res.redirect("/movies");
    },
    edit: function(req, res, next) {
        db.Peliculas.findByPk(req.params.id)
            .then(function(pelicula){
                res.render("editarPelicula", {pelicula: pelicula})
            })
    },
    update: function(req, res, next) {
        db.Peliculas.update(
            {
            title: req.body.title, 
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.redirect("/movies/edit/" + req.params.id);
    },
    delete: function(req, res, next) {
        db.Peliculas.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.redirect("/movies");
    }
}

module.exports = moviesController;