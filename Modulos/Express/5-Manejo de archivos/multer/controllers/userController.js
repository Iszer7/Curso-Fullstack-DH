const { response } = require("express");

let userController = {
    register : function(req, res) {
        res.render('register');
    },
    create : function(req, res, next) {
        let usuario = {
            nombre : req.body.nombre,
            edad : req.body.edad,
            email : req.body.email
        }

        //Guardar los datos -> mas adelante

        res.redirect("/");
    }
}

module.exports = userController;