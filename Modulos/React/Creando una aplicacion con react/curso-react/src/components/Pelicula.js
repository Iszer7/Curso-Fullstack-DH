import React from 'react';

function Pelicula() {
  let rating = 5.8;
    let generos = ['Accion', "Drama"];
  return (
    <div>
      <h2>Titulo de la pelicula</h2>
      <p>Rating: {rating > 6 ? 'Es una gran pelicula' : 'Pelicula desastroza'}</p>
      <ul>
          {generos.map(genero => <li> {genero} </li>)}
      </ul>
    </div>
  );
}

export default Pelicula;
