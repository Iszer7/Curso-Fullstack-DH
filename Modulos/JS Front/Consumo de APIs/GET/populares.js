window.addEventListener('load', () => {

    //Esto es METHOD GET
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=3Q9RfJ9uN58TALnT7CD8Inix2guAW8CQ&limit=25&rating=g")
        .then((respuesta) => {
            //Devuelve el JSON
            return respuesta.json();
        })
        .then((informacion) => {
            //Da la informacion de la API
            console.log(informacion.data);

            for(let i=0; i < informacion.data.length; i++) {

                let gif = "<p>" + informacion.data[i].title + "</p>";
                gif += "<img src=" + informacion.data[i].images.original.url + ">"
                
                document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"
            }
        })
        .catch((errores) => {
            console.log(errores);
        })
})