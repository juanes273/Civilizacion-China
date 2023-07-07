import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes de las diferentes páginas
import Principal from './PaginaP';


import Secciones from './Secciones';
import Historia from './Historia';
import Cultura from './Cultura';
import Religion from './Religion';
import Ciencia from './Ciencia';




function Rutas() {
  return (
    <Router>
      <Routes>y
        <Route path="/" element={< Principal/>} />
        <Route path="/secciones" element={<Secciones />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/religion" element={<Religion />} />
        <Route path="/ciencia" element={<Ciencia />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
