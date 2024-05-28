import React from 'react';
import { createRoot } from 'react-dom/client'; // Corregir la importación
import './index.css';
import App from './App';

// Utiliza createRoot desde react-dom/client para crear un root
const root = createRoot(document.getElementById('root'));

// Renderiza tu aplicación dentro del root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




