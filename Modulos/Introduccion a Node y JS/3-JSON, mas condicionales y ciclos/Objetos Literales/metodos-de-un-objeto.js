//Métodos de un objeto
var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    // Método saludar
    saludar: function() {
        return "¡Hola! Mi nombre es Roger";
    }
}


//Trabajando dentro del objeto
var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    saludar: function() {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    }
}


//Construir un objeto
function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};


//Instanciar un objeto
var miAuto = new Auto('Volkswagen', 'Gol');