import logo from './logo.svg';
import ContenedorPublicidad from './components/ContenedorPublicidad';
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador'
import Gif from './components/Gif';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Gif />
        <Contador inicial={0} />
        <TiraPeliculas />
      </main>
    </div>
  );
}

export default App;
