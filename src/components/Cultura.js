import React, { useState } from 'react';

function Cultura() {
  const [inquietud, setInquietud] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar la inquietud al backend
    // Por ejemplo, puedes hacer una solicitud POST al servidor con la inquietud

    // Por ahora, simplemente mostraremos un mensaje de éxito
    alert('¡Tu inquietud ha sido enviada con éxito!');
    // Limpiar el campo de texto después de enviar la inquietud
    setInquietud('');
  };

  return (
    <div>
      <h2>Cultura Tributaria</h2>
      <p>
        En esta sección puedes dejar tus inquietudes relacionadas con la cultura tributaria.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inquietud">Déjanos tu inquietud:</label>
        <textarea
          id="inquietud"
          value={inquietud}
          onChange={(e) => setInquietud(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Enviar Inquietud</button>
      </form>
    </div>
  );
}

export default Cultura;