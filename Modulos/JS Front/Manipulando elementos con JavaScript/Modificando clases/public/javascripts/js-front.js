let titulo = document.querySelector("h1");
let confirmaCambios = confirm('¿Queres cambiar el color del titulo?');

if (confirmaCambios) {

    //Modifico el contenido
    titulo.innerHTML += " Soy un contenido que se agrega al final desde JS" //Si le pongo solo " = ", reemplaza todo

    //Cambiando el estilo
    titulo.style.color = 'crimson';
    titulo.style.fontSize = '50px';
}