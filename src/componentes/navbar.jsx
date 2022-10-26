import logo from '../logo.png';
const Navbar = (props) => {
    return (  <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <nav className='header__nav'><h3>Planos</h3><h3>Nodos</h3><h3>Cajas</h3></nav>
    <div className='header__buttons'><button>Nuevo Enlace</button></div>
  </header>)
}

export default Navbar;