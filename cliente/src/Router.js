import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Principal from './PaginaP';
import LoginPage from './Form';
import MiComponente from './prueba';
import Index2 from './index2';

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiComponente />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/tour" element={<Index2 />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
