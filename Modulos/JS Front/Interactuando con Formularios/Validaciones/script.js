window.addEventListener("load", function() {

    let i = 1;

    //setTimeOut ejecuta algo despues de un tiempo
    //setInterval ejecuta algo cada cierto tiempo, infinitas veces
    let repeticionVueltas = setInterval(function(){
        document.querySelector(".home-button").innerHTML = "Vuelta numero " + i
        i++;
    }, 3000) //Despues de 3 segundos se ejecuta

    //Con clearInterval para el setInterval
    document.querySelector(".home-button").onclick = function() {
        clearInterval(repeticionVueltas)
    }
})