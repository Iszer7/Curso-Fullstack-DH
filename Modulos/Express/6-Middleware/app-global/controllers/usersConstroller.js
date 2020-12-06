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
        
        
    }
}

module.exports = controller;