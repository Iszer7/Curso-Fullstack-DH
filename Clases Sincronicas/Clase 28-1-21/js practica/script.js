window.addEventListener('DOMContentLoaded', () => {
    let ArrayBotones = document.querySelectorAll('.btn');
    let inputResultado = document.getElementById('show');

    
    for(let i=0; i < ArrayBotones.length; i++) {
        ArrayBotones[i].addEventListener('click', () => {

            if(ArrayBotones[i].textContent == "=") {
                inputResultado.value = eval(inputResultado.value);
            } else {
                inputResultado.value += ArrayBotones[i].textContent;
            }

        })
    }

    
})