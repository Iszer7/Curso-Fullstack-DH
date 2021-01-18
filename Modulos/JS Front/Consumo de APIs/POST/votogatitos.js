window.onload = () => {
    //Armar informacion que queremos enviar, objeto literal - lo que espera la api
    let data = {
        image_id: "asf2",
        sub_id: "my-user-1234",
        value: 1
    }

    //hay que aclarar el metodo y el body como minimo, a veces no es necesario los headers pero puede fallar si no lo tiene
    let settings = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-api-key": "89d0ffa5-5d01-42d0-b830-ab273474edad"
        },
        "body": JSON.stringify(data)
    }

    //Como segundo parametro van las configuraciones
    fetch("https://api.thecatapi.com/v1/votes", settings)
        .then((response) =>{
            return response.json();
        })
        .then((info) => {
            console.log(info);
        })
        .catch((error) => {
            console.log(error);
        })
}