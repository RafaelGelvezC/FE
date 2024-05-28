import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="AYUDA-Taxes Logo" />
      </div>
      <div className="nav-links">
        <Link to="/" onClick={() => handlePageChange('/')}>Inicio</Link>
        <div className="dropdown">
          <Link to="/productos" onClick={() => handlePageChange('/productos')}>Productos</Link>
          <div className="dropdown-content">
            <Link to="/productos/impuestos" onClick={() => handlePageChange('/productos/impuestos')}>Liquidación de Impuestos</Link>
            <Link to="/productos/pagos" onClick={() => handlePageChange('/productos/pagos')}>Liquidación de Pagos</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/tramites" onClick={() => handlePageChange('/tramites')}>Trámites Fáciles</Link>
          <div className="dropdown-content">
            <Link to="/tramites/impuestos" onClick={() => handlePageChange('/tramites/impuestos')}>Impuestos</Link>
            <Link to="/tramites/pqrs" onClick={() => handlePageChange('/tramites/pqrs')}>Buzón y PQRS</Link>
            <Link to="/tramites/rut" onClick={() => handlePageChange('/tramites/rut')}>RUT Tips</Link>
            <Link to="/tramites/devoluciones" onClick={() => handlePageChange('/tramites/devoluciones')}>Devoluciones y Compensaciones</Link>
            <Link to="/tramites/facilidades" onClick={() => handlePageChange('/tramites/facilidades')}>Facilidades</Link>
            <Link to="/tramites/sucesiones" onClick={() => handlePageChange('/tramites/sucesiones')}>Sucesiones</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/cultura" onClick={() => handlePageChange('/cultura')}>Cultura Tributaria</Link>
          <div className="dropdown-content">
            <Link to="/cultura/inquietudes" onClick={() => handlePageChange('/cultura/inquietudes')}>Deja tus Inquietudes</Link>
          </div>
        </div>
        <Link to="/login" onClick={() => handlePageChange('/login')}>Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar;


//verificar bien en tramites porque no se ven todas la opciones
//hacer que el menu se despliegue desde navbar y que no se vea en la pagina

