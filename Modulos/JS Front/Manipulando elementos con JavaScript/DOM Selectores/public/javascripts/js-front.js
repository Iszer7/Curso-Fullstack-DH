let elH1 = document.querySelector("h1"); //Devuelve un nodo
console.log(elH1);

//Se puede capturar a traves de una clase
let navBar = document.querySelector(".nav-bar"); //Si no existe esa clase devuelve "null"
console.log(navBar);

//Capturar a todos los elementos que coincidan
let losParrafos = document.querySelectorAll("p"); //Devuelve un NodeList -> es como un array
console.log(losParrafos);

//Recorremos todos los parrafos
for (const unParrafo of losParrafos) {
    console.log(unParrafo);
}

//Agarrando el strong de un parrafo
let strong = document.querySelector('.parrafo-especial strong');
console.log(strong);

//Capturar un ID
let imagen = document.getElementById("logo-node");
console.log(imagen);