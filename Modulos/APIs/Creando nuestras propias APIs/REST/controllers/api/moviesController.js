let db = require("../../database/models");

let moviesController = {
    list: function(req, res) {
        
        db.Peliculas.findAll({
            include: [{association: "generos"}, {association: "actores"}]
        })
            .then(function(peliculas) {

                for(let i=0; i < peliculas.length; i++) {
                    peliculas[i].setDataValue("endpoint", "/api/movies/" + peliculas[i].id)
                }

                let respuesta = {
                    meta: {
                        status: 200,
                        total: peliculas.length,
                        url: "api/movies"
                    },
                    data: peliculas
                }

                res.json(respuesta);
            });

    },

    find: (req, res) => {
        db.Peliculas.findByPk(req.params.id, {
            include: [{association: "generos"}, {association: "actores"}]
        }).then(function(pelicula) {
            res.json(pelicula);
        })
    }/* ,

    store: function(req, res, next) {
        
        db.Peliculas.create({
            title: req.body.title, 
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        });


        res.send({
            status: 200
        });
    } */
}

module.exports = moviesController;