const { response } = require("express");

let userController = {
    register : function(req, res) {
        res.render('register');
    },
    login : function(req, res) {
        res.render('login');
    },
    list : function(req, res) {
        let users = [
            {id: 1, name:'Diego'},
            {id: 2, name:'Dani'},
            {id: 3, name:'Yas'},
            {id: 4, name:'Santi'},
            {id: 5, name:'Eva'}
        ];

        res.render('userList', {'users': users});
    },
    search : function(req, res) {
        let loQueBuscoElUsuario = req.query.search;

        let users = [
            {id: 1, name:'Diego'},
            {id: 2, name:'Dani'},
            {id: 3, name:'Yas'},
            {id: 4, name:'Santi'},
            {id: 5, name:'Eva'}
        ];

        let usersResults = [];

        for(let i=0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
        }

        res.render('userResults', {usersResults : usersResults});
    },
    create : function(req, res) {
        let usuario = {
            nombre : req.body.nombre,
            edad : req.body.edad,
            email : req.body.email
        }

        //Guardar los datos -> mas adelante

        res.redirect("/users/list");
    },
    edit : function(req, res) {
        let idUser = req.params.idUser;

        let users = [
            {id: 1, name:'Diego'},
            {id: 2, name:'Dani'},
            {id: 3, name:'Yas'},
            {id: 4, name:'Santi'},
            {id: 5, name:'Eva'}
        ];

        let userToEdit = users[idUser];

        res.render("userEdit", {userToEdit : userToEdit});
    }
}

module.exports = userController;