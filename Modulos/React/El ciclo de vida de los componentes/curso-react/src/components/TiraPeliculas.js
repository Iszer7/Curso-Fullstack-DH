import React, { Component } from 'react';
import Pelicula from './Pelicula/Pelicula';

class TiraPeliculas extends Component {

  lanzarAlerta() {
    alert('me clickeaste');
  }

  cambiarAmarillo() {
    document.querySelector('body').style.backgroundColor = "yellow"
  }

  cambiarRosa() {
    document.querySelector('body').style.backgroundColor = 'pink';
  }

  render() {
    return (
      <div onClick={ this.lanzarAlerta } onMouseOver={ this.cambiarAmarillo } onMouseOut={ this.cambiarRosa}>
        <Pelicula
          generos={['Fantasia', 'Aventuras']}
          titulo="Harry Potter"
          rating={9.0}
        />
        <Pelicula titulo="Titanic" rating={3.4} />
        <Pelicula
          generos={['Accion', 'Comedia', 'Pochoclera']}
          titulo="Transformers"
          rating={7.6}
        />
        <Pelicula generos={['Suspenso', 'Thriller']} titulo="Jurassic Park" />
      </div>
    );
  }
}

export default TiraPeliculas;
