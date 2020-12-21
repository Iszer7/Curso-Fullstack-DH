let db = require("../database/models");

let peliculasController = {
    crear: function(req, res, next) {
        db.Genero.findAll()
            .then(function(generos){
                return res.render("creacionPeliculas", {generos:generos});
            })
    },
    guardado: function(req, res, next) {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        });

        res.redirect("/peliculas");
    },
    listado: function(req, res, next) {
        db.Pelicula.findAll()
            .then(function(peliculas) {
                res.render("listadoPeliculas", {peliculas:peliculas});
            })
    },
    detalle: function(req, res, next) {
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "actores"}]
        })
            .then(function(pelicula) {
                res.render("detallePelicula", {pelicula:pelicula})
            })
    },
    editar: function(req, res, next) {
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function([pelicula, generos]) {
                res.render("editarPelicula", {pelicula:pelicula, generos:generos});
            })
    },
    actualizar: function(req, res, next) {
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/peliculas/" + req.params.id);
    },
    borrar: function(req, res, next) {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/peliculas")
    }

    
}

module.exports = peliculasController;