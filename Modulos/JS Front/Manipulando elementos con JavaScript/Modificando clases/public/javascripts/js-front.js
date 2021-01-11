let titulo = document.querySelector("h1");
titulo.innerHTML += " Soy un contenido que se agrega al final desde JS" //Si le pongo solo " = ", reemplaza todo

//classList - No devuelve nada si no tiene ninguna clase
console.log(titulo.classList);

//Objeto classList - Agregar una clase que esta en el style
titulo.classList.add('titulo-destacado');

//Objeto classList - Sacar una clase
let confirmarEliminarClase = confirm('Queres eliminar la clase del titulo?');

if (confirmarEliminarClase) {
    //La clase se elimina del h1, entonces no va aparecer en el html
    titulo.classList.remove('titulo-destacado');
}

//Objeto classList - Toggle -> Sirve para Agregar o Sacar una clase preguntando.. existe esta clase? Si existe no la agrega sino la agrega
//titulo.classList.toggle('titulo-destacado');


//Si el elemento contine una clase
titulo.classList.contains("titulo-destacado"); //Devuelve true o false