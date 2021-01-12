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

})