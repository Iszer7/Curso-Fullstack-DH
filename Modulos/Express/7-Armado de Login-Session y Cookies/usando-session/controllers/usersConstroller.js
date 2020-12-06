const fs = require('fs');
const path = require('path');

//Middleware
let { check, validationResult, body } = require('express-validator');

//Lectura de acchivos
let usersJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json'), 'utf-8'));

let controller = {
    register : (req, res, next) => {
        
        res.render('register');
    },
    store : (req, res, next) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usuarioNuevo = req.body;

            usersJson.push(usuarioNuevo);
        
            fs.writeFileSync(__dirname + '/../database/users.json', JSON.stringify(usersJson));
            res.send('usuario creado');
        } else {
            return res.render('register', {errors: errors.errors});
        }
        
        
    },
    login: function(req, res, next) {
        return res.render('login');
    },
    processLogin: function(req, res, next) {
        let errors = validationResult(req);

        

        if(errors.isEmpty()) {
            //let users = usersJson;
            let usuarioALoguearse;

            for(let i=0; i < usersJson.length; i++) {
                if (usersJson[i].email == req.body.email) {
                    if(usersJson[i].password == req.body.password) {
                        usuarioALoguearse = usersJson[i];
                        break;
                    }
                }
            }
            console.log(usuarioALoguearse);

            if ( usuarioALoguearse == undefined ) {
                errors.errors.push({
                    msg: 'Credenciales invalidas'
                })

                console.log(errors);
                return res.render('login', errors);
            }

            req.session.usuarioLogueado = usuarioALoguearse;

            if (req.body.recordame != undefined) {
                res.cookie('recordame', 
                usuarioALoguearse.email, {
                    maxAge: 60000   //60 segundos
                })
            }

            res.send('success');
        } else {
            return res.render('login', {errors: errors.errors});
        }
    }
}

module.exports = controller;