import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Principal from './PaginaP';
import LoginPage from './Form';
import MiComponente from './prueba';
import Index2 from './index2';

import Tour from './Tour';
import Historia from './Historia';
function Rutas() {
  return (
    <Router>
      <Routes>y
        <Route path="/" element={< Principal/>} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
