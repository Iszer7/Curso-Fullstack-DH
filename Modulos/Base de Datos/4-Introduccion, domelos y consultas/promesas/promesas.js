let funcionesAync = require('./funciones.js');

funcionesAync.obtenerDatos()
    .then(function(resultado){
        return funcionesAync.filtrarMayoresDeEdad(resultado)
    })
    .then(function(filtrados){
        console.log(filtrados);
    })
    .catch(function(error){
        console.log(error);
    })