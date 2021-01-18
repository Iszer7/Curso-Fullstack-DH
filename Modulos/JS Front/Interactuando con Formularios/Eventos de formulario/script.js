window.addEventListener('load', function() {
    let campoNombre = document.querySelector(".name");
    let form = document.querySelector('.form');

    //Se ejecuta cada vez que clickeo en el campo (cada vez que hace foco en el campo)
    //Cada vez que una persona esta por completar el campo, osea hace click
    campoNombre.addEventListener("focus", function() {
        window.alert('ingresaste el cursor al campo: focus')
    })

    //Se ejecuta cuando saca el "foco" del campo, osea estoy en el campo y luego lo saco o clickeo en otra parte y se ejecuta
    //Ideal cuando termino de completar un campo
    campoNombre.addEventListener("blur", function() {
        window.alert('saliste del campo: blur')
    })

    //Va a detectar un cambio en el html de ese campo
    campoNombre.addEventListener("change", function() {
        window.alert('hubo un cambio por aca: change')
    })

    //Cuando el formulario se envia que pase algo preventDefault hace que no se envie el formulario
    form.addEventListener("submit", function(e) {
        window.alert('el formulario se esta por enviar: submit');
        e.preventDefault()
        
    })
})