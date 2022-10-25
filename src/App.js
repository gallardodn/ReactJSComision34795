import logo from './logo.png';
import './App.scss';
import Card from './componentes/card.jsx';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <nav className='header__nav'><h3>Planos</h3><h3>Nodos</h3><h3>Cajas</h3></nav>
        <div className='header__buttons'><button>Nuevo Enlace</button></div>
      </header>
      <main className='elementos'>
        <Card />
      </main>
      <footer className='pie'>
        <h3 className='pie__item'>Soporte Tecnico</h3>
      </footer>
    </div>
  );
}

export default App;
