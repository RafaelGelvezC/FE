import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Aquí podrías agregar la lógica para autenticar al usuario
    // usando la dirección de correo electrónico (email) y la contraseña (password)
    // por ejemplo, puedes hacer una solicitud a tu backend

    // Por ahora, simplemente mostraremos un mensaje de error si los campos están vacíos
    if (!email || !password) {
      setErrorMessage('Por favor, ingresa tu correo electrónico y contraseña.');
      return;
    }

    // Limpiar el mensaje de error si los campos están llenos
    setErrorMessage('');
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    // por ejemplo, redirigir al usuario a su perfil o a la página principal
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}

export default Login;


