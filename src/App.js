import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa los componentes necesarios de react-router-dom
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Home from './components/Home'; // Importa el componente Home
import Productos from './components/Productos'; // Importa el componente Productos
import Tramites from './components/Tramites'; // Importa el componente Tramites
import Cultura from './components/Cultura'; // Importa el componente Cultura
import Login from './components/Login'; // Importa el componente Login

function App() {
  return (
    <Router> {/* Utiliza el componente Router para definir el enrutamiento */}
      <div>
        <Navbar /> {/* Renderiza el componente Navbar */}
        <Routes> {/* Utiliza el componente Routes para definir tus rutas */}
          <Route path="/" element={<Home />} /> {/* Define la ruta para la página de inicio */}
          <Route path="/productos" element={<Productos />} /> {/* Define la ruta para la página de productos */}
          <Route path="/tramites" element={<Tramites />} /> {/* Define la ruta para la página de trámites */}
          <Route path="/cultura" element={<Cultura />} /> {/* Define la ruta para la página de cultura */}
          <Route path="/login" element={<Login />} /> {/* Define la ruta para la página de inicio de sesión */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporta el componente App
