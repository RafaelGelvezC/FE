import React from 'react';
import { Link } from 'react-router-dom';

function Productos() {
  return (
    <div>
      <h2>Productos</h2>
      <p>Elige una opción:</p>
      <ul>
        <li>
          <Link to="/productos/liquidacion-impuestos">Liquidación de Impuestos</Link>
        </li>
        <li>
          <Link to="/productos/liquidacion-pagos">Liquidación de Pagos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Productos;



