let titulo = document.querySelector("h1");

//Modifico el contenido
titulo.innerHTML += " Soy un contenido que se agrega al final desde JS" //Si le pongo solo " = ", reemplaza todo


//Capturo el parrafo especial y le pongo algo en cursiva (innerText)
let parrafoEspecial = document.querySelector(".parrafo-especial");
//Hace lo mismo que innerHTML pero no funcionan los tags
parrafoEspecial.innerText = "Un texto con algo en <i>cursiva</i>"; 