let mainController = {
    index: (req, res, next) => {
        res.render('index');
    },
    contact: (req, res, next) => {
        res.render('contacto');
    }
}

module.exports = mainController;