window.addEventListener('load', () => {
    //localStorage es por navegador - se puede recuperar en otra pagina
    //sessionStorage se pierde en el momento que se cierra el navegador
    console.log(sessionStorage);
    

    if(localStorage.getItem("nombreUsuario") == null) {
        localStorage.removeItem("nombreUsuario")
        let nombre = this.prompt("Dinos tu nombre: ");
        document.querySelector('.bienvenida').innerHTML = "Hola " + nombre;
    
        this.localStorage.setItem("nombreUsuario", nombre);
        
    } else {
        let nombre = localStorage.getItem("nombreUsuario")
        document.querySelector('.bienvenida').innerHTML = "Hola " + nombre;
    }
    //localStorage.clear() //Limpia lo que tiene el localstorage
    console.log(localStorage);
})