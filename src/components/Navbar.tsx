import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [abierto, setAbierto] = useState(false);

  const claseEnlace = ({ isActive }: { isActive: boolean }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/clients">
          AppClients
        </NavLink>
        <button className="navbar-toggler" type="button" aria-label="Abrir menú" onClick={() => setAbierto(!abierto)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={abierto ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={claseEnlace} to="/clients" end onClick={() => setAbierto(false)}>
                Ver clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={claseEnlace} to="/clients/new" onClick={() => setAbierto(false)}>
                Añadir clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={claseEnlace} to="/about" onClick={() => setAbierto(false)}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
