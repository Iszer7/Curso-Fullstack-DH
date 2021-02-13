import React, { Component } from 'react';

class Gif extends Component {
  constructor() {
    super();
    this.state = {
        gif: ""
    };
  }

  apiCall(url, consecuencia) {
      fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
  }

  componentDidMount() {
      this.traerGifNuevo()
  }

  traerGifNuevo() {
      this.apiCall(
        'https://api.giphy.com/v1/gifs/random?api_key=3Q9RfJ9uN58TALnT7CD8Inix2guAW8CQ&tag=&rating=g',
        this.mostrarGif
      );
  }

  mostrarGif = (data) => {
      this.setState({
        gif: data.data.image_url,
      });
  }

  componentDidUpdate() {
      alert('tengo un gif nuevo')
  }

  render() {

    let contenido;

    if(this.state.gif == "") {
        contenido = <p>Cargando...</p>
    } else {
        contenido = <img src={this.state.gif} />
    }

    return (
      <div>
        {contenido}
        <button onClick={ () => this.traerGifNuevo() }>Random gif!</button>
      </div>
    );
  }
}

export default Gif;
