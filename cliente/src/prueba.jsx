import React from 'react';
import { useLocation } from 'react-router-dom';

const MiComponente = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Hola, mundo!</h1>
      <p>Este es un ejemplo de componente básico de React.</p>
      <p>La ubicación actual es: {location.pathname}</p>
    </div>
  );
};

export default MiComponente;
