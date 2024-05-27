import React from 'react';
import { Link } from 'react-router-dom';

function Tramites() {
  return (
    <div>
      <h2>Trámites Fáciles</h2>
      <p>Elige una opción:</p>
      <ul>
        <li>
          <Link to="/tramites/impuestos">Impuestos</Link>
        </li>
        <li>
          <Link to="/tramites/pqrs">Buzón de PQRS</Link>
        </li>
        <li>
          <Link to="/tramites/rut">RUT Tips</Link>
        </li>
        <li>
          <Link to="/tramites/devoluciones">Devoluciones y Compensaciones</Link>
        </li>
        <li>
          <Link to="/tramites/sucesiones">Sucesiones</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tramites;