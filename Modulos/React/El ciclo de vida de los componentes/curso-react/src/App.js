import logo from './logo.svg';
import TiraPeliculas from './components/TiraPeliculas';
import ContenedorPublicidad from './components/ContenedorPublicidad';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <ContenedorPublicidad>
          <h2>Woooo Publicidad!</h2>
        </ContenedorPublicidad>
        <TiraPeliculas />
        <ContenedorPublicidad>
          <ul>
            <li>Public 1</li>
            <li>Public 2</li>
            <li>Public 3</li>
            <li>Public 4</li>
          </ul>
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;
