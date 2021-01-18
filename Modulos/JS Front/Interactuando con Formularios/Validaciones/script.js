window.addEventListener("load", function() {
    let formulario = document.querySelector('form.reservation');
    console.log(document.getElementById("name"));

    formulario.addEventListener('submit', (e) => {
        

        let errores = [];

        let campoNombre = document.getElementById("name");

        if(campoNombre.value == "") {
            errores.push('el campo de nombre tiene que estar completo')
        } else if(campoNombre.value.length < 3) {
            errores.push('el campo de nombre debe tener al menos 3 caracteres')
        }

        if(errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul');

            for(let i=0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })
    
})