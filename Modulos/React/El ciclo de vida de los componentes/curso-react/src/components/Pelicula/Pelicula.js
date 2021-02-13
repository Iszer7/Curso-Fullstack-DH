import React from 'react';
import PropTypes from 'prop-types';
import '../Pelicula/Pelicula.css';

function Pelicula(props) {
  
  let listadoDeGeneros;
  if(props.generos != null) {
    listadoDeGeneros =
    <ul>
      {props.generos.map((genero, i) => (
        <li key={genero + i}> {genero} </li>
      ))}
    </ul>
  } else {
    listadoDeGeneros = "Esta pelicula no tiene Genero aun";
  }


  return (
    <div>
      <h2 className="peliculaTitulo">{props.titulo}</h2>
      <p>Rating: {props.rating}</p>
      { listadoDeGeneros }
    </div>
  );
}

Pelicula.propTypes = {
  rating: PropTypes.number,
  titulo: PropTypes.string
}

Pelicula.defaultProps = {
  rating: 0,
  generos: null
}

export default Pelicula;
