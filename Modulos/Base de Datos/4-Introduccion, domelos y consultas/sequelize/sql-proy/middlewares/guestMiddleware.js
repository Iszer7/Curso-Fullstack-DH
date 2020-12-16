function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.send('Esta pagina es solo para invistados');
    }
}

module.exports = guestMiddleware;