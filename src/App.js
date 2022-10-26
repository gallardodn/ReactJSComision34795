import './App.scss';
import Card from './componentes/card.jsx';
import Navbar from './componentes/navbar.jsx';
import Footer from './componentes/footer.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='elementos'>
        <Card nombre='Caja de Empalme' descripcion='Caja de emplame lorem' precio='$500' stock='5'/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
