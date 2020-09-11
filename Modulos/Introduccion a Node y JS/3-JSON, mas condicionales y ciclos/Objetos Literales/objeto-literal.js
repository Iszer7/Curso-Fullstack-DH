let curso = {
    //Propiedades
    cantidad_de_alumnos: 32,
    docentes: 'Diego, Pepe',
    horario: '8.30 a 12hs',
    //Metodos son funciones
    notificaciones: function() {
        return 'El horario de tu comisión es: ' + this.horario;
    }
}

//Funcion constructora, para poder construir mas cursos
function Cursos(cantidad_de_alumnos, docentes, horario) {
    this.cantidad_de_alumnos = cantidad_de_alumnos,
    this.docentes = docentes,
    this.horario = horario
}


//Creando nuevos Objetos Cursos
let curso_1 = new Cursos(25, 'Pablo, Fidel', '18.30 a 22hs');


console.log(curso);
console.log('\n');
console.log(curso_1);
console.log('\n');

console.log('La cantidade alumnos de este curso es de: ' + curso.cantidad_de_alumnos);

console.log(curso.notificaciones());