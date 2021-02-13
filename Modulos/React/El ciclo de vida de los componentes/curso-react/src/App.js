import logo from './logo.svg';
import ContenedorPublicidad from './components/ContenedorPublicidad';
import TiraPeliculas from './components/TiraPeliculas';
import Contador from './components/Contador'


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Contador inicial={0} />
        <TiraPeliculas />
      </main>
    </div>
  );
}

export default App;
