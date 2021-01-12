window.addEventListener("load", function() {

    let botones = document.querySelectorAll(".w3-button");

    //Recorro todos los botones
    for (let i=0; i < botones.length; i++) {
        //click => Se ejecuta al clickear
        //mouseover => Se ejecuta apenas pasa el mouse por arriba
        //mouseout => Se ejecuta apenas se va del eleymento
        botones[i].addEventListener("mouseover", function() {
            //this hace referencia al lugar donde fue el evento, poner botones[i] no funcionaria
            this.style.color = prompt("Elija su color preferido (ingles)");
        })
    }

    //keydown => se lanza cuando la tecla es perecionada hacia abajo (sirve para las que producen un caracter y las que no lo producen)
    //keyup => Se ejecuta cuando la tecla es soltada
    //keypress => Se ejecuta cuando se completo la presion y liberacion de la tecla
    window.addEventListener("keypress", function(e) {
        //Si toco el espacio se ejecuta esta condicion
        //e.key devuelve la letra
        if(e.key == " ") {
            alert("Tocaste el enter")
        }

        if(e.key == "a") {
            alert("Tocaste la A")
        }
    })

})