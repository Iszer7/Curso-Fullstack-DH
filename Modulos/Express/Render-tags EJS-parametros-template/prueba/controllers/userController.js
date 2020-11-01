

let userController = {
    'register': function(req, res) {
        res.render('register');
    },
    'login': function(req, res){
        res.render('login');
    },
    list: function(req, res) {
        let users = [
            'Diego',
            'Dario',
            'Maru'
        ];

        res.render('userList', {'usuarios': users});
    }
}

module.exports = userController;