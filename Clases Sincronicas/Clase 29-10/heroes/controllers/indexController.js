indexController = {
    home: function(req, res, next) {
        console.log('Entraste a home');
        res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.');
      }
}

module.exports = indexController;