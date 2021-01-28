const fs = require('fs');
const path = require('path');

//Lectura de acchivos
let usersJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json'), 'utf-8'));


function recordameMiddleware(req, res, next) {
    next();

    if (req.cookies.recordame != undefined && 
        req.session.usuarioLogueado == undefined) {
            let usuarioALoguearse;

            for(let i=0; i < usersJson.length; i++) {
                if (req.cookies.recordame == usersJson[i].email) {
                        usuarioALoguearse = usersJson[i];
                        break;
                }
            }

            req.session.usuarioLogueado = usuarioALoguearse;
    }
}

module.exports = recordameMiddleware;