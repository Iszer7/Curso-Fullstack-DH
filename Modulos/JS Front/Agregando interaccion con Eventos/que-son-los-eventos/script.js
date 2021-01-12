window.addEventListener("load", function() {

    //Agarro la clase home-button
    let homeButton = document.querySelector(".home-button");

    homeButton.addEventListener("click", function() {
        alert("Tocaste el boton");
    })

    //Agarro la clase about-button
    let aboutButton = document.querySelector(".about-button");

    aboutButton.addEventListener("click", function(e) {
        e.preventDefault() //Cancela el comportamiento por defecto que tiene el HTML

        console.log(this); //Nos indica en donde sucedio el evento

        alert("Quisiste saber sobre el about");
    })
})