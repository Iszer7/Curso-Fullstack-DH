const { response } = require("express");
let fs = require('fs');
let bcrypt = require('bcrypt');

let userController = {
    index : function(req, res, next) {
        let archivoUsuario = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'));
        res.render('users', {archivoUsuario});
    },
    register : function(req, res) {
        res.render('register');
    },
    create : function(req, res, next) {
        let usuario = {
            nombre : req.body.nombre,
            edad : req.body.edad,
            email : req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            imagen: req.files[0].destination.substring(8) + '/' + req.files[0].filename
        }
        console.log(req)


        let archivoUsuario = fs.readFileSync('usuarios.json', 'utf-8');
        if(archivoUsuario == "") {
            fs.writeFileSync('usuarios.json', JSON.stringify(archivoUsuario = []));
        } else {
            archivoUsuario = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'));
        }
        //Guardar los datos -> mas adelante
        archivoUsuario.push(usuario);

        let usuariosJSON = JSON.stringify(archivoUsuario);
        fs.writeFileSync('usuarios.json', usuariosJSON);
        res.redirect("/");
    },
    login : function(req, res) {
        res.render('login');
    },
    processLogin : function(req, res) {
        let archivoUsuario = fs.readFileSync('usuarios.json', 'utf-8');
        if(archivoUsuario == "") {
            fs.writeFileSync('usuarios.json', JSON.stringify(archivoUsuario = []));
        } else {
            archivoUsuario = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'));
        }

        for (let i=0; i < archivoUsuario.length; i++) {
            if (archivoUsuario[i].email == req.body.email && bcrypt.compareSync(req.body.password, archivoUsuario[i].password) ) {
                res.send('yay te logeaste');
            }
        }
        res.send('error');
    }
}

module.exports = userController;